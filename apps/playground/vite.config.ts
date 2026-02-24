import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@nova/core": path.resolve(__dirname, "../../packages/core/src"),
      "@nova/tokens": path.resolve(__dirname, "../../packages/tokens/src"),
      "@nova/hooks": path.resolve(__dirname, "../../packages/hooks/src"),
    },
  },
});
