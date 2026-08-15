import { describe, expect, it, vi } from "vitest";
import {
  OpenAiAuthenticationError,
  OpenAiHttpError,
  createOpenAiClient,
} from "../../src/index";

describe("@pontx/openai", () => {
  it("exposes only explicit PontxSpec controllers and untagged root methods", () => {
    const client = createOpenAiClient({ apiKey: "fixture-token", fetchImpl: vi.fn() as unknown as typeof fetch });
    const controllers = Object.keys(client).filter((key) => !key.includes("/"));
    expect(controllers).toContain("models");
    expect(controllers).toContain("responses");
    expect(controllers).toContain("realtime");
    expect(controllers).toContain("ListContainers");
    expect("common" in client).toBe(false);
    expect("default" in client).toBe(false);
  });

  it("adds only a caller-local bearer token to OpenAI calls", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ object: "list", data: [{ id: "gpt-4o", object: "model" }] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    );
    const client = createOpenAiClient({
      baseUrl: "https://openai.fixture",
      apiKey: "fixture-api-key",
      fetchImpl: fetchMock,
    });

    const response = await client.models.listModels({});
    expect(response).toMatchObject({ object: "list" });
    const [url, init] = fetchMock.mock.calls[0] as [URL, RequestInit];
    expect(url.toString()).toBe("https://openai.fixture/models");
    expect(init.method).toBe("GET");
    expect(new Headers(init.headers).get("authorization")).toBe("Bearer fixture-api-key");
  });

  it("returns typed upstream errors without exposing authentication material", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: { message: "rate limit" } }), {
      status: 429,
      headers: { "content-type": "application/json" },
    }));
    const client = createOpenAiClient({ apiKey: "fixture-token", fetchImpl: fetchMock });
    await expect(client.models.listModels({})).rejects.toMatchObject<Partial<OpenAiHttpError>>({
      name: "OpenAiHttpError",
      status: 429,
      responseBody: { error: { message: "rate limit" } },
    });
  });

  it("fails locally when no caller-owned authentication is configured", async () => {
    const client = createOpenAiClient({ fetchImpl: vi.fn() as unknown as typeof fetch });
    await expect(client.models.listModels({})).rejects.toBeInstanceOf(OpenAiAuthenticationError);
  });
});
