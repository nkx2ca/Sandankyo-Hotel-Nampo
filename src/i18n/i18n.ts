import { UI } from './ui';

export const LANGUAGES = {
  ja: '日本語',
  en: 'English',
} as const;

export const DEFAULT_LANGUAGE = 'ja';


// This equals to a union type defined by "type Lang = 'ja' | 'en'";
type Lang = keyof typeof LANGUAGES;

// type LocaleRouteEntry = {
//   path: string;
//   locale: 'ja' | 'en';
//   label: '日本語' | 'English';
// };
type LocaleRouteEntry = {
  path: string;
  locale: Lang;
  label: (typeof LANGUAGES)[Lang];
};

interface LocaleRouteMap { 
  [key: string]: LocaleRouteEntry;
};


export function getLangFromUrl(url: URL) {
  // Remove base path if it exists (for GitHub Pages support)
  const base = import.meta.env.BASE_URL;
  let pathname = url.pathname;

  if (base !== '/' && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length - 1); // Keep the leading slash
  }

  const [, lang] = pathname.split('/');
  if (lang in UI) return lang as keyof typeof UI;
  return DEFAULT_LANGUAGE;
};

export function useTranslations(lang: keyof typeof UI) {
  return function t(key: keyof typeof UI[typeof DEFAULT_LANGUAGE]) {
    return UI[lang][key] || UI[DEFAULT_LANGUAGE][key];
  }
};

export function generateLocalePaths(url: URL): LocaleRouteMap {
  const base = import.meta.env.BASE_URL;
  let pathname = url.pathname;

  // Remove base path if it exists
  if (base !== '/' && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length - 1);
  }

  const pathnames_ja = pathname.split('/');
  const pathnames_en = pathname.split('/');
  pathnames_ja[1] = "ja";
  pathnames_en[1] = "en";

  // Add base path back
  const jaPath = (base === '/' ? '' : base.slice(0, -1)) + pathnames_ja.join('/').replace(/\/$/, '');
  const enPath = (base === '/' ? '' : base.slice(0, -1)) + pathnames_en.join('/').replace(/\/$/, '');

  return {
    ja: {
      path: jaPath,
      locale: "ja" as Lang,
      label: LANGUAGES.ja,
    },
    en: {
      path: enPath,
      locale: "en" as Lang,
      label: LANGUAGES.en,
    },
  };
};

export function generateLocaleUrls(url: URL): LocaleRouteMap {
  const localeUrls: LocaleRouteMap = generateLocalePaths(url);
  Object.keys(localeUrls).map((key) => {
    localeUrls[key].path = url.origin + localeUrls[key].path;
  });
  return localeUrls;
};
