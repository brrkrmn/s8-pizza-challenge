import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import istanbul from "vite-plugin-istanbul";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.VITE_PORT || 5173,
  },
  plugins: [
    react(),
    tailwindcss(),
    istanbul({
      include: "src/**/*",
      exclude: ["node_modules", "test"],
      extension: [".js", ".ts", ".vue", ".jsx", ".tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
