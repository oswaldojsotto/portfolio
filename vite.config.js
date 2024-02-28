import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import vuetify from "@vuetify/vite-plugin";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vue(), vuetify({ autoImport: true })],
  define: { "process.env": {} },
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  base: "./",
});
