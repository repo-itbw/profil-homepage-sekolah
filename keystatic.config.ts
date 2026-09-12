import { config, fields, collection, component } from "@keystatic/core";

// ============================================================================
// 1. MODULARISASI KOMPONEN EMBED (DRY Principle)
// ============================================================================
const komponenMultimedia = {
  // --- A. EMBED YOUTUBE EKSTERNAL ---
  embedYoutube: component({
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

  // --- D. EMBED MATEMATIKA (LATEX) ---
    embedMath: component({
      label: "Rumus Matematika (LaTeX)",
      schema: {
        formula: fields.text({
          label: "Sintaks LaTeX",
          description: "Contoh: E = mc^2 atau \\frac{a}{b}",
          multiline: true,
        }),
      },
      preview: (props) => `[ Rumus Matematika: ${props.fields.formula.value} ]`,
    }),
};

// ============================================================================
// 2. KONFIGURASI UTAMA KEYSTATIC
// ============================================================================
export default config({
  storage: import.meta.env.DEV 
    ? { kind: "local" } 
    : { kind: "cloud" },
  cloud: {
      project: "repo-itbw/homepage-dashboard", // Tempelkan Project Slug dari Keystatic Cloud Dashboard di sini
    },
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
            { label: "Prestasi", value: "Prestasi" },
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
          description: "Wajib gunakan format: mapel-kelas-topik (Contoh: fisika-10-hukum-newton) supaya nanti url webnya bagus",
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
            { label: "IPA", value: "IPA" },
            { label: "Bahasa Indonesia", value: "Bahasa Indonesia" },
            { label: "Bahasa Inggris", value: "Bahasa Inggris" },
            { label: "Kejuruan PPLG", value: "Kejuruan PPLG" },
            { label: "Kejuruan OTKP", value: "Kejuruan OTKP" },
            { label: "Kejuruan Tata Boga", value: "Kejuruan Tata Boga" },
            { label: "Kejuruan Perhotelan", value: "Kejuruan Perhotelan" },
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
          description: "Tuliskan ilmu yang akan dituangkan disini",
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
        // Array Objek untuk Mini Kuis
         kuis: fields.array(
          fields.object({
            pertanyaan: fields.text({ label: "Pertanyaan Kuis", multiline: true }),
            opsiA: fields.text({ label: "Opsi A" }),
            opsiB: fields.text({ label: "Opsi B" }),
            opsiC: fields.text({ label: "Opsi C" }),
            opsiD: fields.text({ label: "Opsi D" }),
            jawabanBenar: fields.select({
              label: "Kunci Jawaban",
              options: [
                { label: "Opsi A", value: "A" },
                { label: "Opsi B", value: "B" },
                { label: "Opsi C", value: "C" },
                { label: "Opsi D", value: "D" },
              ],
              defaultValue: "A"
            }),
            pembahasan: fields.text({ 
              label: "Pembahasan Singkat (Opsional)", 
              description: "Muncul setelah siswa menjawab",
              multiline: true 
              })
            }),
          {
            label: "Mini Quiz (Evaluasi Materi)",
            description: "Tambahkan beberapa pertanyaan untuk menguji pemahaman siswa. Kosongkan jika tidak ada kuis.",
            itemLabel: props => props.fields.pertanyaan.value || "Pertanyaan Baru"
          }
        ),
      },
    }),

    // ------------------------------------------------------------------------
    // KOLEKSI C: MADING DIGITAL (KARYA & POSTER)
    // ------------------------------------------------------------------------
    mading: collection({
      label: "Mading Digital",
      slugField: "slug",
      path: "content/mading/*",
      format: { contentField: "konten" },
      schema: {
        slug: fields.text({
          label: "Format Nama File (Slug)",
          description: "Wajib gunakan format: tahun-namakarya (Contoh: 2026-poster-lingkungan) supaya nanti url webnya bagus",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({ 
          label: "Judul Karya", 
          description: "Maksimal 25 karakter agar tata letak grid tetap rapi",
          validation: { length: { max: 25 } } 
        }),
        image: fields.image({
          label: "Gambar Karya Utama",
          directory: "public/MadingAssets/",
          publicPath: "/MadingAssets/",
        }),
        tanggal: fields.date({ 
          label: "Tanggal Publikasi", 
          defaultValue: { kind: "today" } 
        }),
        author: fields.text({ 
          label: "Nama Kreator / Pembuat", 
          defaultValue: "Jurnalis" 
        }),
        // Field konten dipertahankan sebagai syarat mesin markdoc (.mdoc), 
        // namun bisa dibiarkan kosong oleh penulis.
        konten: fields.document({
          label: " Bagian ini (Gausah di isi)",
          description: "Abaikan saja! Jangan di isi karena bagian ini tidak akan dirender",
          formatting: true,
        }),
      },
    }),

    // ------------------------------------------------------------------------
    // KOLEKSI D: GALERI & MEMORI SEKOLAH
    // ------------------------------------------------------------------------
    galeri: collection({
      label: "Galeri & Memori",
      slugField: "slug",
      path: "content/galeri/*",
      format: { contentField: "konten" },
      schema: {
        slug: fields.text({
          label: "Format Nama File (Slug)",
          description: "Wajib gunakan format: tahun-kategori-namasingkat (Contoh: kegiatan-karnaval-2026)",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({ 
          label: "Judul Momen/Foto", 
          validation: { length: { max: 150 } } 
        }),
        image: fields.image({
          label: "Berkas Gambar",
          directory: "public/GaleriAssets", // Penulisan presisi tanpa trailing slash
          publicPath: "/GaleriAssets",
        }),
        tanggal: fields.date({ 
          label: "Tanggal Pengambilan", 
          defaultValue: { kind: "today" } 
        }),
        kategori: fields.select({
          label: "Kategori Visual",
          options: [
            { label: "Kegiatan Siswa", value: "Kegiatan Siswa" },
            { label: "Kenangan & Alumni", value: "Kenangan & Alumni" },
            { label: "Fasilitas Sekolah", value: "Fasilitas Sekolah" },
            { label: "Prestasi", value: "Prestasi" },
          ],
          defaultValue: "Kegiatan Siswa",
        }),
        konten: fields.document({
          label: "Deskripsi Ekstra (Opsional)",
          description: "Silahkan isi untuk menceritakan kegiatan apa yang pernah terjadi dibalik gambar tersebut",
          tables: true, dividers: true, links: true,
          formatting: {
            inlineMarks: { bold: true, italic: true, strikethrough: true },
            listTypes: true, headingLevels: true, blockTypes: true,
          },
        }),
      },
    }),
  },
});
