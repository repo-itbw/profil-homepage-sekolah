// PENTING: Matikan prerender agar API Keystatic berjalan secara Serverless (SSR)
export const prerender = false;

import { makeHandler } from '@keystatic/astro/api';
import config from '../../../../keystatic.config.ts';

export const ALL = makeHandler({
  config,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID || import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET || import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
  secret: process.env.KEYSTATIC_SECRET || import.meta.env.KEYSTATIC_SECRET,
});
