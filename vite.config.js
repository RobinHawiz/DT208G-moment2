import { defineConfig } from "vite";
import { resolve } from "path";
import checker from "vite-plugin-checker";

const base = "/DT208G-moment2/";
const root = "src/pages";
const publicDir = "../assets";
const outDir = "../../dist";

export default defineConfig({
  base,
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, root, "index.html"),
      },
      output: {
        entryFileNames: "js/[name]-[hash].js", // JS files
        chunkFileNames: "js/[name]-[hash].js", // Chunked JS files
        assetFileNames: "styles/[name]-[hash][extname]", // CSS
      },
    },
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@ts": resolve(__dirname, "src/ts"),
      "@styles": resolve(__dirname, "src/styles"),
    },
  },
  plugins: [
    checker({
      typescript: true,
    }),
  ],
});
