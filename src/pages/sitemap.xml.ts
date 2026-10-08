// /sitemap.xml — the conventional address. @astrojs/sitemap writes /sitemap-index.xml (declared in robots.txt), and
// /sitemap.xml returned 404 (found 2026-10-08): tools and crawlers that assume the standard name, the empire's own SEO
// checks among them, saw no sitemap. Built at build time as the same sitemap index, so it can never go stale.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://matecno.pt')).href.replace(/\/$/, '');
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    `<sitemap><loc>${base}/sitemap-0.xml</loc></sitemap>` +
    '</sitemapindex>';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
