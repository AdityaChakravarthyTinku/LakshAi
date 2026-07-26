import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
// NOTE: If deploying under a subdirectory (e.g. https://example.com/laksh-ai/),
// set `base: "/laksh-ai/"` below. For a root custom domain, keep `base: "/"`.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
