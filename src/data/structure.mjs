// ---------------------------------------------------------------------------
// structure.mjs — language-INDEPENDENT structure for the MATECNO site.
//
// Colours, 3D positions, hub order and per-locale slugs live here (single
// source). The actual STRINGS live in ./i18n/{pt,en,es}.mjs. site.mjs merges
// the two via getSite(lang). Positions/colours are ported verbatim from the
// locked V14 prototype — do NOT re-solve them.
// ---------------------------------------------------------------------------

export const LOCALES = ['pt', 'en', 'es'];
export const DEFAULT_LOCALE = 'pt';

// <html lang> value + Open Graph locale + human name, per locale.
export const HTML_LANG = { pt: 'pt-PT', en: 'en', es: 'es-ES' };
export const OG_LOCALE = { pt: 'pt_PT', en: 'en_US', es: 'es_ES' };
export const LOCALE_NAME = { pt: 'Português', en: 'English', es: 'Español' };
export const LOCALE_SHORT = { pt: 'PT', en: 'EN', es: 'ES' };

// Top-level pillars (drive nav + the graph's core-connected hubs). Keys are
// language-independent. 'leads' is NOT a pillar — Leads & Dados is one of the
// services listed under 'serv' (a satellite of Serviços on the graph) with its
// own detail page; its data still lives in the packs under hubs.leads and its
// colour/slug remain below for that page.
export const HUB_KEYS = ['serv', 'produtos', 'method', 'about', 'contact'];

// Brand colours per hub (hex). core is the dark MATECNO centre.
// leads = magenta — the accent for the Leads & Dados service detail page.
export const COLORS = {
  serv: '#2f6fe0',
  leads: '#c2268f',
  produtos: '#12a06a',
  method: '#7a52e0',
  about: '#c07d16',
  contact: '#e5412a',
  core: '#1b1b1e',
};

// Hand-placed 3D coordinates from V14 (do not re-solve).
export const POS = {
  serv: [-2.9, 0.9, 0.4],
  produtos: [2.9, 1.1, -0.7],
  method: [-1.6, -2.7, 1.1],
  about: [2.2, -1.8, 1.7],
  contact: [0.7, 2.8, -1.6],
};

// Translated slugs per locale. PT lives at the site root (/servicos); EN/ES are
// prefixed with their locale (/en/services, /es/servicios).
export const SLUGS = {
  serv: { pt: 'servicos', en: 'services', es: 'servicios' },
  leads: { pt: 'leads-dados', en: 'leads-data', es: 'leads-datos' },
  produtos: { pt: 'produtos', en: 'products', es: 'productos' },
  method: { pt: 'metodo', en: 'method', es: 'metodo' },
  about: { pt: 'sobre', en: 'about', es: 'nosotros' },
  contact: { pt: 'contacto', en: 'contact', es: 'contacto' },
};

export const SITE_URL = 'https://matecno.pt';

// Route for a hub key in a locale. Trailing slash to match Astro's directory
// output (/servicos/index.html) so nav links, hreflang, canonical and og:url
// all agree and no redirect is needed.
export function routeFor(key, lang) {
  const slug = SLUGS[key][lang];
  return lang === DEFAULT_LOCALE ? `/${slug}/` : `/${lang}/${slug}/`;
}

// Home route for a locale.
export function homeRoute(lang) {
  return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
}

// hreflang alternates for a page. key === 'home' or a hub key.
export function alternatesFor(key) {
  return LOCALES.map((l) => ({
    lang: l,
    htmlLang: HTML_LANG[l],
    href: key === 'home' ? homeRoute(l) : routeFor(key, l),
    name: LOCALE_NAME[l],
    short: LOCALE_SHORT[l],
  }));
}

// Language-independent parts of the ProfessionalService / SoftwareCompany
// JSON-LD. The localizable strings are grafted on per-locale in site.mjs.
export const JSONLD_BASE = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  additionalType: 'https://schema.org/SoftwareCompany',
  '@id': 'https://matecno.pt/#organization',
  name: 'Matecno',
  alternateName: 'Matecno IT Services',
  email: 'geral@matecno.pt',
  telephone: '+351919642845',
  priceRange: '€€',
  image: 'https://matecno.pt/og.png',
  logo: 'https://matecno.pt/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbra',
    addressRegion: 'Coimbra',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.2033,
    longitude: -8.4103,
  },
  founder: {
    '@type': 'Person',
    name: 'Mauro Abrantes',
  },
  sameAs: [],
};
