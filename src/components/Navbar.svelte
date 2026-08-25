<script>
  import { Menu, X, ChevronDown } from '@lucide/svelte';

  const navItems = [
    { label: 'Profil',
      sublinks: [
        { label: 'Sejarah', href: '/profil/sejarah' },
        { label: 'Struktur Organisasi', href: '/profil/organigram' },
        { label: 'Yayasan', href: '/kegiatan/ypbw' },
        { label: 'Sertifikasi', href: '/profil/sertifikasi' },
      ]
    },
    {
      label: 'Akademik',
      sublinks: [
        { label: 'Kurikulum', href: '/akademik/kurikulum' },
        { label: 'Jadwal Pelajaran', href: '/akademik/jadwal' },
        { label: 'Materi Pembelajaran', href: '/akademik/materi' }
      ]
    },
    {
      label: 'Kesiswaan',
      sublinks: [
        { label: 'Ikatan alumni', href: '/profil/ika' },
        { label: 'Bursa kerja khusus', href: '/profil/salum' },
        { label: 'Tenaga pendidik', href: '/profil/tendik' },
      ]
    },
    { label: 'Pencapaian', href: '/pencapaian' },
    {
      label: 'Kegiatan',
      sublinks: [
        { label: 'Ekstrakurikuler', href: '/kegiatan/ekskul' },
        { label: 'OSIS', href: '/kegiatan/osis' },
        { label: 'Sponsorship', href: '/kegiatan/sponsor' },
      ]
    },
    { label: 'Berita',
      sublinks: [
        { label: 'Arsip Berita', href: '/berita/arsip' },
        { label: 'Pengumuman', href: '/berita/pengumuman' },
        { label: 'Galeri Media', href: '/berita/media_collection' }
      ]
    },
    { label: 'Kontak', href: '/kontak' },
    { label: 'E-learning', href: 'https://elearning.smkbinawisata.sch.id' }
  ];

  let { logoSrc = '/web-app-manifest-512x512.png' } = $props();

  let isMobileMenuOpen = $state(false);
  let activeMobileSubmenu = $state(null);
  let navContainerRef;

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (!isMobileMenuOpen) activeMobileSubmenu = null;
  };

  const handleSubmenuToggle = (label, hasSublinks, event) => {
    if (hasSublinks) {
      event.preventDefault();
      activeMobileSubmenu = activeMobileSubmenu === label ? null : label;
    }
  };

  const closeAllMenus = () => {
    isMobileMenuOpen = false;
    activeMobileSubmenu = null;
  };

  const handleGlobalClick = (event) => {
    if (isMobileMenuOpen && navContainerRef && !navContainerRef.contains(event.target)) {
      closeAllMenus();
    }
  };
</script>

<svelte:window onclick={handleGlobalClick} />

<nav bind:this={navContainerRef} class="sticky top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm transition-all">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">

      <!-- container Logo & title -->
      <div class="flex-shrink-0 flex items-center z-50">
        <a href="/" onclick={closeAllMenus} class="flex items-center gap-2.5 sm:gap-3 group">
          <img 
            src={logoSrc} 
            alt="Logo SMK Bina Wisata" 
            class="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          
          <div class="flex flex-col font-lato font-bold select-none">
            <span class="text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase leading-none mb-0.5">
              SMKs
            </span>
            <span class="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-gray-900 uppercase leading-none">
              Bina Wisata Lembang
            </span>
          </div>
        </a>
      </div>

      <!-- PERUBAHAN 1: hidden md:flex diubah menjadi hidden lg:flex -->
      <div class="hidden lg:flex items-center">
        {#each navItems as item, index}
          <div class="relative group flex items-center">

            {#if index !== 0}
              <div class="h-4 w-px bg-gray-200 mx-2"></div>
            {/if}

            {#if item.sublinks && item.sublinks.length > 0}
              <button type="button" class="px-3 py-2 text-[15px] font-medium text-gray-800 hover:text-[#3ba2d5] transition-colors flex items-center gap-1 cursor-default">
                {item.label}
                <ChevronDown size={14} class="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div class="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-56 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
                <div class="bg-white border-t-2 border-[#3ba2d5] rounded-b-md shadow-xl overflow-hidden flex flex-col py-2">
                  {#each item.sublinks as sublink}
                    <a href={sublink.href} class="px-5 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-[#3ba2d5] transition-colors font-lato">
                      {sublink.label}
                    </a>
                  {/each}
                </div>
              </div>
            {:else}
              <a href={item.href} class="px-3 py-2 text-[15px] font-medium text-gray-800 hover:text-[#3ba2d5] transition-colors">
                {item.label}
              </a>
            {/if}
          </div>
        {/each}
      </div>

      <!-- PERUBAHAN 2: flex md:hidden diubah menjadi flex lg:hidden -->
      <div class="flex lg:hidden items-center z-50">
        <button
          type="button"
          onclick={toggleMobileMenu}
          class="relative flex items-center justify-center w-12 h-12 text-gray-600 hover:text-[#3ba2d5] hover:bg-gray-50 rounded-md transition-colors"
          aria-label="Toggle navigasi seluler"
        >
          {#if isMobileMenuOpen}
            <X size={28} class="pointer-events-none" />
          {:else}
            <Menu size={28} class="pointer-events-none" />
          {/if}
        </button>
      </div>

    </div>
  </div>

  <!-- PERUBAHAN 3: md:hidden diubah menjadi lg:hidden -->
  {#if isMobileMenuOpen}
    <div class="absolute top-20 left-0 w-full bg-white shadow-lg border-b border-gray-100 lg:hidden z-40">
      <div class="px-4 py-6 relative">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
          {#each navItems as item}
            <div class="flex justify-center">
              {#if item.sublinks && item.sublinks.length > 0}
                <button
                  type="button"
                  onclick={(e) => handleSubmenuToggle(item.label, true, e)}
                  class="text-sm font-medium py-2 px-4 border-b-2 transition-colors flex items-center gap-1 w-full justify-center
                        {activeMobileSubmenu === item.label ? 'border-[#3ba2d5] text-[#3ba2d5]' : 'border-gray-200 text-gray-700'}"
                >
                  {item.label}
                </button>
              {:else}
                <a
                  href={item.href}
                  onclick={closeAllMenus}
                  class="text-sm font-medium py-2 px-4 border-b-2 border-transparent text-gray-700 hover:border-gray-200 w-full text-center block"
                >
                  {item.label}
                </a>
              {/if}
            </div>
          {/each}
        </div>

        {#if activeMobileSubmenu}
          {@const activeItem = navItems.find(i => i.label === activeMobileSubmenu)}

          <div class="absolute top-full left-4 right-4 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 p-4 z-50">
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
            <div class="grid grid-cols-2 gap-3 relative z-10">
              {#each activeItem.sublinks as sublink}
                <a
                  href={sublink.href}
                  onclick={closeAllMenus}
                  class="text-sm text-center text-gray-600 hover:text-[#3ba2d5] py-2 px-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  {sublink.label}
                </a>
              {/each}
            </div>
          </div>
        {/if}

      </div>
    </div>
  {/if}
</nav>
