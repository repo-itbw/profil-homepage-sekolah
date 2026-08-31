## SC Homepage SMK BINA WISATA

Ini adalah repository resmi untuk halaman website publik tentang profil institusi SMK BINA WISATA Lembang.

## Apa keuntungan Teknologi ini?

Alih-alih pakai teknologi lama seperti wordpress, Framework Astro dipilih karena (Full Control of Architecture) yang artinya, segala sesuatu dibuat secara manual dari nol, tapi pengembang punya kontrol penuh sampai ke tingkat sistem bekerja.

keuntungan yang diperoleh :

- Mudah pemeliharaan, asalkan paham konsep teknologinya
- Minim Gangguan & super aman cyber attack, karena bersifat statis
- Zero cost untuk biaya deployment, cukup urus domain
- CMS yang Ramah Non-Teknis (Keystatic), bikin konten seperti blogging
- Punya mekanisme bawaan yang meminimalisir memory leak akibat komputasi javascript

## Warisan

Banyak sekolah membuat website mahal ke vendor luar, lalu kebingungan saat butuh update kecil karena biayanya mahal atau vendornya menghilang. 

Oleh karena itu, Pengurus SourceCode ini diharapkan sebagai siswa RPL yang ingin bukan hanya belajar teori coding, tetapi langsung memelihara production system yang dipakai oleh ratusan warga sekolah bahkan ribuan pengunjung online.

Jadikan Kode Homepage ini sebagai estafet pemeliharaan supaya pengembangan website bisa diwariskan dari kelas XII ke kelas XI layaknya tradisi organisasi atau project-based learning tahunan.

Selalu Dokumentasikan yang jelas dan Standarisasi penulisan kode: Karena kontrol kodenya berbasis Git, siswa benar-benar bisa belajar version control (Git–GitHub), code review, dan kolaborasi tim sejak dini.

### Teknologi inti yang digunakan

Website ini dibangun dengan skema arsitektur statis, dan hanya bagian berita (News) serta elearning saja yang dinamis (Git based).

**Techstack inti :**

- 🚀 Astro
- ⚡  Svelte
- 💠 Tailwind CSS
- 📕 @astrojs/keystatic

## Struktur folder proyek

```markdown
sekolah-homepage-web/
├── .keystatic/                # Konfigurasi internal & cache Keystatic
├── content/                   # 🗂️ DIREKTORI KONTEN CMS (Terpisah dari /src)
│   ├── berita/                # Kumpulan file .mdoc untuk Artikel Berita
│   └── elearning/             # Kumpulan file .mdoc untuk elearning
├── public/                    # Aset statis publik (favicon, logo, font, dll)
│   ├── assets/                # file aset statis inti untuk banner & internal web
│   ├── BeritaAssets/          # file aset (foto, video, dll) dari uploader untuk berita
│   ├── ElearningAssets/       # file aset (foto, video, dll) dari uploader untuk Elearning
│   └── fonts/                 # Kumpulan file font lokal
├── src/
│   ├── components/            # Komponen UI modular
│   │   ├── EmbedExternal/     # Komponen untuk embed konten eksternal
│   │   │   ├── EmbedImage.astro
│   │   │   ├── EmbedWeb.astro
│   │   │   └── EmbedVideo.astro
│   │   ├── Jumbotron.svelte    # Komponen Isi banner dinamis
│   │   ├── QuickNews.astro     # Komponen Isi portal berita
│   │   └── SmartDock.svelte    # Komponen Navigasi Sekunder untuk (berita, arsip, lms)
│   ├── layouts/               # Kerangka tata letak halaman (Layout, Header, Footer)
│   │   ├── Navbar.svelte
│   │   ├── Layout.astro
│   │   └── Footer.astro
│   ├── pages/                 # Routing direktori halaman statis & dinamis
│   │   ├── index.astro        # Homepage (Beranda)
│   │   ├── profil/
│   │   │   ├── sejarah.astro  # Sub-page profil sejarah sekolah
│   │   │   └── yayasan.astro # Sub-page profil pimpinan & guru
│   │   ├── akademik/
│   │   │   └── ekstrakurikuler.astro
│   │   ├── informasi/
│   │   │   ├── berita/
│   │   │   │   ├── arsip.astro       # Daftar arsip berita
│   │   │   │   └── [...slug].astro   # Detail halaman berita dinamis
│   │   │   └── pengumuman.astro
│   │   ├── keystatic/
│   │   │   └── [...params].astro     # Endpoint dashboard admin Keystatic
│   │   └── api/
│   │       └── keystatic    	   	# Endpoint dashboard admin Keystatic
│   │       	└── [...params].ts
│   │
│   ├── styles/                # Konfigurasi gaya global & Tailwind CSS v4
│   │   └── global.css
│   └── content.config.ts      # Definisi skema Content Collections Astro
├── keystatic.config.ts        # File konfigurasi utama CMS Keystatic
├── astro.config.mjs           # Konfigurasi utama Astro & Integrasi
├── markdoc.config.mjs         # Konfigurasi utama mesin markdoc untuk rendering markdown
├── package.json
└── tsconfig.json
```

## Protokol Pemeliharaan Rutin

### Update versi seluruh package (dependencies)

```text
bun install
bun update --latest
```

### Update versi Astro (Core Framework)

jalankan perintah berikut untuk memperbarui versi Astro:
```text
bunx @astrojs/upgrade
```

Saat membuat konten baru di dalam dasbor Keystatic, biasakan menekan tombol Enter sekali di awal area editor Isi Konten Utama sebelum mulai mengetik paragraf pertama. Langkah kecil ini memaksa serializer (pengonversi data) Keystatic untuk membuat node paragraf baru yang terpisah oleh spasi dari pembatas frontmatter

