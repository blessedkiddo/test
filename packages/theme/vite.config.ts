import path from "path";

import { defineConfig, normalizePath } from "vite";

import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "theme",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        // TODO: rename to @alfastrah-ui/styled
        "@supremes-ui/styled",
        "@headlessui/react",
      ],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
          "styled-components": "styled-components",
          "@headlessui/react": "@headlessui/react",
        },
      },
      treeshake: "smallest",
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    svgr(),
    dts({ copyDtsFiles: true }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, "package.json")),
          dest: normalizePath(path.resolve(__dirname, "dist")),
        },
      ],
    }),
  ],
});
