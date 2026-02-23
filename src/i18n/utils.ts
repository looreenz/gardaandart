import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split(".");
    let translation: any = ui[lang] || ui[defaultLang];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to default language
        let fallback: any = ui[defaultLang];
        for (const fk of keys) {
          if (fallback && fallback[fk]) {
            fallback = fallback[fk];
          } else {
            return key; // return the key itself if not found even in fallback
          }
        }
        return fallback;
      }
    }
    return translation;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname.split("/");
  const route = parts[parts.length - 1];
  return route || undefined;
}

export function getLocaleUrl(path: string, locale: string) {
  // If the path already has a locale, remove it
  const pathWithoutLocale = path.replace(/^\/(?:it|en|de)\/?/, "/");

  if (locale === "it") {
    return pathWithoutLocale; // IT is default without prefix
  }

  // For other locales, append the path to the locale
  const cleanPath = pathWithoutLocale.startsWith("/")
    ? pathWithoutLocale.slice(1)
    : pathWithoutLocale;
  return `/${locale}${cleanPath ? `/${cleanPath}` : "/"}`;
}
