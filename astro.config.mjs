import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { existsSync, readdirSync, readFileSync } from 'node:fs';

// hreflang alternates are emitted per-page in the <head> (see Layout.astro),
// which is authoritative for Google. The sitemap lists every localized URL
// (PT at the root, EN under /en/, ES under /es/) with sensible priorities.
const HOMES = ['https://matecno.pt/', 'https://matecno.pt/en/', 'https://matecno.pt/es/'];

// Blog posts (src/data/blog/<slug>.json, contract in src/lib/blog.ts) carry a TRUE last-modified date, their `updated`
// field, so their <url> gets it as lastmod; the /blog/ index gets the newest one. Every other page keeps none (below).
const BLOG_DIR = new URL('./src/data/blog/', import.meta.url);
const BLOG_LASTMOD = {};
if (existsSync(BLOG_DIR)) {
  for (const f of readdirSync(BLOG_DIR).filter((n) => n.endsWith('.json')).sort()) {
    const post = JSON.parse(readFileSync(new URL(f, BLOG_DIR), 'utf8'));
    if (typeof post.slug !== 'string' || typeof post.updated !== 'string') continue; // src/lib/blog.ts fails the build
    const url = 'https://matecno.pt' + post.slug;
    BLOG_LASTMOD[url] = post.updated;
    const index = 'https://matecno.pt/blog/';
    if (!BLOG_LASTMOD[index] || post.updated > BLOG_LASTMOD[index]) BLOG_LASTMOD[index] = post.updated;
  }
}

export default defineConfig({
  site: 'https://matecno.pt',
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        const url = item.url;
        const isHome = HOMES.includes(url);
        const isPtHome = url === 'https://matecno.pt/';
        const isContact = /\/(contacto|contact)\/?$/.test(url);
        let priority = 0.7;
        if (isHome) priority = isPtHome ? 1.0 : 0.8;
        else if (isContact) priority = 0.8;
        // No lastmod (2026-10-27): it was the build date on every URL at every deploy, a date Google learns to
        // ignore. Google uses lastmod only when it is consistently true; none is better than a false one.
        const { lastmod, ...rest } = item;
        return {
          ...rest,
          ...(BLOG_LASTMOD[url] ? { lastmod: BLOG_LASTMOD[url] } : {}),
          changefreq: isHome ? 'weekly' : 'monthly',
          priority,
        };
      },
    }),
  ],
});
