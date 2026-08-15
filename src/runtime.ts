export const DEFAULT_BASE_URL = "https://api.openai.com/v1";
export const BASE_URL_ENV = "OPENAI_BASE_URL";
export const API_KEY_ENV = "OPENAI_API_KEY";
export const ADMIN_API_KEY_ENV = "OPENAI_ADMIN_API_KEY";

const runtimeEnv: Record<string, string | undefined> =
  typeof process === "undefined" ? {} : process.env;

export type OpenAiClientOptions = {
  baseUrl?: string;
  apiKey?: string;
  adminApiKey?: string;
  fetchImpl?: typeof fetch;
};

export class OpenAiHttpError extends Error {
  readonly status: number;
  readonly responseBody: unknown;

  constructor(status: number, responseBody: unknown) {
    super(`OpenAI request failed with HTTP ${status}.`);
    this.name = "OpenAiHttpError";
    this.status = status;
    this.responseBody = responseBody;
  }
}

export class OpenAiAuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OpenAiAuthenticationError";
  }
}

function resolveOptions(options: OpenAiClientOptions) {
  const baseUrl = options.baseUrl ?? runtimeEnv[BASE_URL_ENV] ?? DEFAULT_BASE_URL;
  const apiKey = options.apiKey ?? runtimeEnv[API_KEY_ENV];
  const adminApiKey = options.adminApiKey ?? runtimeEnv[ADMIN_API_KEY_ENV];
  const fetchImpl = options.fetchImpl ?? fetch;
  return { baseUrl, apiKey, adminApiKey, fetchImpl };
}

async function decode(response: Response) {
  if (response.status === 204) return undefined;
  const contentType = response.headers.get("content-type") ?? "";
  let value: unknown;
  if (contentType.includes("json")) value = await response.json();
  else value = await response.text();
  if (!response.ok) throw new OpenAiHttpError(response.status, value);
  return value;
}

/**
 * Creates a caller-local request function. The OpenAI API key is read only
 * from options or the caller environment and is never exposed through
 * previews, errors, or logs.
 */
export function createOpenAiRequest(options: OpenAiClientOptions = {}) {
  const resolved = resolveOptions(options);

  return async (input: string, init: RequestInit): Promise<unknown> => {
    const url = new URL(input, resolved.baseUrl);
    const headers = new Headers(init.headers);
    if (!headers.has("Authorization")) {
      const apiKey = resolved.apiKey ?? resolved.adminApiKey;
      if (!apiKey) {
        throw new OpenAiAuthenticationError(
          `Set ${API_KEY_ENV} (or ${ADMIN_API_KEY_ENV} for organization administration Endpoints) before making an OpenAI request.`,
        );
      }
      headers.set("Authorization", `Bearer ${apiKey}`);
    }
    const response = await resolved.fetchImpl(url, { ...init, headers });
    return decode(response);
  };
}
