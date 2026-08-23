import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';

// Set BASE_PATH env var when deploying to a subdirectory, e.g. BASE_PATH=/colegio-mcm
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  output: 'static',
  base,
  site: process.env.SITE ?? 'https://colegio-mcm.example.mx',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
});
