import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // New change from TailwindV4

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/FM-Product-Preview-Card-Component/",
  server: { host: true },
});
