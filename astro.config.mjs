// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import homeData from './src/data/es/home.json';


const siteUrl = process.env.SITE_URL || homeData.siteUrl || undefined;

// Base path for subpath hosting (e.g. GitHub Pages project sites: '/repo-name/').
// Leave unset when deploying to a root domain (Netlify/Vercel).
const siteBase = process.env.SITE_BASE || undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: siteBase,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()]
});
