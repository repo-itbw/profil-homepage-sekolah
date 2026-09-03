export const prerender = false;

import { makeHandler } from '@keystatic/astro/api';
import config from '../../../keystatic.config';

// --------------------------------------------------------------------------
// HACK KOMUNITAS: Memaksa Vite/Astro untuk mengekspos variabel rahasia
// dengan memetakannya secara eksplisit ke dalam objek process.env Node.js
// agar dapat dibaca oleh modul internal Keystatic di lingkungan Serverless.
// --------------------------------------------------------------------------
process.env.KEYSTATIC_GITHUB_CLIENT_ID = import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID || process.env.KEYSTATIC_GITHUB_CLIENT_ID;
process.env.KEYSTATIC_GITHUB_CLIENT_SECRET = import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET || process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
process.env.KEYSTATIC_SECRET = import.meta.env.KEYSTATIC_SECRET || process.env.KEYSTATIC_SECRET;
process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG = import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG || process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG;

export const ALL = makeHandler({
  config,
});
