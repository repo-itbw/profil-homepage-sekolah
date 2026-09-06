<img width="1278" alt="Image" src="https://github.com/user-attachments/assets/033c8ee7-e1db-402a-bf82-e71eac0d3b65" />

## SC Homepage SMK BINA WISATA

Ini adalah repository resmi untuk halaman website publik tentang profil institusi SMK BINA WISATA Lembang.

## Apa keuntungan Teknologi ini?

Alih-alih pakai teknologi lama seperti wordpress yang rentan (kadang kurang optimal beserta budget ekstra untuk deployment), Kali ini Framework Astro dipilih karena (Full Control of Architecture) yang artinya, segala sesuatu dibuat secara manual dari nol, tapi pengembang punya kontrol penuh sampai ke tingkat sistem bekerja.
Lalu di dukung platform hosting global yang gratis juga punya latensi yang baik.

Secara desain, Dirancang sebagai MPA (Multi-Page Application) yang memisahkan halaman-halaman menjadi komponen-komponen terpisah, sehingga mudah dikelola dan dioptimalkan. Tanpa khawatir mengganggu fungsionalitas utama aplikasi web. Serta astro sudah punya mekanisme bawaan untuk routing *(misal: domain.com/profil/sejarah)* dan rendering halaman cepat.

keuntungan yang diperoleh :

- Mudah pemeliharaan, asalkan paham konsep teknologinya
- Minim Gangguan & relatif aman cyber attack, karena bersifat statis
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
├── .keystatic/                # Konfigurasi internal & cache Keystatic di mode local development
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
├── tsconfig.json
├── bun.lock
└── .gitignore
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

### FAQ

<!--faq 1-->
<details>
<summary><strong>Apa itu Keystatic?</strong></summary>

Keystatic adalah CMS berbasis Git (*Git-based Content Management System*) open-source yang memungkinkan Anda mengelola konten (seperti file Markdown, MDX, JSON, atau YAML) melalui antarmuka visual yang intuitif.

Tidak seperti CMS tradisional yang menggunakan database terpisah, Keystatic menyimpan semua data konten secara langsung di dalam repositori Git proyek Anda. Setiap kali Anda menyimpan atau mengubah konten dari dasbor Keystatic, perubahan tersebut akan diproses sebagai <em>commit</em> Git secara otomatis. Ini memungkinkan manajemen data konten yang efisien dan terpusat di dalam repositori Git Anda (Monorepo).
</details>

<!--faq 2-->
<details>
<summary><strong>Bagaimana cara mengakses dashboard Keystatic?</strong></summary>

<p>Dashboard Keystatic dapat diakses langsung melalui browser dengan menambahkan <code>/keystatic</code> di akhir URL website Anda.</p>

<ul>
  <li><strong>Lokal (Development):</strong> <code>http://localhost:4321/keystatic</code></li>
  <li><strong>Production:</strong> <code>https://domain-anda.com/keystatic</code></li>
</ul>

<p>Jika URL berubah, pastikan Anda memperbarui <code>site</code> pada file <code>astro.config.mjs</code>:</p>

<pre><code class="language-diff">- site: "https://domain-lama.com"
+ site: "https://domain-baru.com"
</code></pre>
</details>

<!--faq 3 -->
<details>
<summary><strong>Apakah CMS Keystatic memerlukan server backend terpisah? Apakah ada batasannya?</strong></summary>

Tidak. Keystatic tidak membutuhkan server database eksternal. Di balik layar, paket `@keystatic/astro` menyimpan dan mengelola data konten langsung di repositori Git Anda. Jika Anda menggunakan Keystatic Cloud untuk otentikasi tim, tidak ada infrastruktur backend yang perlu Anda kelola.

<strong>Batasan:</strong> Untuk penggunaan gratis (Tier Free), Keystatic Cloud membatasi akses maksimal hingga <strong>3 kolaborator</strong> per repositori.
</details>

<!--faq 4-->
<details>
<summary><strong>Apa hubungan antara integrasi format Markdoc .mdoc dengan Keystatic di proyek ini?</strong></summary>

Markdoc adalah format penyusunan dokumen yang digunakan oleh Keystatic untuk mengelola konten teks kaya (*rich text*) dan komponen kustom secara aman dan terstruktur.

Melalui integrasi ini, Anda dapat membuat dan mengedit komponen khusus (seperti <em>callout</em>, galeri, atau tombol) langsung dari editor visual Keystatic tanpa merusak sintaks kode. Di balik layar, Keystatic menyimpan konten tersebut dalam format Markdoc, yang kemudian di-render dengan efisien dan aman oleh Astro menjadi halaman web statis.
</details>

<!--faq 5-->
<details>
<summary><strong>Di mana file konten saya disimpan setelah dibuat melalui Keystatic?</strong></summary>

<p>Semua konten disimpan sebagai file lokal (Markdown, MDX, JSON, atau YAML) langsung di dalam folder proyek Anda, sesuai dengan rute <code>path</code> yang Anda tentukan pada file <code>keystatic.config.ts</code> (biasanya di <code>src/content/</code>).</p>
</details>

<!--faq 6-->
<details>
<summary><strong>Apakah Keystatic otomatis terintegrasi dengan Astro Content Collections?</strong></summary>

<p>Ya. Anda cukup menyelaraskan skema yang didefinisikan pada <code>keystatic.config.ts</code> dengan skema koleksi di <code>src/content/config.ts</code> agar tipe data dan pembacaan konten oleh Astro tetap konsisten.</p>
</details>

<!--faq 7-->
<details>
<summary><strong>Ke mana file media/gambar yang diunggah lewat Keystatic akan disimpan?</strong></summary>

<p>Gambar disimpan ke folder publik proyek Anda (misalnya <code>public/images/posts/</code>) atau relatif terhadap lokasi file MDX. Lokasi ini bisa diatur melalui properti <code>publicPath</code> pada field image di konfigurasi Keystatic.</p>

<pre><code class="language-typescript">image: fields.image({
  label: 'Gambar Utama',
  directory: "public/ElearningAssets/",
  publicPath: "/ElearningAssets/",
})
</code></pre>
</details>

<!--faq 8-->
<details>
<summary><strong>Bagaimana cara memberi akses kolaborator di dashboard Keystatic Cloud?</strong></summary>

<p>Penambahan kolaborator dilakukan langsung melalui dashboard Keystatic Cloud dengan menghubungkan akun GitHub anggota tim Anda.</p>

<ol>
  <li>Buka dan masuk ke akun Anda di <a href="https://keystatic.cloud" target="_blank">keystatic.cloud</a>.</li>
  <li>Pilih proyek atau repositori yang ingin Anda bagikan.</li>
  <li>Buka menu <strong>Settings</strong> &gt; <strong>Collaborators</strong> (atau <strong>Members</strong>).</li>
  <li>Masukkan username GitHub atau alamat email anggota tim yang ingin diundang.</li>
  <li>Kirim undangan. Anggota tim perlu menerima undangan tersebut agar dapat mengakses dashboard <code>/keystatic</code> di mode Cloud/Production.</li>
</ol>

<p><strong>Catatan:</strong></p>
<ul>
  <li>Pastikan kolaborator juga memiliki akses baca/tulis (Read/Write) pada repositori GitHub terkait.</li>
  <li>Pada paket gratis (Free Tier), Keystatic Cloud membatasi maksimal <strong>3 kolaborator</strong> per repositori.</li>
</ul>
</details>
