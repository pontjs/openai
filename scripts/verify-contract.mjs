import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const bytes = await readFile(resolve("pontx-spec.json"));
const spec = JSON.parse(bytes);
const provenance = JSON.parse(await readFile(resolve("source.provenance.json"), "utf8"));
const entries = Object.entries(spec.apis ?? {});
const schemas = Object.keys(spec.components?.schemas ?? {});
const tags = new Set((spec.tags ?? []).map(({ name }) => name));
const methodCounts = Object.fromEntries(["GET", "POST", "DELETE"].map((method) => [
  method,
  entries.filter(([, api]) => api.method === method).length,
]));

assert.equal(spec.pontx, "2.1");
assert.equal(spec.name, "openai");
assert.equal(spec.style, "RESTFul");
assert.equal(entries.length, 288);
assert.equal(schemas.length, 1421);
assert.equal(tags.size, 36);
assert.deepEqual(methodCounts, { GET: 122, POST: 123, DELETE: 43 });
assert.equal(new Set(entries.map(([, api]) => api.operationId)).size, 288);
assert.deepEqual(Object.keys(spec.components.securitySchemes).sort(), ["AdminApiKeyAuth", "ApiKeyAuth"]);
assert.deepEqual(spec.security, [{ ApiKeyAuth: [] }]);
assert(!Object.keys(spec.apis).some((key) => /(^|\/)(common|default)(\/|$)/.test(key)));

// SSE contracts must survive the mirror
const sseEntries = entries.filter(([, api]) => api.sse);
assert.equal(sseEntries.length, 7);
for (const [, api] of sseEntries) {
  assert.equal(api.sse.unknownEventPolicy, "preserve");
  assert.equal(api.sse.events?.message?.dataFormat, "text");
  assert(Object.values(api.responses ?? {}).some((response) => "text/event-stream" in (response.content ?? {})),
    `${api.operationId}: SSE media type missing from responses`);
}

for (const [key, api] of entries) {
  assert(api.method && api.path.startsWith("/"), `${key}: REST transport is incomplete`);
  assert(api.operationId, `${key}: operationId is missing`);
  assert(/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(api.operationId), `${key}: operationId is not a valid identifier`);
  if (key.includes("/")) {
    const [controller] = key.split("/", 2);
    const [firstTag] = api.tags ?? [];
    const normalizedTag = firstTag
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/[^A-Za-z0-9]+/g, " ")
      .trim()
      .match(/[A-Za-z0-9]+/g)
      ?.map((token, index) => index === 0 ? token.toLowerCase() : `${token[0].toUpperCase()}${token.slice(1).toLowerCase()}`)
      .join("");
    assert.equal(controller, normalizedTag, `${key}: controller must come from its explicit tag`);
  }
  assert(api.tags.every((tag) => tags.has(tag)), `${key}: undeclared tag`);
  assert.equal(api.metadata?.execution?.enabled, false, `${key}: Hub proxy must stay disabled`);
  assert.match(api.metadata.execution.disabledReason, /Hub|Pontx Hub/i, `${key}: direct-only reason is missing`);
  assert(api.requestExamples?.default?.request, `${key}: request example is missing`);
  assert(api.requestExamples.default.expectedStatus in api.responses, `${key}: request example status is not declared`);
  assert.match(api.requestExamples.default.expectedStatus, /^2(?:\d\d|[xX]{2})$/);
  for (const match of api.path.matchAll(/\{([^}]+)\}/g)) {
    const parameter = api.parameters?.find(({ in: location, name }) =>
      location === "path" && name === match[1]);
    assert.equal(parameter?.required, true, `${key}: path parameter ${match[1]} is not required`);
  }
}

const actualHash = createHash("sha256").update(bytes).digest("hex");
assert.equal(actualHash, provenance.metadata.sha256);
assert.equal(provenance.metadata.specPath, "products/openai/spec.pontx.json");
assert.equal(provenance.upstream.openApiSha256, "542299d304cdeb78deff4172b3790d52c7e7e75fb2b517e9c2787c52f1424acc");
assert.equal(provenance.upstream.license, "MIT");
assert.equal(provenance.derivation.endpoints, 288);
assert.equal(provenance.derivation.schemas, 1421);
assert.equal(provenance.derivation.sourceFree, true);

console.log(`Verified OpenAI contract ${actualHash}: 288 Endpoints, 1,421 Schemas, 36 explicit Controllers, 7 typed SSE Endpoints, and no Hub proxy execution.`);
