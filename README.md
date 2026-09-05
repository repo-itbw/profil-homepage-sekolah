## SC Homepage SMK BINA WISATA

Ini adalah repository resmi untuk halaman website publik tentang profil institusi SMK BINA WISATA Lembang.

## Apa keuntungan Teknologi ini?

Alih-alih pakai teknologi lama seperti wordpress yang rentan (kadang kurang optimal), Kali ini Framework Astro dipilih karena (Full Control of Architecture) yang artinya, segala sesuatu dibuat secara manual dari nol, tapi pengembang punya kontrol penuh sampai ke tingkat sistem bekerja.

Secara desain, Dirancang sebagai MPA (Multi-Page Application) yang memisahkan halaman-halaman menjadi komponen-komponen terpisah, sehingga mudah dikelola dan dioptimalkan. Tanpa khawatir mengganggu fungsionalitas utama aplikasi web. Serta astro sudah punya mekanisme bawaan untuk routing *(misal: https://domain.com/profil/sejarah)* dan rendering halaman.

keuntungan yang diperoleh :

- Mudah pemeliharaan, asalkan paham konsep teknologinya
- Minim Gangguan & super aman cyber attack, karena bersifat statis
- Zero cost untuk biaya deployment, cukup urus domain
- CMS yang Ramah Non-Teknis (Keystatic), bikin konten seperti blogging
- Punya mekanisme bawaan yang meminimalisir memory leak akibat komputasi javascript

## Perawatan Pengembangan

Banyak sekolah membuat website mahal ke vendor luar, lalu kebingungan saat butuh update kecil karena biayanya mahal atau vendornya menghilang. 

Oleh karena itu, Pengurus SourceCode ini diharapkan sebagai siswa RPL yang ingin bukan hanya belajar teori coding, tetapi langsung belajar memelihara production system yang dipakai oleh publik bahkan ribuan pengunjung online.

Jadikan Kode Homepage ini sebagai estafet studi kasus supaya pemeliharaan website bisa diwariskan dari kelas XII ke kelas XI layaknya tradisi organisasi atau project-based learning tahunan.

Selalu Dokumentasikan yang jelas dan Standarisasi penulisan kode: Karena kontrol kodenya berbasis Git, siswa benar-benar bisa belajar version control (Git–GitHub), code review, dan kolaborasi tim sejak dini.

Jangan ragu manfaatkan AI, Asalkan mengerti fondasi arsitekturalnya.

> Dokumentasi yang jelas akan mengurangi hambatan (friction) antar-kontributor dan memastikan proyek dapat berkembang tanpa bergantung pada ingatan atau kehadiran pembuat aslinya terdahulu.

### Teknologi inti yang digunakan

Website ini dibangun dengan skema arsitektur statis, dan hanya bagian berita (News), Mading, galeri serta elearning saja yang dinamis (Git based) CMS.

**Techstack inti :**

- 🚀 Astro
- ⚡ Svelte
- 💠 Tailwind CSS
- 📕 @astrojs/keystatic & layanan cloudnya

## Prasyarat Pemahaman

Pengetahuan proyek tidaklah tersimpan di kepala satu orang saja, Guna mencegah project jadi mangkrak karena tidak ada yang paham cara mengurusnya. Dengan gambaran ini, seseorang tetap bisa melanjutkan pekerjaan karena konteks arsitektur tercatat dengan baik.

<table>
  <thead>
    <tr>
      <th colspan="2" align="center">Prasyarat Pengetahuan Dipelajari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" valign="middle">
        <a href="developer.mozilla.org" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=html" width="32" height="32" valign="middle" alt="HTML" />
        </a>
        &nbsp;<b>HTML</b>
      </td>
      <td>
        Mengerti struktur hierarkis dan arti tag umum dalam Html sebagai kerangka web modern.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=css" width="32" height="32" valign="middle" alt="CSS" />
        </a>
        &nbsp;<b>CSS</b>
      </td>
      <td>
        Memahami aturan penulisan dasar styling, flexbox, grid, dll menggunakan Css.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=javascript" width="32" height="32" valign="middle" alt="js" />
        </a>
        &nbsp;<b>JavaScript</b>
      </td>
      <td>
        Tahu penulisan logika dan interaksi di (client-side) mendasar menggunakan JavaScript.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://git-scm.com" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=git" width="32" height="32" valign="middle" alt="Git" />
        </a>
        &nbsp;<b>Git</b>
      </td>
      <td>
        Sistem kontrol versi untuk kolaborasi, manajemen branch, dan pengiriman <i>Pull Request</i>.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=github" width="32" height="32" valign="middle" alt="GitHub" />
        </a>
        &nbsp;<b>GitHub</b>
      </td>
      <td>
        Media penyimpanan cloud untuk sinkronisasi dan backup source code.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=nodejs" width="32" height="32" valign="middle" alt="nodejs" />
        </a>
        &nbsp;<b>Node.js</b>
      </td>
      <td>
        Mengerti apa bedanya Javascript untuk web dan node.js untuk runtime environment diluar browser.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://www.markdownguide.org/" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=markdown" width="32" height="32" valign="middle" alt="md" />
        </a>
        &nbsp;<b>Markdown</b>
      </td>
      <td>
        Bahasa tekstual untuk penulisan teks berformat yang mudah dibaca.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=svelte" width="32" height="32" valign="middle" alt="Svelte" />
        </a>
        &nbsp;<b>Svelte</b>
      </td>
      <td>
        Framework Komponen UI interaktif, <i>reactive</i>, performa optimal, dan penanganan logika di sisi klien (client-side).
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=tailwind" width="32" height="32" valign="middle" alt="Tailwind CSS" />
        </a>
        &nbsp;<b>Tailwind CSS</b>
      </td>
      <td>
        Kerangka kerja styling tingkat lanjut berbasis <i>utility-first</i> untuk antarmuka responsif.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://astro.build" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=astro" width="32" height="32" valign="middle" alt="Astro" />
        </a>
        &nbsp;<b>Astro</b>
      </td>
      <td>
        Framework web modern yang memanfaatkan mekanisme SSG <i>Static Site Generation</i> untuk menghasilkan halaman web statis cepat, optimal, dan mudah dikelola.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://bun.com" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=bun" width="32" height="32" valign="middle" alt="Bun" />
        </a>
        &nbsp;<b>Bun</b>
      </td>
      <td>
        Bukan framework ataupun bahasa, melainkan pengelola paket (package manager) modern yang digunakan untuk mengelola dependensi dan menjalankan perintah pengembangan secara efisien.
      </td>
    </tr>
    <tr>
      <td width="220" valign="middle">
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=vercel" width="32" height="32" valign="middle" alt="Vercel" />
        </a>
        &nbsp;<b>Vercel</b>
      </td>
      <td>
        Platform hosting global yang friendly, latensi cepat, dan cocok untuk proyek ini.
      </td>
    </tr>
  </tbody>
</table>

> Tidak perlu mempelajari teknologi tersebut terlalu dalam, yang penting adalah memahami konsep dan cara kerja dari masing-masing kombinasi pengetahuan itu.

> Dokumentasi arsitektur mencatat tidak hanya apa yang dibuat, tetapi juga mengapa keputusan teknis tertentu diambil. Ini mencegah keputusan destruktif atau bug baru saat proyek dirombak di masa depan.

## Struktur folder proyek

```markdown
sekolah-homepage-web/
├── .keystatic/                # Konfigurasi internal & cache Keystatic
├── content/                   # DIREKTORI KONTEN CMS (Terpisah dari /src)
│   ├── berita/                # Kumpulan file .mdoc untuk Artikel Berita
│   ├── elearning/             # Kumpulan file .mdoc untuk elearning
│   └── mading/                # Kumpulan file .mdoc untuk mading
├── public/                    # Aset statis publik (favicon, logo, font, dll)
│   ├── assets/                # file aset statis inti untuk banner & internal web
│   ├── BeritaAssets/          # file aset (foto, video, dll) dari uploader untuk berita
│   ├── ElearningAssets/       # file aset (foto, video, dll) dari uploader untuk Elearning
│   ├── MadingAssets/          # file aset (foto, video, dll) dari uploader untuk Mading
│   └── fonts/                 # Kumpulan file font lokal
├── src/
│   ├── icons/                 # Pustaka astro-icon otomatis mencari direktori default penyimpan aset ikon lokal
│   ├── components/            # Komponen UI modular
│   │   ├── EmbedExternal/     # Komponen untuk embed konten eksternal
│   │   │   ├── EmbedImage.astro
│   │   │   ├── EmbedWeb.astro
│   │   │   └── EmbedYoutube.astro
│   │   ├── Jumbotron.svelte    # Komponen Isi banner dinamis
│   │   ├── QuickNews.astro     # Komponen Isi portal berita
│   │   ├── SmartDock.svelte    # Komponen Navigasi Sekunder untuk (berita, arsip, lms)
│   │   └── Mading.astro        # Komponen Navigasi Sekunder untuk (berita, arsip, lms)
│   ├── layouts/                # Kerangka tata letak halaman (Layout, Header, Footer)
│   │   ├── Navbar.svelte
│   │   ├── Layout.astro
│   │   └── Footer.astro
│   ├── pages/                  # Routing direktori halaman statis & dinamis
│   │   ├── index.astro         # Homepage (Beranda)
│   │   ├── profil/
│   │   │   ├── sejarah.astro   # Sub-page profil sejarah sekolah
│   │   │   └── yayasan.astro   # Sub-page profil pimpinan & guru
│   │   ├── akademik/
│   │   │   └── ekstrakurikuler.astro
│   │   ├── galeri/
│   │   │   └── index.astro
│   │   ├── berita/
│   │   │   ├── arsip.astro       # Daftar arsip berita
│   │   │   └── [...slug].astro   # Detail halaman berita dinamis
│   │   └── elearning/
│   │       ├── [kategori]/
│   │       │   └── [...slug].astro
│   │       └── index.astro
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

### Perintah dasar git untuk kloning SC ke local editor

```bash
git clone <url-repo misal https://github.com/repo-itbw/profil-homepage-sekolah> 
cd profil-homepage-sekolah
```

### Perintah dasar bun (package manager)

instalasi dependencies (wajib di awal)

```bash
bun install
```

jalankan mode development lokal

```bash
bun run dev
```

### Update versi seluruh package (dependencies)

biasanya setelah beberapa bulan sekali, komunitas global akan mengupdate versi package yang digunakan untuk meningkatkan kinerja dan keamanan pengembangan.

```text
bun update --latest
```

### Update versi Astro (Core Framework)

jalankan perintah berikut untuk memperbarui versi Dependensi Astro setiap beberapa bulan sekali:

⚠️ hindari update paksa bila yang ada hanya major changes, Dependensi bisa merusak stabilitas aplikasi bila perombakan tidak menyesuaikan paradigma baru dengan baik.

```text
 bun x @astrojs/upgrade
```

## Cara menggunakan keystatic CMS

Saat membuat konten baru di dalam dasbor Keystatic, biasakan menekan tombol Enter sekali di awal area editor Isi Konten Utama sebelum mulai mengetik paragraf pertama. 

Langkah kecil ini memaksa serializer (pengonversi data) Keystatic untuk membuat node paragraf baru yang terpisah oleh spasi dari pembatas frontmatter
