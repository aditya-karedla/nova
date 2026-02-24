import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/styles.css"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  minify: false,
  external: ["react", "react-dom"],
  loader: {
    ".css": "copy",
  },
});
