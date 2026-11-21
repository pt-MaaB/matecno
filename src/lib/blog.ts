// The MaTecno blog page kind (/blog/<slug>/ + the /blog/ index), built ONCE (decision-0050): every post afterwards
// is ONE data file, src/data/blog/<slug>.json, and never code. The spec this follows is ANTI
// Deliverables/marketing/matecno/seo/page_kind_blog.md (Content_Strategists, 2026-11-12); the article shape is
// Momentos' ArticleDef (momentos/landing/src/site/types.ts).
//
// A post file is read at build time, checked here, and becomes: the page at its slug (src/pages/blog/[slug].astro),
// a card on the /blog/ index (src/pages/blog/[...index].astro), a <url> in the sitemap (with `updated` as lastmod,
// astro.config.mjs) and a line in llms.txt. With no post file, none of those exist: no index page, no nav link.
//
// The page's own wording outside the posts (index title, description, h1, intro, the labels every post shows) is
// data too: src/data/blog_index.json.
//
// THE CONTRACT (one file per post: src/data/blog/<slug>.json; the file name is the slug):
//   slug            "/blog/<slug>/", lowercase words joined by "-", equal to the file name
//   title           <title>, <= 65 chars (spec 9: <= 60, brand once, a hyphen or "|" as the one separator)
//   description     meta description, 110-165 chars
//   kicker          the complaining business's type ("Para donos de restaurante"), spec 1
//   h1              the title's text without the brand suffix
//   answer          the direct answer, 40-60 words, shown first
//   sections        [{ h2, id?, blocks: [p | list | table | callout] }], at least one
//   faq             [{ q, a }], may be empty; when not empty 3-8 questions, answers <= 450 chars (spec 8)
//   related         2-4 paths of existing pages (see RELATED_OK); MUST include service_link when it is set (spec 1, 5)
//   navLabel        short label: the breadcrumb's last item and this post's label in other posts' related links
//   vertical        hair_salon | restaurant | auto_repair | dental | gym (spec 1)
//   complaint       { question, sources: [{ quote, url, date }] } with at least one source (spec 4). NEVER rendered:
//                   it is the S1 evidence, not page copy.
//   service_link    one of the live service pages (SERVICE_OK) or null (spec 5)
//   not_our_service_reason  null when service_link is set; otherwise the honest closing statement of what MaTecno
//                   does not do, rendered where the CTA would be (spec 6)
//   cta             { label, href } with href == service_link; null when service_link is null (spec 6)
//   claims          [company_facts.md lines the body names]; may be empty; NEVER rendered (spec 1, 7)
//   lang            "pt" (spec 3: a post ships in pt first; en/es twins of the same slug get their own template later)
//   published       YYYY-MM-DD
//   updated         YYYY-MM-DD, >= published; feeds dateModified and the sitemap's lastmod
//
// Inline markup allowed in any rendered text (answer, block text, list items, table cells, callout text, faq
// answers, not_our_service_reason): **bold** and [text](/path or https://...). Internal links must point at a page
// that exists. Nothing else is interpreted: every string is printed as text, never as HTML.
//
// A file that breaks the contract's SHAPE (a missing or mistyped field, a link to a page that does not exist, a CTA
// that skips the service page) fails the build with the file and the field named, so it can never go live broken.
// The LENGTH bounds (title, description, answer, faq) print a warning and do not fail: wording is gated by the copy
// review, not by the build.

import BLOG_INDEX from '../data/blog_index.json';
import { getSite, getHub, servicePagesIn } from '../data/site.mjs';
import { COLORS, SITE_URL } from '../data/structure.mjs';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { type: 'callout'; title?: string; text: string };

export interface Section { h2: string; id: string; blocks: Block[] }
export interface FaqItem { q: string; a: string }
export interface ComplaintSource { quote: string; url: string; date: string }
export interface Complaint { question: string; sources: ComplaintSource[] }

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  h1: string;
  answer: string;
  sections: Section[];
  faq: FaqItem[];
  related: string[];
  navLabel: string;
  vertical: string;
  complaint: Complaint;
  service_link: string | null;
  not_our_service_reason: string | null;
  cta: { label: string; href: string } | null;
  claims: string[];
  lang: 'pt';
  published: string;
  updated: string;
}

export const BLOG = BLOG_INDEX as {
  title: string;
  description: string;
  h1: string;
  intro: string;
  navLabel: string;
  labels: Record<string, string>;
};

