import { defineConfig, type Plugin } from "vite";
import { resolve } from "path";
import { minify } from "terser";
import { visualizer } from "rollup-plugin-visualizer";

const minifyBundle = (): Plugin => ({
  name: "minify-bundle",
  async generateBundle(_, bundle) {
    for (const asset of Object.values(bundle)) {
      if (asset.type == "chunk") {
        try {
          const code = (
            await minify(asset.code, {
              mangle: true,
              compress: {
                passes: 10,
              },
            })
          ).code;
          if (!code) throw new Error("Unable to produce minified code...");
          asset.code = code;
        } catch (err) {
          throw new Error(err);
        }
      }
    }
  },
});
export default defineConfig({
  plugins: [
    minifyBundle(),
    /**
     * @note MUST COME LAST
     *
     * Generates a visualization of the bundle to analyze packages and their sizes
     * @doc https://github.com/btd/rollup-plugin-visualizer
     *
     */
    visualizer({
      template: "raw-data",
      brotliSize: true,
      gzipSize: true,
    }),
  ],
  build: {
    lib: {
      name: "median",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    minify: false,
    sourcemap: true,
  },
});
