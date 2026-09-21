import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 1. KOLEKSI BERITA
const berita = defineCollection({
  loader: glob({ base: "./content/berita", pattern: "**/*.mdoc" }),
  schema: z.object({
    judul: z.string().max(150, "Judul maksimal 150 karakter"),
    deskripsi: z.string().max(150, "Deskripsi maksimal 150 karakter"),
    image: z
      .object({
        discriminant: z.enum(["lokal", "eksternal"]),
        value: z.string().optional().nullable(),
      })
      .optional()
      .nullable(),
    tanggal: z.date(), // Zod akan otomatis mengurai string "YYYY-MM-DD" menjadi objek Date
    kategori: z.string().default("Berita"),
    penerbit: z.string().optional(),
  }),
});

// 2. KOLEKSI E-LEARNING
const elearning = defineCollection({
  loader: glob({ base: "./content/elearning", pattern: "**/*.mdoc" }),
  schema: z.object({
    judul: z.string().max(150, "Judul maksimal 150 karakter"),
    // Batas karakter deskripsi disesuaikan dengan skema Keystatic (200 karakter)
    deskripsi: z.string().max(200, "Deskripsi maksimal 200 karakter"),
    image: z
      .object({
        discriminant: z.enum(["lokal", "eksternal"]),
        value: z.string().optional().nullable(),
      })
      .optional()
      .nullable(),
    tanggal: z.date(),
    kategori: z.string().default("Umum"),
    // Menggunakan opsional untuk mengantisipasi field kosong dari input admin
    pengajar: z.string().optional(),
    kuis: z
      .array(
        z.object({
          pertanyaan: z.string(),
          opsiA: z.string(),
          opsiB: z.string(),
          opsiC: z.string(),
          opsiD: z.string(),
          jawabanBenar: z.enum(["A", "B", "C", "D"]),
          pembahasan: z.string().optional(),
        }),
      )
      .optional()
      .default([]),
  }),
});

// 3. KOLEKSI MADING
const mading = defineCollection({
  loader: glob({ base: "./content/mading", pattern: "**/*.mdoc" }),
  schema: z.object({
    judul: z.string().max(25, "Judul maksimal 25 karakter"),
    image: z
      .object({
        discriminant: z.enum(["lokal", "eksternal"]),
        value: z.string().optional().nullable(),
      })
      .optional()
      .nullable(),
    tanggal: z.date(),
    author: z.string().default("Siswa"),
  }),
});

// 4. KOLEKSI GALERI
const galeri = defineCollection({
  loader: glob({ base: "./content/galeri", pattern: "**/*.mdoc" }),
  schema: z.object({
    judul: z.string().max(150),

    image: z
      .object({
        discriminant: z.enum(["lokal", "eksternal"]),
        value: z.string().optional().nullable(),
      })
      .optional()
      .nullable(),

    tanggal: z.date(),
    kategori: z.string().default("Kegiatan Siswa"),
  }),
});

// 5. Koleksi Jumbotron singletons
const jumbotron = defineCollection({
  loader: glob({ base: "./content/jumbotron", pattern: "index.yaml" }),
  schema: z.object({
    slides: z.array(
      z.object({
        image: z.string(),
        title: z.string(),
        subtitle: z.string(),
        actions: z.array(
          z.object({
            label: z.string(),
            link: z.string(),
            type: z.enum(["primary", "outline"]),
          }),
        ),
      }),
    ),
  }),
});

// 6. Koleksi statistik singletons
const statistik = defineCollection({
  loader: glob({ base: "./content/statistik", pattern: "index.yaml" }),
  schema: z.object({
    demografi: z.object({
      tahun: z.number(),
      total: z.number(),
      putra: z.number(),
      putri: z.number(),
    }),
    distribusiKelas: z.array(
      z.object({ tingkat: z.string(), jumlah: z.number(), warna: z.string() }),
    ),
    serapanAlumni: z.array(
      z.object({
        status: z.string(),
        persentase: z.number(),
        warna: z.string(),
      }),
    ),
    prestasi: z.object({
      nasional: z.number(),
      provinsi: z.number(),
      kabupaten: z.number(),
    }),
    staffGtk: z.array(
      z.object({ peran: z.string(), jumlah: z.number(), warna: z.string() }),
    ),
    pertumbuhanSiswa: z.array(
      z.object({ tahun: z.string(), jumlah: z.number() }),
    ),
  }),
});

// Definisikan koleksi mitra
const mitra = defineCollection({
  loader: glob({ base: "./content/mitra", pattern: "index.yaml" }),
  schema: z.object({
    hero: z.object({
      judul: z.string(),
      deskripsi: z.string(),
    }),
    statistikBanner: z.array(
      z.object({ angka: z.string(), label: z.string() }),
    ),
    daftarMitra: z.array(
      z.object({
        namaPerusahaan: z.string(),
        logo: z.string().optional().nullable(),
        kategori: z.string(),
        prioritas: z.boolean(),
      }),
    ),
    testimoni: z.array(
      z.object({
        kutipan: z.string(),
        namaTokoh: z.string(),
        jabatan: z.string(),
        fotoTokoh: z.string().optional().nullable(),
      }),
    ),
  }),
});

// 8. REGISTRASI KOLEKSI
// Wajib mengekspor seluruh variabel koleksi agar mesin Astro dapat mendaftarkannya ke tipe global (astro:content)
export const collections = {
  berita,
  elearning,
  mading,
  galeri,
  jumbotron,
  statistik,
  mitra,
};
