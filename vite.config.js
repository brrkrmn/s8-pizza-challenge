import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
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
