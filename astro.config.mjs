// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import icon from 'astro-icon';
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react"; // Impor paket react untuk keystatic
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // kompresor otomatis uploader gambar
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel"; // Integrasi deployment ke vercel

export default defineConfig({
  site: "",
  output: "hybrid",
  adapter: vercel(),
  devToolbar: {
    enabled: true,
  },
  // Mendaftarkan Vite plugin untuk kompilasi Tailwind v4
  vite: {
    plugins: [
      tailwindcss(),
      ViteImageOptimizer({
        test: /\.(jpe?g|png|webp|svg)$/i,
        includePublic: true,
        png: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { quality: 80 },
        svg: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: { overrides: { removeViewBox: false } },
            },
          ],
        },
      }),
    ],
    // Mengizinkan semua domain trycloudflare untuk tunnel public
    server: {
      allowedHosts: [".trycloudflare.com"],
    },
  },
  // Mendaftarkan integrasi ekosistem Astro
  integrations: [
    icon(),
    react(),
    svelte(),
    markdoc({
      allowUnhandledTags: false,
    }),
    keystatic(),
    sitemap(),
  ],
});
