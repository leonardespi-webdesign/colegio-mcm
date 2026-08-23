// Prefixes an asset path (from public/) with the configured BASE_URL.
// Internal page links should use astro:i18n's getRelativeLocaleUrl instead,
// since it also accounts for the locale prefix.
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
