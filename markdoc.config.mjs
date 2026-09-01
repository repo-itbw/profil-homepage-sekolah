import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

// suntik modul khusus shiki
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  extends: [
      shiki({
        theme: 'dracula',
        wrap: false,
      })
    ],
  tags: {
    // Kunci 'embedVideo' harus sama persis dengan nama componentBlocks di Keystatic
    embedVideo: {
      render: component("./src/components/EmbedExternal/EmbedVideo.astro"),
      attributes: {
        // Deklarasi tipe data parameter yang masuk
        youtubeUrl: { type: String, required: true }
      },
    },
    embedWeb: {
      render: component("./src/components/EmbedExternal/EmbedWeb.astro"),
      attributes: {
        url: { type: String, required: true },
        title: { type: String, required: false },
      },
    },

    embedImage: {
      render: component("./src/components/EmbedExternal/EmbedImage.astro"),
      attributes: {
        url: { type: String, required: true },
        alt: { type: String, required: true },
        caption: { type: String, required: false },
      },
    },
  },
});
