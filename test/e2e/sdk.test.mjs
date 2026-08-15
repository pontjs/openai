import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";

const execFileAsync = promisify(execFile);
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

function startFixtureServer(context) {
  const requests = [];
  const server = createServer((request, response) => {
    requests.push({ method: request.method, url: request.url, headers: request.headers });
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ object: "list", data: [{ id: "gpt-4o", object: "model" }] }));
  });
  return new Promise((resolveListen) => server.listen(0, "127.0.0.1", () => {
    const address = server.address();
    assert(address && typeof address === "object");
    context.after(() => new Promise((resolveClose) => server.close(resolveClose)));
    resolveListen({ requests, baseUrl: `http://127.0.0.1:${address.port}` });
  }));
}

test("the built ESM and CJS SDK surfaces preserve OpenAI paths and caller-local bearer auth", async (context) => {
  const { requests, baseUrl } = await startFixtureServer(context);
  const esm = await import(`${pathToFileURL(resolve(repositoryRoot, "dist/index.mjs")).href}?e2e=${Date.now()}`);
  const client = esm.createOpenAiClient({ baseUrl, apiKey: "fixture-access-token" });
  const result = await client.models.listModels({});
  assert.equal(result.object, "list");
  assert.equal(requests[0].method, "GET");
  assert.equal(requests[0].url, "/models");
  assert.equal(requests[0].headers.authorization, "Bearer fixture-access-token");

  const require = createRequire(import.meta.url);
  const cjs = require(resolve(repositoryRoot, "dist/index.js"));
  assert.equal(typeof cjs.createOpenAiClient, "function");
  assert(cjs.default.models);
});

test("the built CLI lists the complete contract and performs a caller-local safe read", async (context) => {
  const { requests, baseUrl } = await startFixtureServer(context);
  const cli = resolve(repositoryRoot, "dist/bin/cli.cjs");
  const env = {
    ...process.env,
    OPENAI_BASE_URL: baseUrl,
    OPENAI_API_KEY: "fixture-access-token",
  };
  const { stdout: help } = await execFileAsync(process.execPath, [cli, "--help"], { cwd: repositoryRoot, env });
  assert.match(help, /pontx-openai/);
  const { stdout: endpoints } = await execFileAsync(process.execPath, [cli, "list", "apis"], { cwd: repositoryRoot, env });
  assert.equal(endpoints.trim().split("\n").length, 288);
  assert.match(endpoints, /models\.listModels/);
  assert.doesNotMatch(endpoints, /common\.|default\./);

  const { stdout } = await execFileAsync(process.execPath, [cli, "call", "models", "listModels"], { cwd: repositoryRoot, env });
  assert.equal(JSON.parse(stdout).object, "list");
  assert.equal(requests[0].url, "/models");
  assert.equal(requests[0].headers.authorization, "Bearer fixture-access-token");

  const preview = await execFileAsync(process.execPath, [
    cli, "call", "assistants", "createAssistant", "--body", "{\"model\":\"gpt-4o\"}", "--dry-run",
  ], { cwd: repositoryRoot, env });
  const token = /Mutation confirmation \(valid for 5 minutes and bound to this exact request\): (ptx1\.[a-zA-Z0-9.]+)/.exec(
    `${preview.stdout}\n${preview.stderr}`,
  )?.[1];
  assert(token, "mutation dry-run did not emit a request-bound confirmation token");
  assert.equal(requests.length, 1, "dry-run must not reach the provider");
  await execFileAsync(process.execPath, [
    cli, "call", "assistants", "createAssistant", "--body", "{\"model\":\"gpt-4o\"}", "--confirm", token,
  ], { cwd: repositoryRoot, env });
  assert.equal(requests[1].method, "POST");
  assert.equal(requests[1].url, "/assistants");
  assert.equal(requests[1].headers.authorization, "Bearer fixture-access-token");
});
