import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/movie-database/",
  build: {
    outDir: "movie-database",
  },
  plugins: [react()],
});
