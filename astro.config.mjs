// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nkx2ca.github.io',
  // For GitHub Pages
  base: '/Sandankyo-Hotel-Nampo',
  // For local development
  //base: "/",
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
});
