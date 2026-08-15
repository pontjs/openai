import { createOpenAiClient } from "../../dist/index.mjs";

const client = createOpenAiClient({ apiKey: "fixture-token" });

client.models.listModels({});
client.responses.createResponse({ model: "gpt-4o", input: "hello" });
client.realtime.createRealtimeSession({ client_secret: { value: "fixture-secret", expires_at: 1900000000 } });
client.ListContainers({});

// @ts-expect-error Controllers are derived only from explicit PontxSpec tags.
client.common.listModels({});
// @ts-expect-error Query parameters are an object, not a string.
client.models.listModels("not-an-options-object");