export const BLOG_ROUTE = '/blog/';
export const VERTICALS = ['hair_salon', 'restaurant', 'auto_repair', 'dental', 'gym'];
const KEYS = [
  'slug', 'title', 'description', 'kicker', 'h1', 'answer', 'sections', 'faq', 'related', 'navLabel', 'vertical',
  'complaint', 'service_link', 'not_our_service_reason', 'cta', 'claims', 'lang', 'published', 'updated',
];

// ── the site's PT pages, from the same data the site is built from ────────────────────────────────────────────────
const pt = getSite('pt');
const leads = getHub('leads', 'pt');
const SERVICE_PAGES = servicePagesIn('pt')
  .filter(({ slug }) => slug.startsWith('servicos/'))
  .map(({ key, slug }) => ({ route: `/${slug}/`, key, label: getHub(key, 'pt').label as string }));

interface PageRef { label: string; color: string }
const PAGES = new Map<string, PageRef>();
PAGES.set('/', { label: BLOG.labels.home, color: COLORS.core });
for (const h of pt.hubs) PAGES.set(h.route, { label: h.label, color: h.color });
PAGES.set(leads.route, { label: leads.label, color: leads.color });
for (const s of SERVICE_PAGES) PAGES.set(s.route, { label: s.label, color: COLORS[s.key] ?? COLORS.serv });
PAGES.set('/privacidade/', { label: 'Privacidade', color: COLORS.core });

// spec 5: the pages a post may send its reader to as THE fix
const SERVICE_OK = new Set<string>([pt.hubs.find((h: any) => h.key === 'serv').route, ...SERVICE_PAGES.map((s) => s.route), leads.route]);
// spec 1: the service page, plus /servicos/, the blog index, /leads-dados/, /metodo/, /produtos/, /sobre/, other posts
const RELATED_HUBS = new Set(['serv', 'produtos', 'method', 'about']);
const RELATED_OK = new Set<string>([
  ...SERVICE_OK,
  ...pt.hubs.filter((h: any) => RELATED_HUBS.has(h.key)).map((h: any) => h.route),
  BLOG_ROUTE,
]);

// ── inline markup ─────────────────────────────────────────────────────────────────────────────────────────────────
export type Seg = { t: 'text'; v: string } | { t: 'b'; v: string } | { t: 'a'; v: string; href: string; ext: boolean };
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

export function inline(text: string): Seg[] {
  return text.split(TOKEN).filter(Boolean).map((part): Seg => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) return { t: 'b', v: part.slice(2, -2) };
    const m = part.match(LINK);
    if (m) {
      const ext = /^https?:\/\//.test(m[2]);
      if (ext || m[2].startsWith('/')) return { t: 'a', v: m[1], href: ext ? m[2] : pathOf(m[2]) + hashOf(m[2]), ext };
      return { t: 'text', v: m[1] };
    }
    return { t: 'text', v: part };
  });
}

/** Text with the markup stripped, for <title>, meta tags, JSON-LD, llms.txt and the index teaser. */
export function plain(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1');
}

