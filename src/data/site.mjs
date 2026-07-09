// ---------------------------------------------------------------------------
// site.mjs — locale-aware assembler for the MATECNO graph-explorer experience.
//
// Merges the language-INDEPENDENT structure (structure.mjs: colours, 3D
// positions, hub order, per-locale slugs, JSON-LD base) with a per-locale
// STRING pack (i18n/{pt,en,es}.mjs) into the exact shape the components expect.
//
//   getSite(lang)        -> { lang, htmlLang, ogLocale, colors, core, seo,
//                             hubs[], ui, contact }
//   getGraphContent(lang)-> the object <GraphExplorer content={...} /> serialises
//   alternatesFor(key)   -> hreflang alternates for a page ('home' | hub key)
//
// Colours + positions are single-source in structure.mjs (ported from V14).
// Do NOT introduce force-directed physics — the layout is hand-placed.
// ---------------------------------------------------------------------------

import {
  COLORS,
  POS,
  HUB_KEYS,
  routeFor,
  homeRoute,
  alternatesFor,
  HTML_LANG,
  OG_LOCALE,
  JSONLD_BASE,
  SITE_URL,
  DEFAULT_LOCALE,
} from './structure.mjs';
import pt from './i18n/pt.mjs';
import en from './i18n/en.mjs';
import es from './i18n/es.mjs';

const PACKS = { pt, en, es };

function buildJsonLd(pack, lang) {
  return {
    ...JSONLD_BASE,
    url: SITE_URL + homeRoute(lang),
    inLanguage: HTML_LANG[lang],
    description: pack.seo.jsonldDescription,
    knowsAbout: pack.seo.knowsAbout,
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'AdministrativeArea', name: pack.seo.areaServedRemote },
    ],
    makesOffer: pack.seo.makesOffer.map((o) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: o.name, description: o.description },
    })),
    owns: {
      '@type': 'SoftwareApplication',
      name: 'HoraCerta',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: pack.seo.ownsDescription,
    },
  };
}

export function getSite(lang) {
  const pack = PACKS[lang] || PACKS[DEFAULT_LOCALE];
  const hubs = HUB_KEYS.map((key) => {
    // Fall back to the default locale for any hub a pack hasn't translated yet,
    // so adding a hub/locale incrementally never breaks the build.
    const h = pack.hubs[key] || PACKS[DEFAULT_LOCALE].hubs[key];
    return {
      key,
      route: routeFor(key, lang),
      label: h.label,
      color: COLORS[key],
      pos: POS[key],
      aspects: h.aspects,
      page: h.page,
    };
  });
  const core = { label: 'MATECNO', route: homeRoute(lang), tagline: pack.core.tagline };
  const seo = { title: pack.seo.titleHome, description: pack.seo.descHome, jsonld: buildJsonLd(pack, lang) };
  return {
    lang,
    htmlLang: HTML_LANG[lang],
    ogLocale: OG_LOCALE[lang],
    colors: COLORS,
    core,
    seo,
    hubs,
    ui: pack.ui,
    contact: pack.contact,
  };
}

// The object <GraphExplorer content={...} /> serialises to JSON. Carries the ui
// chrome strings, the current lang and the home hreflang alternates (switcher).
export function getGraphContent(lang) {
  const s = getSite(lang);
  return {
    seo: s.seo,
    core: s.core,
    hubs: s.hubs,
    colors: s.colors,
    ui: s.ui,
    lang,
    alternates: alternatesFor('home'),
  };
}

export { alternatesFor, homeRoute, routeFor } from './structure.mjs';
export { LOCALES, LOCALE_NAME, LOCALE_SHORT, HTML_LANG, DEFAULT_LOCALE } from './structure.mjs';
