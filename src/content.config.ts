import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const berita = defineCollection({
  // Membaca dari direktori luar /src sesuai arsitektur kita sebelumnya
  loader: glob({ base: './content/', pattern: '**/*.mdoc' }),
  schema: z.object({
    judul: z.string().max(150, "Deskripsi maksimal 150 karakter untuk judul"),
    deskripsi: z.string().max(150, "Deskripsi maksimal 150 karakter untuk deskripsi"),
    image: z.string().optional(), 
    tanggal: z.date(), // Zod akan otomatis mengurai string "YYYY-MM-DD" menjadi objek Date
    kategori: z.array(z.string()).default([]),
    penerbit: z.string().optional(),
  })
});

export const collections = { berita };
