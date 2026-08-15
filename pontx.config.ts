import { createGracefulClientPlugin } from "@pontx/sdk/plugin";
import { defineConfig } from "pontx";

export default defineConfig({
  outDir: "src/apis",
  origins: [{
    name: "openai",
    localPath: "./pontx-spec.json",
  }],
  plugins: [createGracefulClientPlugin()],
});
