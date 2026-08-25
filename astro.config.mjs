// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  // Mendaftarkan Vite plugin untuk kompilasi Tailwind v4
  vite: {
    plugins: [tailwindcss()],
    // Mengizinkan semua domain trycloudflare
    server: {
          allowedHosts: ['.trycloudflare.com'], 
        },
  },
  // Mendaftarkan integrasi ekosistem Astro
  integrations: [svelte(), markdoc(), keystatic()],
});