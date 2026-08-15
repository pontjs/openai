import { runCLI } from "pontx/sdk-cli";
import { BASE_URL_ENV, DEFAULT_BASE_URL, createOpenAiRequest } from "./src/runtime";

export default runCLI({
  name: "pontx-openai",
  executeApi: {
    baseURL: process.env[BASE_URL_ENV] ?? DEFAULT_BASE_URL,
    fetchFn: createOpenAiRequest(),
    previewSensitiveFields: [
      "apiKey", "adminApiKey", "authorization", "token", "secret",
      "password", "key", "credential", "clientSecret", "bearer",
    ],
  },
});
