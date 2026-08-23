// Non-translatable site config shared by both locales.
// Social links are [ASSUMPTION] placeholders — questionnaire 8.1/8.4 were
// left unanswered. Replace with real profile URLs before publishing.
export const SITE = {
  redesSociales: {
    instagram: '',
    facebook: '',
  },
  dominio: '', // set once the client confirms/registers a domain (questionnaire 8.4/8.5)
  analytics: {
    googleAnalyticsId: '', // questionnaire G14 — set once client confirms GA/Search Console
  },
} as const;
