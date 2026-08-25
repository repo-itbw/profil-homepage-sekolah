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
          directory: "public/assets/konten",
          publicPath: "/assets/konten",
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
          formatting: true,
          links: true,

          // 1. AKTIVASI GAMBAR INTERNAL KONTEN
          images: {
            directory: "public/assets/konten", // Folder terpisah agar rapi
            publicPath: "/assets/konten/",
          },

          // 2. KERANGKA KOMPONEN EMBED (Persiapan masa depan)
          componentBlocks: {
            embedVideo: component({
              label: "Embed YouTube Video",
              schema: {
                videoId: fields.text({
                  label: "YouTube Video ID",
                  description: "Contoh: dQw4w9WgXcQ",
                }),
              },
              // Pratinjau sederhana di editor Keystatic
              preview: (props) =>
                `[ YouTube Video: ${props.fields.videoId.value} ]`,
            }),
          },
        }),
      },
    }),
  },
});
