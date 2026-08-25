// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react"; // Impor paket react untuk keystatic
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // kompresor otomatis uploader gambar

export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  // Mendaftarkan Vite plugin untuk kompilasi Tailwind v4
  vite: {
    plugins: [
      tailwindcss(),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { quality: 80 },
      }),
    ],
    // Mengizinkan semua domain trycloudflare untuk tunnel public
    server: {
      allowedHosts: [".trycloudflare.com"],
    },
  },
  // Mendaftarkan integrasi ekosistem Astro
  integrations: [
    react(),
    svelte(),
    markdoc({
      allowUnhandledTags: false,
    }),
    keystatic(),
  ],
  output: "static",
});
