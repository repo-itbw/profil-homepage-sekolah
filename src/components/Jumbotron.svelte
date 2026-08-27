<script>
  import { onMount, onDestroy } from 'svelte';

  export let slides = [
    {
      image: '/assets/banner.jpg',
      title: 'Bangun sekolah impianmu dengan semangat yang keren.',
      subtitle: 'SMK bina wisata adalah vokasi untuk generasi muda yang ingin tumbuh, inovatif, dan siap bersaing.',
      actions: [
        { label: 'Info PPDB', type: 'primary', link: '#' },
        { label: 'Galeri prestasi', type: 'outline', link: '#' }
      ]
    },
    // Tambahkan slide kedua untuk menguji indikator dan swipe
    {
      image: '/assets/edu.jpg',
      title: 'Fasilitas modern untuk pendidikan vokasi terdepan.',
      subtitle: 'Praktik langsung di laboratorium berstandar industri dengan pengajar profesional.',
      actions: [
        { label: 'Jelajahi Fasilitas', type: 'primary', link: 'https://example.com' }
      ]
    },
    {
      image: '/assets/industry.jpg',
      title: 'SMK terbaik di Daerah Lembang.',
      subtitle: 'Berada di jl. situ ppi no 12 kelurahan lembang, jawabarat.',
    }
  ];

  // Interval diubah menjadi 10 detik (10.000 ms)
  export let intervalMs = 10000;
  
  let currentIndex = 0;
  let timer;

  // Variabel untuk melacak titik koordinat sentuhan layar (swipe gesture)
  let touchStartX = 0;
  let touchEndX = 0;
  const minSwipeDistance = 50; // Jarak minimum (pixel) untuk memicu pergantian slide

  // Fungsi navigasi slide
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  };

  const goToSlide = (index) => {
    currentIndex = index;
    resetTimer();
  };

  // Manajemen siklus otomatis (Auto-play lifecycle)
  const startTimer = () => {
    timer = setInterval(nextSlide, intervalMs);
  };

  const resetTimer = () => {
    clearInterval(timer);
    startTimer();
  };

  // Penanganan gestur sentuh (Touch event handlers)
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > minSwipeDistance) {
      // Geser ke kiri -> Slide selanjutnya
      nextSlide();
      resetTimer();
    } else if (swipeDistance < -minSwipeDistance) {
      // Geser ke kanan -> Slide sebelumnya
      prevSlide();
      resetTimer();
    }
  };

  onMount(() => {
    startTimer();
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });
</script>

<!-- 
  Kontainer Utama:
  Ditambahkan event on:touchstart dan on:touchend untuk menangkap gestur usapan layar.
-->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section 
  class="relative w-full lg:w-[65%] h-[60vh] lg:h-[65vh] min-h-[380px] overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] bg-slate-900 shadow-sm shrink-0"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
>
  
  {#each slides as slide, index}
    <div 
      class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out {currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}" 
      style="background-image: url('{slide.image}')"
      aria-hidden={currentIndex !== index}
    >
      
      <!-- Penyesuaian gradien agar teks tetap kontras di layar sempit -->
      <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a365d]/95 via-[#1a365d]/80 md:via-[#1a365d]/70 to-transparent md:to-transparent flex flex-col md:flex-row justify-end md:justify-start pb-12 md:pb-0 items-start md:items-center">
        
        <!-- Area teks juga dibuat responsif terhadap padding -->
        <div class="px-6 md:px-8 lg:px-10 w-full md:max-w-[85%] lg:max-w-[75%] text-white">
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
            {slide.title}
          </h1>
          <p class="text-sm md:text-base mb-6 leading-relaxed opacity-90 font-comfortaa">
            {slide.subtitle}
          </p>
          
          <div class="flex flex-wrap gap-3">
            {#each slide.actions as btn}
              <a 
                href={btn.link} 
                class="px-4 py-2 text-sm rounded-md font-semibold transition-transform duration-300 hover:-translate-y-1 
                  {btn.type === 'primary' 
                    ? 'bg-white text-[#1a365d] border-2 border-white' 
                    : 'bg-transparent text-white border-2 border-white hover:bg-white/10'}"
              >
                {btn.label}
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/each}

  <!-- pagination dots -->
  <div class="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {#each slides as _, index}
      <button 
        type="button"
        aria-label="Menuju slide {index + 1}"
        class="w-2.5 h-2.5 rounded-full transition-colors duration-300 {currentIndex === index ? 'bg-gray-300' : 'bg-gray-500/50 hover:bg-gray-400'}"
        on:click={() => goToSlide(index)}
      ></button>
    {/each}
  </div>
</section>