import { UI } from "./ui";

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
  const [, lang] = url.pathname.split('/');
  if (lang in UI) return lang as keyof typeof UI;
  return DEFAULT_LANGUAGE;
};

export function useTranslations(lang: keyof typeof UI) {
  return function t(key: keyof typeof UI[typeof DEFAULT_LANGUAGE]) {
    return UI[lang][key] || UI[DEFAULT_LANGUAGE][key];
  }
};

export function generateLocalePaths(url: URL): LocaleRouteMap {
  const pathnames_ja = url.pathname.split('/');
  const pathnames_en = url.pathname.split('/');
  pathnames_ja[1] = "ja";
  pathnames_en[1] = "en";
  return {
    ja: {
      path: pathnames_ja.join('/').replace(/\/$/, ''),
      locale: "ja" as Lang,
      label: LANGUAGES.ja,
    },
    en: {
      path: pathnames_en.join('/').replace(/\/$/, ''),
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