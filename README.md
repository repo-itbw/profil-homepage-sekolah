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

```text
sekolah-profile-web/
├── .keystatic/                # Konfigurasi internal & cache Keystatic
├── content/                   # 🗂️ DIREKTORI KONTEN CMS (Terpisah dari /src)
│   ├── berita/                # Kumpulan file .mdoc untuk Berita & Artikel
│   ├── pengumuman/            # Kumpulan file .mdoc untuk Pengumuman Resmi
│   └── assets/                # Kumpulan file multimedia (foto, video, dll) dari uploader
├── public/                    # Aset statis publik (favicon, logo, font, dll)
├── src/
│   ├── components/            # Komponen UI modular
│   │   ├── astro/             # Komponen statis (.astro)
│   │   └── svelte/            # Komponen interaktif Svelte (.svelte)
│   ├── layouts/               # Kerangka tata letak halaman (BaseLayout, Header, Footer)
│   ├── pages/                 # Routing direktori halaman statis & dinamis
│   │   ├── index.astro        # Homepage (Beranda)
│   │   ├── profil/
│   │   │   ├── sejarah.astro  # Sub-page profil sejarah sekolah
│   │   │   └── pimpinan.astro # Sub-page profil pimpinan & guru
│   │   ├── akademik/
│   │   │   └── ekstrakurikuler.astro
│   │   ├── informasi/
│   │   │   ├── berita/
│   │   │   │   ├── index.astro       # Daftar arsip berita
│   │   │   │   └── [...slug].astro   # Detail halaman berita dinamis
│   │   │   └── pengumuman.astro
│   │   └── keystatic/
│   │       └── [...params].astro     # Endpoint dashboard admin Keystatic
│   ├── styles/                # Konfigurasi gaya global & Tailwind CSS v4
│   │   └── global.css
│   └── content.config.ts      # Definisi skema Content Collections Astro
├── keystatic.config.ts        # File konfigurasi utama CMS Keystatic
├── astro.config.mjs           # Konfigurasi utama Astro & Integrasi
├── package.json
└── tsconfig.json
```

## Protokol Pemeliharaan Rutin

```text
bun install
bun update --latest
```

jalankan perintah berikut untuk memperbarui versi Astro:
```text
bunx @astrojs/upgrade
```
