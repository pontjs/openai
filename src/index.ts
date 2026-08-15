import { createGracefulClient } from "@pontx/sdk";
import type { APIs } from "./apis/openai/apis";
import { specMeta } from "./apis/openai/apiMeta";
import {
  DEFAULT_BASE_URL,
  createOpenAiRequest,
  type OpenAiClientOptions,
} from "./runtime";

export type { OpenAiClientOptions } from "./runtime";
export type OpenAiClient = APIs;

export function createOpenAiClient(
  options: OpenAiClientOptions = {},
): OpenAiClient {
  const request = createOpenAiRequest(options);
  return createGracefulClient<APIs>({
    pontxSpecMeta: specMeta as never,
    baseUrl: options.baseUrl ?? DEFAULT_BASE_URL,
    baseRequestFn: request,
  }) as unknown as OpenAiClient;
}

const openAiClient = createOpenAiClient();

export {
  OpenAiHttpError,
  OpenAiAuthenticationError,
  createOpenAiRequest,
} from "./runtime";
export type { APIs } from "./apis/openai/apis";
export * as schemas from "./apis/openai/schemas";
export { openAiClient };
export default openAiClient;