export function slugify(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** '/servicos/websites' or '/servicos/websites/#x' -> '/servicos/websites/' (the form every page is served at). */
function pathOf(href: string): string {
  const p = href.split('#')[0].split('?')[0];
  return p.endsWith('/') ? p : p + '/';
}
function hashOf(href: string): string {
  const i = href.indexOf('#');
  return i >= 0 ? href.slice(i) : '';
}

// ── loading + the contract check ──────────────────────────────────────────────────────────────────────────────────
const FILES = import.meta.glob('../data/blog/*.json', { eager: true, import: 'default' }) as Record<string, unknown>;

class Bad {
  errors: string[] = [];
  warnings: string[] = [];
  constructor(public file: string) {}
  err(field: string, msg: string) { this.errors.push(`${field}: ${msg}`); }
  warn(field: string, msg: string) { this.warnings.push(`${field}: ${msg}`); }
}

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;
const isDate = (v: unknown): v is string =>
  typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && new Date(v + 'T00:00:00Z').toISOString().slice(0, 10) === v;
const words = (s: string) => plain(s).trim().split(/\s+/).filter(Boolean).length;
const SLUG_SEG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function str(b: Bad, o: any, field: string, label = field) {
  if (!isStr(o?.[field])) b.err(label, 'must be a non-empty string');
}

function checkBlock(b: Bad, blk: any, at: string, texts: string[]) {
  switch (blk?.type) {
    case 'p':
      str(b, blk, 'text', `${at}.text`);
      if (isStr(blk.text)) texts.push(blk.text);
      break;
    case 'list':
      if (!Array.isArray(blk.items) || !blk.items.length || !blk.items.every(isStr)) b.err(`${at}.items`, 'must be a non-empty list of strings');
      else texts.push(...blk.items);
      if (blk.ordered !== undefined && typeof blk.ordered !== 'boolean') b.err(`${at}.ordered`, 'must be true or false');
      break;
    case 'table': {
      const head = blk.head;
      if (!Array.isArray(head) || !head.length || !head.every(isStr)) { b.err(`${at}.head`, 'must be a non-empty list of strings'); break; }
      if (!Array.isArray(blk.rows) || !blk.rows.length) { b.err(`${at}.rows`, 'must be a non-empty list of rows'); break; }
      blk.rows.forEach((r: any, i: number) => {
        if (!Array.isArray(r) || r.length !== head.length || !r.every((c: unknown) => typeof c === 'string'))
          b.err(`${at}.rows[${i}]`, `must be ${head.length} strings, one per column`);
        else texts.push(...r);
      });
      if (blk.caption !== undefined && !isStr(blk.caption)) b.err(`${at}.caption`, 'must be a non-empty string when present');
      break;
    }
    case 'callout':
      str(b, blk, 'text', `${at}.text`);
      if (isStr(blk.text)) texts.push(blk.text);
      if (blk.title !== undefined && !isStr(blk.title)) b.err(`${at}.title`, 'must be a non-empty string when present');
      break;
    default:
      b.err(`${at}.type`, 'must be one of p, list, table, callout');
  }
}

function check(file: string, raw: any, slugs: Set<string>): { post?: BlogPost; bad: Bad } {
  const b = new Bad(file);
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) { b.err('(file)', 'must be one JSON object'); return { bad: b }; }
  for (const k of KEYS) if (!(k in raw)) b.err(k, 'is missing');
  for (const k of Object.keys(raw)) if (!KEYS.includes(k)) b.warn(k, 'is not a contract key; ignored');

  // address
  const name = file.split('/').pop()!.replace(/\.json$/, '');
  if (raw.slug !== `/blog/${name}/`) b.err('slug', `must be "/blog/${name}/" (the file name is the slug)`);
  if (!SLUG_SEG.test(name)) b.err('(file name)', 'must be lowercase letters and digits joined by "-"');

  for (const f of ['title', 'description', 'kicker', 'h1', 'answer', 'navLabel']) str(b, raw, f);
  if (raw.lang !== 'pt') b.err('lang', 'must be "pt" (only the pt template exists, spec 3)');
  if (!VERTICALS.includes(raw.vertical)) b.err('vertical', `must be one of ${VERTICALS.join(', ')}`);
  if (!isDate(raw.published)) b.err('published', 'must be a real date, YYYY-MM-DD');
  if (!isDate(raw.updated)) b.err('updated', 'must be a real date, YYYY-MM-DD');
  if (isDate(raw.published) && isDate(raw.updated) && raw.updated < raw.published) b.err('updated', 'is before published');

  // body
  const texts: string[] = [];
  if (isStr(raw.answer)) texts.push(raw.answer);
  const ids = new Set<string>();
  const sections: Section[] = [];
  if (!Array.isArray(raw.sections) || !raw.sections.length) b.err('sections', 'must be a non-empty list');
  else raw.sections.forEach((s: any, i: number) => {
    const at = `sections[${i}]`;
    str(b, s, 'h2', `${at}.h2`);
    if (s?.id !== undefined && !(typeof s.id === 'string' && SLUG_SEG.test(s.id))) b.err(`${at}.id`, 'must be lowercase letters and digits joined by "-"');
    const id = typeof s?.id === 'string' ? s.id : slugify(String(s?.h2 ?? ''));
    if (ids.has(id) || id === 'perguntas') b.err(`${at}.id`, `"${id}" is used twice on the page (set a distinct id)`);
    ids.add(id);
    if (!Array.isArray(s?.blocks) || !s.blocks.length) b.err(`${at}.blocks`, 'must be a non-empty list');
    else s.blocks.forEach((blk: any, j: number) => checkBlock(b, blk, `${at}.blocks[${j}]`, texts));
    sections.push({ ...s, id });
  });

  if (!Array.isArray(raw.faq)) b.err('faq', 'must be a list (empty is fine)');
  else raw.faq.forEach((f: any, i: number) => {
    str(b, f, 'q', `faq[${i}].q`);
    str(b, f, 'a', `faq[${i}].a`);
    if (isStr(f?.a)) texts.push(f.a);
  });

  // spec 4: the complaint, mandatory, never rendered
  const c = raw.complaint;
  if (!c || typeof c !== 'object' || Array.isArray(c)) b.err('complaint', 'must be { question, sources: [{ quote, url, date }] }');
  else {
    str(b, c, 'question', 'complaint.question');
    if (!Array.isArray(c.sources) || !c.sources.length) b.err('complaint.sources', 'needs at least one { quote, url, date } (spec 4)');
    else c.sources.forEach((s: any, i: number) => {
      str(b, s, 'quote', `complaint.sources[${i}].quote`);
      if (!(typeof s?.url === 'string' && /^https?:\/\/\S+$/.test(s.url))) b.err(`complaint.sources[${i}].url`, 'must be an http(s) link');
      if (!isDate(s?.date)) b.err(`complaint.sources[${i}].date`, 'must be a real date, YYYY-MM-DD');
    });
  }
  if (!Array.isArray(raw.claims) || !raw.claims.every(isStr)) b.err('claims', 'must be a list of strings (empty is fine)');

  // spec 5 + 6: the service link, the CTA, or the honest "not our service"
  const svc = raw.service_link;
  if (svc === null) {
    if (!isStr(raw.not_our_service_reason)) b.err('not_our_service_reason', 'must be set when service_link is null (spec 5)');
    else texts.push(raw.not_our_service_reason);
    if (raw.cta !== null) b.err('cta', 'must be null when service_link is null: no commercial CTA (spec 6)');
  } else if (typeof svc === 'string' && SERVICE_OK.has(pathOf(svc)) && svc === pathOf(svc)) {
    if (raw.not_our_service_reason !== null) b.err('not_our_service_reason', 'must be null when service_link is set');
    const cta = raw.cta;
    if (!cta || typeof cta !== 'object' || !isStr(cta.label) || typeof cta.href !== 'string') b.err('cta', 'must be { label, href } when service_link is set (spec 6)');
    else if (pathOf(cta.href) !== svc) b.err('cta.href', `must equal service_link (${svc}): the post sends the reader to the service page, never past it (spec 6)`);
  } else b.err('service_link', `must be null or one of ${[...SERVICE_OK].join(', ')}`);

  // related: 2-4 existing pages, the service page among them
  const rel: string[] = Array.isArray(raw.related) ? raw.related : [];
  if (!Array.isArray(raw.related) || rel.length < 2 || rel.length > 4) b.err('related', 'must list 2-4 pages');
  const seen = new Set<string>();
  rel.forEach((r: any, i: number) => {
    if (typeof r !== 'string') { b.err(`related[${i}]`, 'must be a path'); return; }
    const p = pathOf(r);
    if (p === raw.slug) b.err(`related[${i}]`, 'is this post itself');
    else if (!RELATED_OK.has(p) && !slugs.has(p)) b.err(`related[${i}]`, `"${r}" is not a page a post may link (spec 1): ${[...RELATED_OK].join(', ')} or another post`);
    if (seen.has(p)) b.err(`related[${i}]`, `"${r}" is listed twice`);
    seen.add(p);
  });
  if (typeof svc === 'string' && !seen.has(pathOf(svc))) b.err('related', `must include service_link ${svc} (spec 1, 5)`);

  // internal links inside the text must reach a page that exists
  for (const t of texts) for (const s of inline(t)) {
    if (s.t === 'a' && !s.ext) {
      const p = pathOf(s.href);
      if (!PAGES.has(p) && !slugs.has(p) && p !== BLOG_ROUTE) b.err('(text link)', `"${s.href}" is not a page of the site`);
    }
  }

  // length bounds: warnings (the copy review gates wording, not the build)
  if (isStr(raw.title) && raw.title.length > 65) b.warn('title', `${raw.title.length} chars (bound 65; spec 9 says 60)`);
  if (isStr(raw.description) && (raw.description.length < 110 || raw.description.length > 165))
    b.warn('description', `${raw.description.length} chars (bound 110-165)`);
  if (isStr(raw.answer) && (words(raw.answer) < 40 || words(raw.answer) > 60)) b.warn('answer', `${words(raw.answer)} words (bound 40-60)`);
  if (Array.isArray(raw.faq) && raw.faq.length && (raw.faq.length < 3 || raw.faq.length > 8)) b.warn('faq', `${raw.faq.length} questions (spec 8: 3-8)`);
  if (Array.isArray(raw.faq)) raw.faq.forEach((f: any, i: number) => {
    if (isStr(f?.a) && f.a.length > 450) b.warn(`faq[${i}].a`, `${f.a.length} chars (spec 8: <= 450)`);
  });

  if (b.errors.length) return { bad: b };
  return { post: { ...(raw as BlogPost), sections }, bad: b };
}

