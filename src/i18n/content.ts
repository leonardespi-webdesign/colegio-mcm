import contentEs from '../content/content.es.yml';
import contentEn from '../content/content.en.yml';

export type Lang = 'es' | 'en';

export const LANGS: Lang[] = ['es', 'en'];

const content = {
  es: contentEs,
  en: contentEn,
} as const;

export function getContent(lang: Lang) {
  return content[lang];
}
