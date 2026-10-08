// /llms.txt — the site summarised for AI assistants, in the llmstxt.org shape: an H1, a one-paragraph blockquote,
// the facts as a list, then H2 sections of links with one line each, and an "Optional" section last.
//
// Built at build time from the site's OWN strings (the PT pack via site.mjs: the home description, each page's meta
// description, the services catalog), so it says nothing the site does not already say and can never drift from it.
// Google ignores llms.txt (Search Central, 2026); it is here for assistants and agents that read it, and costs nothing.
// The things that move AI visibility live elsewhere: crawlable HTML, the JSON-LD in Layout.astro, the sitemap.
import type { APIRoute } from 'astro';
import { getSite, getHub } from '../data/site.mjs';
import { SITE_URL } from '../data/structure.mjs';

export const GET: APIRoute = () => {
  const pt = getSite('pt');
  const en = getSite('en');
  const es = getSite('es');
  const abs = (route: string) => SITE_URL + route;
  const serv = pt.hubs.find((h: any) => h.key === 'serv');
  const leads = getHub('leads', 'pt');
  const pages = [serv, leads, ...pt.hubs.filter((h: any) => h.key !== 'serv')];
  const lines = [
    '# Matecno',
    '',
    `> ${pt.seo.description}`,
    '',
    ...(serv?.aspects ?? []).map((a: any) => `- ${a.title ?? a.name}: ${a.desc}`),
    '',
    '## Páginas',
    '',
    ...pages.filter(Boolean).map((h: any) => `- [${h.label}](${abs(h.route)}): ${h.page?.description ?? ''}`.trimEnd()),
    '',
    '## Outros idiomas',
    '',
    `- [English](${abs(en.core.route)}): ${en.seo.description}`,
    `- [Español](${abs(es.core.route)}): ${es.seo.description}`,
    '',
    '## Optional',
    '',
    `- [Sitemap](${SITE_URL}/sitemap-index.xml)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
