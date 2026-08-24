// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  // Mendaftarkan Vite plugin untuk kompilasi Tailwind v4
  vite: {
    plugins: [tailwindcss()],
  },
  // Mendaftarkan integrasi ekosistem Astro
  integrations: [
    svelte(),
    markdoc(),
    keystatic()
  ],
});