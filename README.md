## SC Homepage SMK BINA WISATA

Ini adalah repository resmi untuk halaman website publik tentang profil institusi SMK BINA WISATA Lembang.

### Teknologi inti yang digunakan

Website ini dibangun dengan skema statis, dan hanya bagian berita (News) saja yang dinamis.

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
│   │   ├── Navbar.svelte       # Komponen Navigasi utama
│   │   ├── QuickNews.astro     # Komponen Isi portal berita
│   │   └── SmartDock.svelte    # Komponen Navigasi Sekunder untuk (berita, arsip, lms)
│   ├── layouts/               # Kerangka tata letak halaman (BaseLayout, Header, Footer)
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

