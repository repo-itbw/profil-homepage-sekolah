import { config, fields, collection, component } from "@keystatic/core";

export default config({
  storage: { kind: "local" }, // Ubah ke 'github' saat deploy
  collections: {
    berita: collection({
      label: "Berita & Artikel",
      // Mengubah acuan nama file menjadi field khusus bernama 'slug'
      slugField: "slug",
      path: "content/berita/*",
      format: { contentField: "konten" },
      schema: {
        // 1. Field khusus pengatur nama file (URL) dan struktur pesan Commit
        slug: fields.text({
          label: "Format Nama File (Slug)",
          description:
            "Wajib gunakan format: kategori-tanggal-namasingkat (Contoh: pengumuman-2026-08-25-rapat)",
          validation: { length: { min: 3 } },
        }),

        // 2. Field ini akan aman tersimpan ke dalam frontmatter Zod
        judul: fields.text({
          label: "Judul Berita",
          validation: { length: { max: 150 } },
        }),

        deskripsi: fields.text({
          label: "Deskripsi Singkat",
          validation: { length: { max: 150 } },
        }),

        image: fields.image({
          label: "Gambar Utama",
          directory: "public/BeritaAssets/",
          publicPath: "/BeritaAssets/",
        }),

        tanggal: fields.date({
          label: "Tanggal Publikasi",
          defaultValue: { kind: "today" },
        }),

        // 3. Menggunakan select untuk mengunci input pengguna
        kategori: fields.select({
          label: "Kategori",
          description: "Pilih salah satu atau lebih",
          options: [
            { label: "Berita", value: "Berita" },
            { label: "Pengumuman", value: "Pengumuman" },
          ],
          defaultValue: "Berita",
        }),

        penerbit: fields.text({
          label: "Penerbit",
          defaultValue: "Admin",
        }),

        konten: fields.document({
          label: "Isi Konten Utama",

          // 1. AKTIVASI TABEL & PEMISAH
          tables: true, // Memunculkan opsi tabel (ikon kotak matriks)
          dividers: true, // Memunculkan opsi garis horizontal (---)
          links: true,

          // 2. DEFINISI FORMAT EKSPLISIT
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true, // Memastikan ikon Tx aktif
              code: true,
            },
            listTypes: true,
            headingLevels: true,
            blockTypes: true,
          },

          images: {
            directory: "public/BeritaAssets/",
            publicPath: "/BeritaAssets/",
          },

          componentBlocks: {
            // --- 1. EMBED YOUTUBE EKSTERNAL ---
            embedVideo: component({
              label: "Embed YouTube Video",
              schema: {
                youtubeUrl: fields.text({
                  label: "URL YouTube Penuh",
                  description:
                    "Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ atau https://youtu.be/dQw4w9WgXcQ",
                  validation: { length: { min: 10 } },
                }),
              },
              preview: (props) =>
                `[ YouTube: ${props.fields.youtubeUrl.value} ]`,
            }),
            
            // --- 2. EMBED WEB EKSTERNAL ---
            embedWeb: component({
              label: "Embed Web Eksternal",
              schema: {
                url: fields.text({
                  label: "URL Web",
                  description:
                    "Masukkan URL valid bersertifikat HTTPS (contoh: https://example.com)",
                  validation: { length: { min: 5 } },
                }),
                title: fields.text({
                  label: "Judul Frame",
                  description:
                    "Untuk aksesibilitas pembaca layar (Screen Reader)",
                  defaultValue: "Embed Web",
                }),
              },
              preview: (props) => `[ Embed Web: ${props.fields.url.value} ]`,
            }),

            // --- 3. EMBED GAMBAR EKSTERNAL ---
            embedImage: component({
              label: "Gambar Eksternal",
              schema: {
                url: fields.text({
                  label: "URL Gambar",
                  description:
                    "Tautan langsung menuju file gambar (berakhiran .jpg, .png, .webp, dll)",
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
              preview: (props) =>
                `[ Gambar Eksternal: ${props.fields.alt.value || "Tanpa alt"} ]`,
            }),
            
          },
        }),
      },
    }),
  },
});
