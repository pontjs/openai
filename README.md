# @pontx/openai

[Pontx Hub SDK guide](https://pontx.dev/en/sdks/openai)

Type-safe OpenAI API SDK and CLI generated from the exact product-owned
PontxSpec metadata commit. It covers the complete 288 Endpoint contract
(including typed SSE streaming surfaces) and makes caller-directed requests
only.

## Install

```bash
pnpm add @pontx/openai
```

## SDK

Keep the API key outside source and logs:

```ts
import { createOpenAiClient } from "@pontx/openai";

const client = createOpenAiClient({
  apiKey: process.env.OPENAI_API_KEY,
});

const models = await client.models.listModels();
```

The SDK reads `OPENAI_API_KEY` (or `OPENAI_ADMIN_API_KEY` for organization
administration Endpoints) from the caller environment when no option is
passed. It never persists credential material.

## CLI

```bash
pnpm add --global @pontx/openai
pontx-openai list apis
pontx-openai call models listModels --dry-run
```

All POST and DELETE calls are blocked until the exact same request has been
reviewed via `--dry-run` and repeated with its short-lived `--confirm` token.
Previews redact credential-like input names. OpenAI traffic stays caller-local;
Pontx Hub does not proxy it.

## Legal and service boundary

The immutable OpenAPI input is MIT licensed. OpenAI Platform service use,
website content, and trademarks are governed separately by OpenAI's terms.
This independently branded SDK is not endorsed by OpenAI.
