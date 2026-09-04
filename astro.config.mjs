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
  site: "https://test.axelkenshi.my.id/",
  output: "static", 
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  devToolbar: {
    enabled: true,
  },
  // Mendaftarkan Vite plugin untuk kompilasi Tailwind v4
  vite: {
    build: {
      chunkSizeWarningLimit: 2048, // Menarik batas peringatan dari 500 KB ke 1024 KB (1 MB)
    },
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
