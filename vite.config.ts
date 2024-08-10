import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs", "umd", "iife"],
      name: "FastMedian", // Global variable name for UMD build
      fileName: "index",
    },
    rollupOptions: {
      output: {
        sourcemap: true,
      },
    },
  },
});
