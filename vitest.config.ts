import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.stories.tsx",
        "**/*.config.ts",
        "**/index.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@nova/core": path.resolve(__dirname, "./packages/core/src"),
      "@nova/tokens": path.resolve(__dirname, "./packages/tokens/src"),
      "@nova/hooks": path.resolve(__dirname, "./packages/hooks/src"),
    },
  },
});
