import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// hreflang alternates are emitted per-page in the <head> (see Layout.astro),
// which is authoritative for Google. The sitemap lists every localized URL
// (PT at the root, EN under /en/, ES under /es/) with sensible priorities.
const HOMES = ['https://matecno.pt/', 'https://matecno.pt/en/', 'https://matecno.pt/es/'];

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
        return {
          ...item,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: isHome ? 'weekly' : 'monthly',
          priority,
        };
      },
    }),
  ],
});