function load(): BlogPost[] {
  const entries = Object.entries(FILES).sort(([a], [b]) => a.localeCompare(b));
  const slugs = new Set(entries.map(([f]) => `/blog/${f.split('/').pop()!.replace(/\.json$/, '')}/`));
  const posts: BlogPost[] = [];
  const failed: string[] = [];
  for (const [file, raw] of entries) {
    const { post, bad } = check(file, raw, slugs);
    const name = 'src/data/blog/' + file.split('/').pop();
    for (const w of bad.warnings) console.warn(`[blog] ${name} ${w}`);
    if (post) posts.push(post);
    else failed.push(`${name}\n  - ${bad.errors.join('\n  - ')}`);
  }
  if (failed.length) throw new Error(`[blog] post file(s) break the contract (src/lib/blog.ts):\n${failed.join('\n')}`);
  // newest first; same day: last updated first, then by address
  return posts.sort((a, b) => b.published.localeCompare(a.published) || b.updated.localeCompare(a.updated) || a.slug.localeCompare(b.slug));
}

const POSTS = load();

// ── what the templates read ───────────────────────────────────────────────────────────────────────────────────────
export function blogPosts(): BlogPost[] {
  return POSTS;
}

/** The nav entry for the blog index: PT only (the posts are PT), and only once a post exists. */
export function blogNav(lang: string): { href: string; label: string } | null {
  return lang === 'pt' && POSTS.length ? { href: BLOG_ROUTE, label: BLOG.navLabel } : null;
}

