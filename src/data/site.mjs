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

import SEO from './seo_pages.json';
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
      aspects: linkedAspects(key, h.aspects, lang),
      page: withOverride(key, h.page, lang),
    };
  });
  const core = { label: 'MATECNO', route: homeRoute(lang), tagline: pack.core.tagline };
  const home = (SEO.overrides?.home || {})[lang] || {};
  const seo = {
    title: home.title || pack.seo.titleHome,
    h1: home.h1 || pack.seo.h1Home || home.title || pack.seo.titleHome,
    description: home.description || pack.seo.descHome,
    jsonld: buildJsonLd(pack, lang),
  };
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

// Assemble a single hub (top-level pillar OR a non-pillar like 'leads') from
// its string pack + structure. Used by section/detail pages so a hub that
// isn't in HUB_KEYS (e.g. the Leads & Dados service page) still resolves.
export function getHub(key, lang) {
  if (SEO.pages?.[key]) return servicePage(key, lang);
  const pack = PACKS[lang] || PACKS[DEFAULT_LOCALE];
  const h = pack.hubs[key] || PACKS[DEFAULT_LOCALE].hubs[key];
  return { key, route: routeFor(key, lang), label: h.label, color: COLORS[key], aspects: linkedAspects(key, h.aspects, lang), page: withOverride(key, h.page, lang) };
}

// ── the SEO layer (src/data/seo_pages.json, written by tools/empire_seo_apply.py) ─────────────────────────────────
// A page's approved title / h1 / description in one language replace the pack's (CEO-approved on the hub).
function withOverride(key, page, lang) {
  const o = (SEO.overrides?.[key] || {})[lang];
  return o ? { ...page, ...pick(o, ['title', 'h1', 'description']) } : page;
}

function pick(o, keys) {
  return Object.fromEntries(keys.filter((k) => o[k]).map((k) => [k, o[k]]));
}

// The /servicos card a service page details links to it, in every language the page has approved wording for.
function linkedAspects(key, aspects, lang) {
  const out = aspects.map((a) => ({ ...a }));
  for (const [pkey, p] of Object.entries(SEO.pages || {})) {
    const [hub, idx] = p.card || [];
    if (hub === key && out[idx] && p.slugs?.[lang] && p.lang?.[lang]) out[idx].linkTo = pkey;
  }
  return out;
}

// A service page of its own: the approved title / h1 / description / intro in this language; the body is the
// card it details and the HoraCerta proof, both in this language's own pack (copy already live on the site).
function servicePage(key, lang) {
  const p = SEO.pages[key];
  const pack = PACKS[lang] || PACKS[DEFAULT_LOCALE];
  const e = p.lang?.[lang] || p.lang?.[DEFAULT_LOCALE] || {};
  const at = ([hub, i]) => (pack.hubs[hub] || PACKS[DEFAULT_LOCALE].hubs[hub]).aspects[i];
  const card = at(p.card);
  return {
    key,
    route: routeFor(key, lang),
    label: card.title,
    color: COLORS[key],
    aspects: [card, ...(p.proof ? [at(p.proof)] : [])],
    page: {
      title: e.title,
      description: e.description,
      h1: e.h1,
      paras: [e.lede || e.description],
      cta: (pack.hubs[p.card[0]] || PACKS[DEFAULT_LOCALE].hubs[p.card[0]]).page.cta,
    },
  };
}

// The service pages that exist in a locale (approved wording + an address there), for the routes and the sitemap.
export function servicePagesIn(lang) {
  return Object.entries(SEO.pages || {})
    .filter(([, p]) => p.slugs?.[lang] && p.lang?.[lang])
    .map(([key, p]) => ({ key, slug: p.slugs[lang] }));
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
