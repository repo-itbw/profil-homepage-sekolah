<script lang="ts">
  import { onMount } from 'svelte';
  import { 
    Search, ArrowLeft, Share2, Link, Check, ArrowDownWideNarrow, ArrowUpNarrowWide 
  } from '@lucide/svelte';

  // Properti kontrol (default: 'arsip')
  export let mode: 'arsip' | 'detail' = 'arsip';

  // --- STATE MODE ARSIP ---
  let searchQuery = '';
  let activeCategory = 'Semua';
  let sortOrder: 'terbaru' | 'terlama' = 'terbaru';
  const categories = ['Semua', 'Berita', 'Pengumuman'];

  // Reaktivitas: Memancarkan event ke DOM global setiap kali input berubah
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

  const handleShare = async () => {
    // Web Share API: Fitur bawaan peramban untuk memanggil menu berbagi sistem operasi
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
        scrollProgress = (scrollTop / scrollHeight) * 100;
      };
      window.addEventListener('scroll', updateProgress);
      return () => window.removeEventListener('scroll', updateProgress);
    }
  });
</script>

<!-- Kontainer Utama: Efek kaca (Glassmorphism) untuk modernitas -->
<div class="relative w-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm rounded-xl overflow-hidden transition-all duration-300 z-40">
  
  {#if mode === 'arsip'}
    <!-- ================= MODE ARSIP ================= -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 sm:p-4">
      
      <!-- 1. Bilah Pencarian (Kiri) -->
      <div class="relative w-full sm:max-w-xs">
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

      <!-- 2. Kategori Pil & Urutan (Kanan/Bawah) -->
      <div class="flex items-center w-full sm:w-auto justify-between sm:justify-end gap-2 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
        
        <!-- Pil Kategori -->
        <div class="flex bg-gray-100 p-1 rounded-lg shrink-0">
          {#each categories as cat}
            <button 
              on:click={() => activeCategory = cat}
              class="px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-200 {activeCategory === cat ? 'bg-white text-corporate-blue shadow-sm' : 'text-gray-500 hover:text-blackcoal'}"
            >
              {cat}
            </button>
          {/each}
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1 hidden sm:block"></div>

        <!-- Tombol Urutan (Toggle) -->
        <button 
          on:click={() => sortOrder = sortOrder === 'terbaru' ? 'terlama' : 'terbaru'}
          class="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-xs font-bold transition-colors shrink-0"
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
    <!-- Bar Progres Membaca (Garis Tipis di Atas) -->
    <div 
      class="absolute top-0 left-0 h-1 bg-corporate-blue transition-all duration-150 ease-out z-10" 
      style="width: {scrollProgress}%"
    ></div>

    <div class="flex items-center justify-between p-3 sm:p-4 mt-1">
      <!-- Tombol Kembali -->
      <a 
        href="/berita/arsip" 
        class="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-corporate-blue hover:bg-corporate-blue/10 rounded-lg transition-colors text-sm font-bold"
      >
        <ArrowLeft size={18} />
        <span class="hidden sm:inline font-lato">Kembali ke Arsip</span>
      </a>

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
  {/if}
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar { height: 4px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 4px; }
</style>
