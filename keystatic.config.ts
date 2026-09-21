import {
  config,
  fields,
  singleton,
  collection,
  component,
} from "@keystatic/core";

// ============================================================================
// 0. MODULARISASI SUMBER GAMBAR (Hanya untuk Entitas Dinamis Tinggi)
// ============================================================================
const fleksibelImageField = ({
  label,
  description,
  directory,
  publicPath,
  isRequired = false,
}: {
  label: string;
  description?: string;
  directory: string;
  publicPath: string;
  isRequired?: boolean;
}) => {
  return fields.conditional(
    fields.select({
      label: `Metode Input ${label}`,
      description:
        "Pilih metode unggah dari komputer atau tautkan URL dari Cloud/CDN. Tapi sangat disarankan pakai url cdn alih alih file lokal",
      options: [
        { label: "Upload File Lokal", value: "lokal" },
        { label: "URL Eksternal (CDN/Cloud)", value: "eksternal" },
      ],
      defaultValue: "lokal",
    }),
    {
      lokal: fields.image({
        label: `Upload ${label}`,
        description:
          description ||
          "Mohon lakukan kompres terlebih dahulu, disarankan format .webp Gunakan (https://towebp.io/) agar size image ringan [atau gunakan alternatif https://imagecompressor.com/]. Kemudian upload disini",
        directory: directory,
        publicPath: publicPath,
        validation: { isRequired },
      }),
      eksternal: fields.text({
        label: `URL ${label} (Eksternal)`,
        description:
          "Masukkan URL lengkap gambar dari CDN (Contoh: https://ik.imagekit.io/nama/gambar.png)",
        validation: { length: { min: isRequired ? 5 : 0 } },
      }),
    },
  );
};

