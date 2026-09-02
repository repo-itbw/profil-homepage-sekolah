// PENTING: Matikan prerender agar API Keystatic berjalan secara Serverless (SSR)
export const prerender = false;

import { makeHandler } from '@keystatic/astro/api';
import config from '../../../../keystatic.config.ts';

export const ALL = makeHandler({
  config,
});
