import { makeHandler } from '@keystatic/astro/api';

// SSR (Server-Side Rendering): Proses pembuatan HTML secara langsung di server untuk setiap permintaan sebelum dikirim ke peramban
export const prerender = false; 

// API Handler: Skrip pengatur lalu lintas permintaan data antara antarmuka Keystatic dan penyimpanan berkas lokal
export const ALL = makeHandler();