// ============================================================================
// 1. MODULARISASI KOMPONEN EMBED (DRY Principle)
// ============================================================================
const komponenMultimedia = {
  embedYoutube: component({
    label: "Embed YouTube Video",
    schema: {
      youtubeUrl: fields.text({
        label: "URL YouTube Penuh",
        description: "Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        validation: { length: { min: 10 } },
      }),
    },
    preview: (props) => `[ YouTube: ${props.fields.youtubeUrl.value} ]`,
  }),
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
        defaultValue: "Embed Web",
      }),
    },
    preview: (props) => `[ Embed Web: ${props.fields.url.value} ]`,
  }),
  embedImage: component({
    label: "Gambar Eksternal",
    schema: {
      url: fields.text({
        label: "URL Gambar",
        validation: { length: { min: 5 } },
      }),
      alt: fields.text({
        label: "Teks Alternatif (Alt)",
      }),
      caption: fields.text({
        label: "Keterangan (Caption)",
      }),
    },
    preview: (props) =>
      `[ Gambar Eksternal: ${props.fields.alt.value || "Tanpa alt"} ]`,
  }),
  embedMath: component({
    label: "Rumus Matematika (LaTeX)",
    schema: {
      formula: fields.text({
        label: "Sintaks LaTeX",
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
  storage: import.meta.env.DEV ? { kind: "local" } : { kind: "cloud" },
  cloud: {
    project: "repo-itbw/homepage-dashboard",
  },
  collections: {
    // ------------------------------------------------------------------------
    // KOLEKSI A: BERITA & ARTIKEL (Menggunakan CDN)
    // ------------------------------------------------------------------------
    berita: collection({
      label: "Berita & Artikel",
      slugField: "slug",
      path: "content/berita/*",
      format: { contentField: "konten" },
      schema: {
        slug: fields.text({
          label: "Format Nama File (Slug)",
          description:
            "Patuhi format penamaan: tanggal-kategori-konteks (Contoh: 2026-01-15-pengumuman-kelulusan) supaya url web bagus",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({
          label: "Judul Berita",
          validation: { length: { max: 150 } },
        }),
        deskripsi: fields.text({
          label: "Deskripsi Singkat",
          validation: { length: { max: 150 } },
        }),

        image: fleksibelImageField({
          label: "Gambar Utama",
          directory: "public/BeritaAssets/",
          publicPath: "/BeritaAssets/",
          isRequired: false,
        }),

        tanggal: fields.date({
          label: "Tanggal Publikasi",
          defaultValue: { kind: "today" },
        }),
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
          tables: true,
          dividers: true,
          links: true,
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
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
          componentBlocks: komponenMultimedia,
        }),
      },
    }),

    // ------------------------------------------------------------------------
    // KOLEKSI B: E-LEARNING (Menggunakan CDN)
    // ------------------------------------------------------------------------
    elearning: collection({
      label: "E-Learning (Materi)",
      slugField: "slug",
      path: "content/elearning/*",
      format: { contentField: "konten" },
      schema: {
        slug: fields.text({
          label: "Slug",
          description:
            "Patuhi format penamaan: tanggal-kategori-konteks (Contoh: 2026-01-15-matematika-geometri) supaya url web bagus",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({
          label: "Judul Materi",
          validation: { length: { max: 150 } },
        }),
        deskripsi: fields.text({
          label: "Kompetensi / Rangkuman Singkat",
          validation: { length: { max: 200 } },
        }),

        image: fleksibelImageField({
          label: "Gambar Sampul Materi",
          directory: "public/ElearningAssets/",
          publicPath: "/ElearningAssets/",
          isRequired: true,
        }),

        tanggal: fields.date({
          label: "Tanggal Rilis Materi",
          defaultValue: { kind: "today" },
        }),
        kategori: fields.select({
          label: "Mata Pelajaran",
          options: [
            { label: "Matematika", value: "Matematika" },
            { label: "IPA", value: "IPA" },
            { label: "PKWU", value: "PKWU" },
            { label: "PPKN", value: "PPKN" },
            { label: "PAI", value: "PAI" },
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
          defaultValue: "Guru Mata Pelajaran",
        }),
        konten: fields.document({
          label: "Isi Materi Pembelajaran",
          tables: true,
          dividers: true,
          links: true,
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              code: true,
            },
            listTypes: true,
            headingLevels: true,
            blockTypes: true,
          },
          images: {
            directory: "public/ElearningAssets/",
            publicPath: "/ElearningAssets/",
          },
          componentBlocks: komponenMultimedia,
        }),
        kuis: fields.array(
          fields.object({
            pertanyaan: fields.text({
              label: "Pertanyaan Kuis",
              multiline: true,
            }),
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
              defaultValue: "A",
            }),
            pembahasan: fields.text({
              label: "Pembahasan Singkat (Opsional)",
              multiline: true,
            }),
          }),
          {
            label: "Mini Quiz (Evaluasi Materi)",
            itemLabel: (props) =>
              props.fields.pertanyaan.value || "Pertanyaan Baru",
          },
        ),
      },
    }),

    // ------------------------------------------------------------------------
    // KOLEKSI C: MADING DIGITAL (Menggunakan CDN)
    // ------------------------------------------------------------------------
    mading: collection({
      label: "Mading Digital",
      slugField: "slug",
      path: "content/mading/*",
      format: { contentField: "konten" },
      schema: {
        slug: fields.text({
          label: "Format Nama File (Slug)",
          description:
            "Patuhi format penamaan: tanggal-konteks (Contoh: 2026-01-15-karyaseni) supaya url web bagus",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({
          label: "Judul Karya",
          validation: { length: { max: 25 } },
        }),

        image: fleksibelImageField({
          label: "Gambar Karya Utama",
          directory: "public/MadingAssets/",
          publicPath: "/MadingAssets/",
          isRequired: true,
        }),

        tanggal: fields.date({
          label: "Tanggal Publikasi",
          defaultValue: { kind: "today" },
        }),
        author: fields.text({
          label: "Nama Kreator / Pembuat",
          defaultValue: "Jurnalis",
        }),
        konten: fields.document({
          label: " Bagian ini (Gausah di isi)",
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
          description:
            "Patuhi format penamaan: tanggal-kegiatan (Contoh: 2026-01-15-camping) supaya url web bagus",
          validation: { length: { min: 3 } },
        }),
        judul: fields.text({
          label: "Judul Momen/Foto",
          validation: { length: { max: 150 } },
        }),

        image: fleksibelImageField({
          label: "Berkas Gambar",
          directory: "public/GaleriAssets",
          publicPath: "/GaleriAssets",
          isRequired: true,
        }),

        tanggal: fields.date({
          label: "Tanggal Pengambilan",
          defaultValue: { kind: "today" },
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
          tables: true,
          dividers: true,
          links: true,
          formatting: {
            inlineMarks: { bold: true, italic: true, strikethrough: true },
            listTypes: true,
            headingLevels: true,
            blockTypes: true,
          },
        }),
      },
    }),
  },

  // ============================================================================
  // 3. KONFIGURASI SINGLETONS (Seluruhnya Standar Lokal)
  // ============================================================================
  singletons: {
    jumbotron: singleton({
      label: "Jumbotron Slide",
      path: "./content/jumbotron/",
      schema: {
        slides: fields.array(
          fields.object({
            image: fields.image({
              label: "Gambar Slide",
              description:
                "Mohon lakukan kompres terlebih dahulu, disarankan format .webp Gunakan (https://towebp.io/) agar size image ringan [atau gunakan alternatif https://imagecompressor.com/]. Kemudian upload disini",
              directory: "public/JumbotronAssets",
              publicPath: "/JumbotronAssets/",
              validation: { isRequired: true },
            }),
            title: fields.text({
              label: "Judul Utama",
              validation: { length: { min: 3 } },
            }),
            subtitle: fields.text({
              label: "Sub-judul / Deskripsi",
              multiline: true,
              validation: { length: { min: 3 } },
            }),
            actions: fields.array(
              fields.object({
                label: fields.text({ label: "Teks Tombol" }),
                link: fields.text({ label: "Tautan (URL)" }),
                type: fields.select({
                  label: "Tipe Tombol",
                  options: [
                    { label: "Utama (Primary)", value: "primary" },
                    { label: "Garis Luar (Outline)", value: "outline" },
                  ],
                  defaultValue: "primary",
                }),
              }),
              {
                label: "Daftar Tombol Aksi",
                itemLabel: (props) => props.fields.label.value || "Tombol Baru",
              },
            ),
          }),
          {
            label: "Daftar Slide Banner",
            itemLabel: (props) => props.fields.title.value || "Slide Baru",
          },
        ),
      },
    }),
    statistik: singleton({
      label: "Statistik Kesiswaan",
      path: "./content/statistik/",
      format: { data: "yaml" },
      schema: {
        demografi: fields.object(
          {
            tahun: fields.integer({
              label: "Tahun Ajaran",
              defaultValue: 2026,
            }),
            total: fields.integer({ label: "Total Siswa", defaultValue: 945 }),
            putra: fields.integer({ label: "Jumlah Putra", defaultValue: 480 }),
            putri: fields.integer({ label: "Jumlah Putri", defaultValue: 465 }),
          },
          { label: "Demografi Siswa" },
        ),
        distribusiKelas: fields.array(
          fields.object({
            tingkat: fields.text({ label: "Tingkat Kelas" }),
            jumlah: fields.integer({ label: "Jumlah Siswa" }),
            warna: fields.text({
              label: "Kelas Warna Tailwind",
              defaultValue: "bg-corporate-blue",
            }),
          }),
          {
            label: "Distribusi Kelas",
            itemLabel: (props) => props.fields.tingkat.value || "Data Baru",
          },
        ),
        serapanAlumni: fields.array(
          fields.object({
            status: fields.text({ label: "Status Lulusan" }),
            persentase: fields.integer({ label: "Persentase (%)" }),
            warna: fields.text({
              label: "Kelas Warna Tailwind",
              defaultValue: "bg-success-green",
            }),
          }),
          {
            label: "Serapan Alumni",
            itemLabel: (props) => props.fields.status.value || "Data Baru",
          },
        ),
        prestasi: fields.object(
          {
            nasional: fields.integer({
              label: "Tingkat Nasional",
              defaultValue: 0,
            }),
            provinsi: fields.integer({
              label: "Tingkat Provinsi",
              defaultValue: 0,
            }),
            kabupaten: fields.integer({
              label: "Tingkat Kabupaten",
              defaultValue: 0,
            }),
          },
          { label: "Rekapitulasi Prestasi" },
        ),
        staffGtk: fields.array(
          fields.object({
            peran: fields.text({ label: "Peran / Posisi" }),
            jumlah: fields.integer({ label: "Jumlah Personil" }),
            warna: fields.text({ label: "Kode Warna Hex" }),
          }),
          {
            label: "Staff GTK",
            itemLabel: (props) => props.fields.peran.value || "Data Baru",
          },
        ),
        pertumbuhanSiswa: fields.array(
          fields.object({
            tahun: fields.text({ label: "Tahun" }),
            jumlah: fields.integer({ label: "Jumlah Siswa" }),
          }),
          {
            label: "Grafik Pertumbuhan Siswa",
            itemLabel: (props) => props.fields.tahun.value || "Data Baru",
          },
        ),
      },
    }),
    mitraIndustri: singleton({
      label: "Mitra Industri (DUDI)",
      path: "./content/mitra/",
      format: { data: "yaml" },
      schema: {
        hero: fields.object(
          {
            judul: fields.text({
              label: "Judul Utama",
              defaultValue: "Ekosistem Kemitraan Industri",
            }),
            deskripsi: fields.text({
              label: "Deskripsi Hero",
              multiline: true,
            }),
          },
          { label: "1. Area Hero" },
        ),
        statistikBanner: fields.array(
          fields.object({
            angka: fields.text({ label: "Angka (Contoh: 50+)" }),
            label: fields.text({ label: "Label Teks" }),
          }),
          {
            label: "2. Kapsul Statistik",
            itemLabel: (props) => props.fields.label.value || "Item Baru",
          },
        ),
        daftarMitra: fields.array(
          fields.object({
            namaPerusahaan: fields.text({ label: "Nama Perusahaan" }),
            logo: fields.image({
              label: "Logo Perusahaan (Gunakan PNG Transparan)",
              description:
                "Mohon lakukan kompres terlebih dahulu, disarankan format .webp Gunakan (https://towebp.io/) agar size image ringan [atau gunakan alternatif https://imagecompressor.com/]. Kemudian upload disini",
              directory: "public/MitraAssets",
              publicPath: "/MitraAssets/",
            }),
            kategori: fields.text({
              label: "Kategori (Contoh: Teknologi, Perhotelan)",
            }),
            prioritas: fields.checkbox({
              label: "Tampilkan di Marquee (Pita Berjalan)?",
            }),
          }),
          {
            label: "3. Direktori Perusahaan",
            itemLabel: (props) =>
              props.fields.namaPerusahaan.value || "Mitra Baru",
          },
        ),
        testimoni: fields.array(
          fields.object({
            kutipan: fields.text({
              label: "Kutipan Testimoni",
              multiline: true,
            }),
            namaTokoh: fields.text({ label: "Nama Lengkap Tokoh" }),
            jabatan: fields.text({ label: "Jabatan & Asal Perusahaan" }),
            fotoTokoh: fields.image({
              label: "Foto Tokoh (Portrait/Square)",
              description:
                "Mohon lakukan kompres terlebih dahulu, disarankan format .webp Gunakan (https://towebp.io/) agar size image ringan [atau gunakan alternatif https://imagecompressor.com/]. Kemudian upload disini",
              directory: "public/MitraAssets",
              publicPath: "/MitraAssets/",
            }),
          }),
          {
            label: "4. Testimoni Industri",
            itemLabel: (props) =>
              props.fields.namaTokoh.value || "Testimoni Baru",
          },
        ),
      },
    }),
  },
});
