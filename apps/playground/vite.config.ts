import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@aditya-karedla/core": path.resolve(__dirname, "../../packages/core/src"),
      "@aditya-karedla/tokens": path.resolve(__dirname, "../../packages/tokens/src"),
      "@aditya-karedla/hooks": path.resolve(__dirname, "../../packages/hooks/src"),
    },
  },
});
