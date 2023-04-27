import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import entryJson from "./entry.json";
 
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/index.ts",
      fileName: "animation",
      // the proper extensions will be added
      formats: ["es"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    "process.env.NODE_ENV": `'${process.env.NODE_ENV}'`,
  },
});