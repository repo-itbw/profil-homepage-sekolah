import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. KOLEKSI BERITA
const berita = defineCollection({
  loader: glob({ base: './content/berita', pattern: '**/*.mdoc' }),
  schema: z.object({
    judul: z.string().max(150, "Judul maksimal 150 karakter"),
    deskripsi: z.string().max(150, "Deskripsi maksimal 150 karakter"),
    image: z.string().optional(), 
    tanggal: z.date(), // Zod akan otomatis mengurai string "YYYY-MM-DD" menjadi objek Date
    kategori: z.string().default('Berita'),
    penerbit: z.string().optional(),
  })
});

// 2. KOLEKSI E-LEARNING
const elearning = defineCollection({
  loader: glob({ base: './content/elearning', pattern: '**/*.mdoc' }),
  schema: z.object({
    judul: z.string().max(150, "Judul maksimal 150 karakter"),
    // Batas karakter deskripsi disesuaikan dengan skema Keystatic (200 karakter)
    deskripsi: z.string().max(200, "Deskripsi maksimal 200 karakter"),
    image: z.string().optional(),
    tanggal: z.date(),
    kategori: z.string().default('Umum'),
    // Menggunakan opsional untuk mengantisipasi field kosong dari input admin
    pengajar: z.string().optional(), 
  })
});

// 3. REGISTRASI KOLEKSI
// Wajib mengekspor seluruh variabel koleksi agar mesin Astro dapat mendaftarkannya ke tipe global (astro:content)
export const collections = { berita, elearning };