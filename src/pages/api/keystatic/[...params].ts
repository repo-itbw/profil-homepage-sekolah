// PENTING: Matikan prerender agar API Keystatic berjalan secara Serverless (SSR)
export const prerender = false;

import { makeHandler } from '@keystatic/astro/api';
import config from '../../../../keystatic.config';

export const ALL = makeHandler({
  config,
});
