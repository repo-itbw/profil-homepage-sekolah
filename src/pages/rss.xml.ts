import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// GET(): Fungsi spesifik pada Astro untuk memaparkan data langsung ke peramban tanpa dirender menjadi HTML
export async function GET(context: any) {

  // 1. Abstraksi Data Paralel
  const semuaBerita = await getCollection('berita');
  const semuaElearning = await getCollection('elearning');

  // Fungsi utilitas identik untuk mencocokkan format URL E-learning
  const buatSlugKategori = (kategori: string) => kategori.toLowerCase().replace(/\s+/g, '-');

  // 2. Normalisasi Matriks Data Berita
  const itemBerita = semuaBerita.map((post) => ({
    title: `[Berita] ${post.data.judul}`,
    pubDate: post.data.tanggal,
    description: post.data.deskripsi,
    // Normalisasi jalur tautan berdasarkan struktur direktori: src/pages/informasi/berita/
    link: `/informasi/berita/${post.id}/`, 
  }));

  // 3. Normalisasi Matriks Data E-Learning
  const itemElearning = semuaElearning.map((post) => ({
    title: `[Materi] ${post.data.judul}`,
    pubDate: post.data.tanggal,
    description: post.data.deskripsi,
    link: `/elearning/${buatSlugKategori(post.data.kategori)}/${post.id}/`,
  }));

  // 4. Penggabungan Array (Concat) dan penyortiran data turun (Descending) berdasarkan waktu rilis
  const gabunganItem = [...itemBerita, ...itemElearning].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()
  );

  // 5. Restrukturisasi JSON menjadi format XML absolut
  return rss({
    title: 'Portal Informasi & E-Learning SMKs Bina Wisata Lembang',
    description: 'Pembaruan terbaru seputar berita sekolah, pengumuman, dan materi pembelajaran digital.',
    site: context.site,
    items: gabunganItem,
    customData: `<language>id-id</language>`,
  });
}
