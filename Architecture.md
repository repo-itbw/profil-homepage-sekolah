# Dokumentasi arsitektur & relasi antar komponen

## Prosedur backup konten

Bila konten collection milik berita (yang biasanya akan lawas/ tidak dibaca lagi) maka pindahkan
## Struktur folder project tree

```text
sekolah-homepage-web/
│
├── content/                   # DIREKTORI KONTEN CMS (Terpisah dari /src)
│   ├── berita/                # Kumpulan file .mdoc untuk Artikel Berita
│   ├── elearning/             # Kumpulan file .mdoc untuk elearning
│   ├── mading/                # Kumpulan file .mdoc untuk mading
│   ├── galeri/
│   ├── jumbotron/
│   │   └── index.yaml
│   ├── mitra/
│   │   └── index.yaml
│   └── statistik/
│       └── index.yaml
├── public/                    # Aset statis publik (favicon, logo, font, dll)
│   ├── assets/                # file aset statis inti untuk banner & internal web
│   ├── BeritaAssets/          # file aset (foto, video, dll) dari uploader untuk berita
│   ├── ElearningAssets/       # file aset (foto, video, dll) dari uploader untuk Elearning
│   ├── MadingAssets/          # file aset (foto, video, dll) dari uploader untuk Mading
│   ├── GaleriAssets/
│   ├── JumbotronAssets/
│   │   └── slides/
│   └── fonts/                 # Kumpulan file font lokal
├── src/
│   ├── icons/                 # Pustaka astro-icon otomatis mencari direktori default penyimpan aset ikon lokal
│   ├── components/            # Parent Komponen UI modular
│   │   ├── EmbedExternal/     # Komponen untuk embed konten eksternal markdoc
│   │   │   ├── EmbedImage.astro
│   │   │   ├── EmbedWeb.astro
│   │   │   └── EmbedYoutube.astro
│   │   ├── LandingPage/                # Komponen UI milik Landing Page
│   │   │   ├── Jumbotron.svelte        # Komponen Isi banner dinamis
│   │   │   ├── QuickNews.astro         # Komponen Isi portal berita
│   │   │   ├── MadingPreview.astro     # Komponen yang merender preview mading inline
│   │   │   ├── GaleriPreview.astro
│   │   │   ├── Sambutan.astro
│   │   │   └── StatistikRibbon.astro
│   │   ├── ElearningCard/
│   │   │   ├── ikhtisar.astro  # Sidecard untuk menampilkan ikhtisar elearning & aktivasi smartdock
│   │   │   └── miniquiz.astro  # Sidecard untuk menampilkan miniquiz elearning & aktivasi smartdock
│   │   │
│   │   └── SmartDock.svelte    # Komponen Navigasi Sekunder untuk (berita, arsip, lms)
│   │
│   ├── layouts/                # Kerangka tata letak halaman (Layout, Header, Footer)
│   │   ├── Navbar.svelte       # Navigasi utama (Jembatan MPA)
│   │   ├── Layout.astro        # Layout utama pemanggil (Header, Content, Footer)
│   │   └── Footer.astro        # Footer yang ditampilkan di semua halaman
│   │
│   ├── pages/                  # Routing direktori halaman statis & dinamis
│   │   ├── index.astro         # Homepage (Beranda)
│   │   ├── profil/
│   │   │   ├── sejarah.astro   # Sub-page profil sejarah sekolah
│   │   │   └── yayasan.astro   # Sub-page profil pimpinan & guru
│   │   ├── akademik/
│   │   │   └── ekstrakurikuler.astro
│   │   ├── galeri/
│   │   │   └── index.astro
│   │   ├── kesiswaan/
│   │   │   └── statistik.astro
│   │   ├── berita/
│   │   │   ├── arsip.astro       # Sub-page Daftar arsip berita
│   │   │   ├── [...slug].astro   # Sub-page Detail halaman berita dinamis
│   │   │   └── mading.astro      # Sub-page mading
│   │   └── elearning/
│   │       ├── [kategori]/
│   │       │   └── [...slug].astro
│   │       └── index.astro
│   │
│   ├── styles/                # Konfigurasi gaya global & Tailwind CSS v4
│   │   └── global.css
│   └── content.config.ts      # Definisi skema Content Collections Astro
│
├── scripts
│   └── ignore-build.sh
│
├── keystatic.config.ts        # File konfigurasi utama CMS Keystatic
├── astro.config.mjs           # Konfigurasi utama Astro & Integrasi
├── markdoc.config.mjs         # Konfigurasi utama mesin markdoc untuk rendering markdown
├── package.json
├── tsconfig.json
├── bun.lock
└── .gitignore
```