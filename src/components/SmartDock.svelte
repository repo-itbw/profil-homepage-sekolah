<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition'; // Menambahkan fungsi animasi slide
  import {
    Search, ArrowLeft, Share2, Link, Check, ArrowDownWideNarrow, ArrowUpNarrowWide, EyeOff
  } from '@lucide/svelte'; // Menambahkan ikon EyeOff

  // 1. PROPERTI KONTROL UTAMA
  export let mode: 'arsip' | 'detail' = 'arsip';

  // 2. PROPERTI DINAMIS (Injeksi dari luar komponen)
  export let filterCategories: string[] = ['Semua', 'Berita', 'Pengumuman'];
  export let backUrl: string = '/berita/arsip';
  export let backLabel: string = 'Kembali ke Arsip';

  // --- STATE MODE ARSIP ---
  let searchQuery = '';
  let activeCategory = filterCategories[0] || 'Semua';
  let sortOrder: 'terbaru' | 'terlama' = 'terbaru';

  $: if (mode === 'arsip' && typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('smartdock-filter', {
        detail: { search: searchQuery.toLowerCase(), category: activeCategory, sort: sortOrder }
      })
    );
  }

  // --- STATE MODE DETAIL ---
  let scrollProgress = 0;
  let isCopied = false;
  let isHidden = false; // State baru untuk kontrol visibilitas dock

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url: window.location.href });
      } catch (e) { /* Pengguna membatalkan dialog share */ }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    isCopied = true;
    setTimeout(() => (isCopied = false), 2000);
  };

  onMount(() => {
    if (mode === 'detail') {
      const updateProgress = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      };
      window.addEventListener('scroll', updateProgress);
      return () => window.removeEventListener('scroll', updateProgress);
    }
  });
</script>

<!-- Modifikasi Wrapper: Latar belakang dan border akan menghilang transparan saat isHidden bernilai true -->
<div class="relative w-full backdrop-blur-md overflow-hidden transition-all duration-300 z-40 {mode === 'detail' && isHidden ? 'bg-transparent border-transparent shadow-none rounded-none' : 'bg-white/90 border border-gray-200 shadow-sm rounded-xl'}">

  {#if mode === 'arsip'}
    <!-- ================= MODE ARSIP ================= -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 sm:p-4">
      <!-- 1. Bilah Pencarian -->
      <div class="relative w-full flex-1 max-w-none sm:max-w-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={16} class="text-gray-400" />
        </div>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Cari judul atau deskripsi..."
          class="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 text-sm text-blackcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue/50 focus:border-corporate-blue transition-all font-lato"
        />
      </div>

      <!-- 2. Kontrol Filter & Urutan -->
      <div class="flex items-center w-full sm:w-auto gap-2 shrink-0">
        <div class="relative flex-1 sm:flex-none">
          <select
            bind:value={activeCategory}
            class="w-full appearance-none bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold py-2 pl-3 pr-8 rounded-lg border border-transparent focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/30 focus:outline-none transition-all cursor-pointer font-lato truncate"
          >
            {#each filterCategories as cat}
              <option value={cat}>{cat}</option>
            {/each}
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1 hidden sm:block"></div>

        <button
          on:click={() => sortOrder = sortOrder === 'terbaru' ? 'terlama' : 'terbaru'}
          class="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-xs font-bold transition-colors shrink-0 aspect-square sm:aspect-auto"
          title="Ubah Urutan"
        >
          {#if sortOrder === 'terbaru'}
            <ArrowDownWideNarrow size={16} />
            <span class="hidden sm:inline">Terbaru</span>
          {:else}
            <ArrowUpNarrowWide size={16} />
            <span class="hidden sm:inline">Terlama</span>
          {/if}
        </button>
      </div>
    </div>

  {:else}
    <!-- ================= MODE DETAIL ================= -->
    
    <!-- Trek Indikator & Area Klik (Tampil penuh saat hide, menempel di atas saat show) -->
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div
      class="w-full transition-all duration-300 ease-in-out {isHidden ? 'h-2 cursor-pointer bg-gray-300/50 backdrop-blur-sm rounded-full' : 'absolute top-0 left-0 h-1 bg-transparent z-10'}"
      on:click={() => { if (isHidden) isHidden = false; }}
      title={isHidden ? "Tampilkan navigasi" : ""}
    >
      <div
        class="h-full bg-corporate-blue transition-all duration-150 ease-out {isHidden ? 'rounded-full' : ''}"
        style="width: {scrollProgress}%"
      ></div>
    </div>

    <!-- Konten Navigasi Utama -->
    {#if !isHidden}
      <div class="flex items-center justify-between p-3 sm:p-4 mt-1" transition:slide={{ duration: 250 }}>
        <!-- Tombol Kembali Dinamis -->
        <a
          href={backUrl}
          class="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-corporate-blue hover:bg-corporate-blue/10 rounded-lg transition-colors text-sm font-bold"
        >
          <ArrowLeft size={18} />
          <span class="hidden sm:inline font-lato">{backLabel}</span>
        </a>

        <!-- Grup Aksi Kanan -->
        <div class="flex items-center gap-1 sm:gap-2">
          
          <!-- Tombol Hide Navigasi -->
          <button
            on:click={() => isHidden = true}
            class="flex items-center justify-center p-2 text-gray-400 hover:text-corporate-blue hover:bg-corporate-blue/10 rounded-lg transition-colors"
            title="Sembunyikan navigasi"
          >
            <EyeOff size={20} />
          </button>

          <!-- Aksi Berbagi -->
          <button
            on:click={handleShare}
            class="flex items-center gap-2 px-4 py-2 bg-blackcoal hover:bg-gray-800 text-white rounded-lg transition-colors text-sm font-bold"
          >
            {#if isCopied}
              <Check size={16} class="text-success-green" />
              <span class="font-lato">Tersalin!</span>
            {:else}
              <Share2 size={16} class="hidden sm:block" />
              <Link size={16} class="block sm:hidden" />
              <span class="font-lato">Bagikan</span>
            {/if}
          </button>
        </div>
      </div>
    {/if}
  {/if}
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar { height: 4px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 4px; }
</style>