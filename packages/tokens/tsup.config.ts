import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/colors.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  minify: false,
  external: [],
});
