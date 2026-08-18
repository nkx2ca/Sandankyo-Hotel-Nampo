// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nkx2ca.github.io',
  base: '/Sandankyo-Hotel-Nampo',
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
});
