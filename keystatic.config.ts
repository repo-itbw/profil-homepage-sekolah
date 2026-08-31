import { config, fields, collection, component } from "@keystatic/core";

// ============================================================================
// 1. MODULARISASI KOMPONEN EMBED (DRY Principle)
// ============================================================================
const komponenMultimedia = {
  // --- A. EMBED YOUTUBE EKSTERNAL ---
  embedVideo: component({
    label: "Embed YouTube Video",
    schema: {
      youtubeUrl: fields.text({
        label: "URL YouTube Penuh",
        description: "Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ atau https://youtu.be/dQw4w9WgXcQ",
        validation: { length: { min: 10 } },
      }),
    },
    preview: (props) => `[ YouTube: ${props.fields.youtubeUrl.value} ]`,
  }),

  // --- B. EMBED WEB EKSTERNAL ---
  embedWeb: component({
    label: "Embed Web Eksternal",
    schema: {
      url: fields.text({
        label: "URL Web",
        description: "Masukkan URL valid bersertifikat HTTPS (contoh: https://example.com)",
        validation: { length: { min: 5 } },
      }),
      title: fields.text({
        label: "Judul Frame",
        description: "Untuk aksesibilitas pembaca layar (Screen Reader)",
        defaultValue: "Embed Web",
      }),
    },
    preview: (props) => `[ Embed Web: ${props.fields.url.value} ]`,
  }),

  // --- C. EMBED GAMBAR EKSTERNAL ---
  embedImage: component({
    label: "Gambar Eksternal",
    schema: {
      url: fields.text({
        label: "URL Gambar",
        description: "Tautan langsung menuju file gambar (berakhiran .jpg, .png, dll)",
        validation: { length: { min: 5 } },
      }),
      alt: fields.text({
        label: "Teks Alternatif (Alt)",
        description: "Wajib diisi untuk SEO dan aksesibilitas",
      }),
      caption: fields.text({
        label: "Keterangan (Caption)",
        description: "Opsional. Teks yang muncul di bawah gambar.",
      }),
    },
    preview: (props) => `[ Gambar Eksternal: ${props.fields.alt.value || "Tanpa alt"} ]`,
  }),
};

// ============================================================================
// 2. KONFIGURASI UTAMA KEYSTATIC
// ============================================================================
export default config({
  storage: { kind: "local" }, // Ubah ke 'github' saat deploy
  collections: {
    
    // ------------------------------------------------------------------------
    // KOLEKSI A: BERITA & ARTIKEL
    // ------------------------------------------------------------------------
    berita: collection({
      label: "Berita & Artikel",
      slugField: "slug",
      path: "content/berita/*",
      format: { contentField: "konten" },
      schema: {
        slug: fields.text({
          label: "Format Nama File (Slug)",
          description: "Wajib gunakan format: kategori-tanggal-namasingkat (Contoh: pengumuman-2026-08-25-rapat)",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({ label: "Judul Berita", validation: { length: { max: 150 } } }),
        deskripsi: fields.text({ label: "Deskripsi Singkat", validation: { length: { max: 150 } } }),
        image: fields.image({
          label: "Gambar Utama",
          directory: "public/BeritaAssets/",
          publicPath: "/BeritaAssets/",
        }),
        tanggal: fields.date({ label: "Tanggal Publikasi", defaultValue: { kind: "today" } }),
        kategori: fields.select({
          label: "Kategori",
          options: [
            { label: "Berita", value: "Berita" },
            { label: "Pengumuman", value: "Pengumuman" },
          ],
          defaultValue: "Berita",
        }),
        penerbit: fields.text({ label: "Penerbit", defaultValue: "Admin" }),
        konten: fields.document({
          label: "Isi Konten Utama",
          tables: true, dividers: true, links: true,
          formatting: {
            inlineMarks: { bold: true, italic: true, strikethrough: true, code: true },
            listTypes: true, headingLevels: true, blockTypes: true,
          },
          images: {
            directory: "public/BeritaAssets/",
            publicPath: "/BeritaAssets/",
          },
          componentBlocks: komponenMultimedia, // <--- Pemanggilan modular
        }),
      },
    }),

    // ------------------------------------------------------------------------
    // KOLEKSI B: E-LEARNING (MATERI PEMBELAJARAN)
    // ------------------------------------------------------------------------
    elearning: collection({
      label: "E-Learning (Materi)",
      slugField: "slug",
      path: "content/elearning/*",
      format: { contentField: "konten" },
      schema: {
        slug: fields.text({
          label: "Format Nama File (Slug)",
          description: "Wajib gunakan format: mapel-kelas-topik (Contoh: fisika-10-hukum-newton)",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({ 
          label: "Judul Materi", 
          validation: { length: { max: 150 } } 
        }),
        deskripsi: fields.text({ 
          label: "Kompetensi / Rangkuman Singkat", 
          validation: { length: { max: 200 } } 
        }),
        image: fields.image({
          label: "Gambar Sampul Materi",
          directory: "public/ElearningAssets/",
          publicPath: "/ElearningAssets/",
        }),
        tanggal: fields.date({ 
          label: "Tanggal Rilis Materi", 
          defaultValue: { kind: "today" } 
        }),
        kategori: fields.select({
          label: "Mata Pelajaran",
          description: "Pilih klasifikasi mata pelajaran",
          options: [
            { label: "Matematika", value: "Matematika" },
            { label: "Fisika", value: "Fisika" },
            { label: "Kimia", value: "Kimia" },
            { label: "Biologi", value: "Biologi" },
            { label: "Bahasa Indonesia", value: "Bahasa Indonesia" },
            { label: "Bahasa Inggris", value: "Bahasa Inggris" },
            { label: "Kejuruan Terapan", value: "Kejuruan Terapan" },
            { label: "Umum / Lintas Minat", value: "Umum" },
          ],
          defaultValue: "Umum",
        }),
        pengajar: fields.text({ 
          label: "Nama Pengajar", 
          defaultValue: "Guru Mata Pelajaran" 
        }),
        konten: fields.document({
          label: "Isi Materi Pembelajaran",
          tables: true, dividers: true, links: true,
          formatting: {
            inlineMarks: { bold: true, italic: true, strikethrough: true, code: true },
            listTypes: true, headingLevels: true, blockTypes: true,
          },
          images: {
            directory: "public/ElearningAssets/", // <--- Rute spesifik Elearning
            publicPath: "/ElearningAssets/",
          },
          componentBlocks: komponenMultimedia, // <--- Pemanggilan modular digunakan kembali
        }),
      },
    }),
  },
});