export function pageRef(path: string): PageRef & { href: string } {
  const p = pathOf(path);
  const post = POSTS.find((x) => x.slug === p);
  if (post) return { href: p, label: post.navLabel, color: colorFor(post) };
  if (p === BLOG_ROUTE) return { href: p, label: BLOG.navLabel, color: COLORS.core };
  return { href: p, ...(PAGES.get(p) ?? { label: p, color: COLORS.core }) };
}

/** A post's accent: the colour of the page its fix lives on; the core's when MaTecno is not the answer. */
export function colorFor(post: BlogPost): string {
  return post.service_link ? PAGES.get(post.service_link)?.color ?? COLORS.serv : COLORS.core;
}

export function displayTitle(post: BlogPost): string {
  return plain(post.title).replace(/\s*[|\-–]\s*MaTecno\s*$/i, '');
}

/** One line for the index card: the answer's first sentence, cut at a word near 160 chars when longer. */
export function teaser(post: BlogPost): string {
  const a = plain(post.answer).trim();
  const first = a.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? a;
  if (first.length <= 160) return first;
  return first.slice(0, 160).replace(/\s+\S*$/, '') + '…';
}

export function dateLabel(iso: string): string {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

// ── JSON-LD (spec 10): Article + FAQPage (when there is one) + BreadcrumbList; never ProfessionalService ─────────
const abs = (path: string) => SITE_URL + path;
const ORG = { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Matecno', url: `${SITE_URL}/` };
const crumb = (items: [string, string][]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
});

export function postJsonLd(post: BlogPost) {
  const url = abs(post.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: plain(post.title),
        description: plain(post.description),
        inLanguage: 'pt-PT',
        datePublished: post.published,
        dateModified: post.updated,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        image: `${SITE_URL}/og.png`,
        author: ORG,
        publisher: { ...ORG, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
      },
      ...(post.faq.length
        ? [{
            '@type': 'FAQPage',
            '@id': `${url}#perguntas`,
            inLanguage: 'pt-PT',
            mainEntity: post.faq.map((f) => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
          }]
        : []),
      crumb([[BLOG.labels.home, '/'], [BLOG.navLabel, BLOG_ROUTE], [plain(post.navLabel), post.slug]]),
    ],
  };
}

export function indexJsonLd() {
  const url = abs(BLOG_ROUTE);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': url,
        url,
        name: plain(BLOG.title),
        description: plain(BLOG.description),
        inLanguage: 'pt-PT',
        publisher: ORG,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: POSTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(p.slug), name: displayTitle(p) })),
        },
      },
      crumb([[BLOG.labels.home, '/'], [BLOG.navLabel, BLOG_ROUTE]]),
    ],
  };
}
