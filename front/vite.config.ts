import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:4001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
