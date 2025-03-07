import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ['**/*.docx'],
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: "all",
  },
  build: {
    outDir: "dist", 
  },
  base: "./",
});
