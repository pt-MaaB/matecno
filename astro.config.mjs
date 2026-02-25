import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const PRIORITIES = {
  'https://matecno.pt/': 1.0,
  'https://matecno.pt/servicos/': 0.9,
  'https://matecno.pt/contacto/': 0.9,
  'https://matecno.pt/servicos/redes/': 0.8,
  'https://matecno.pt/servicos/servidores/': 0.8,
  'https://matecno.pt/servicos/ciberseguranca/': 0.8,
  'https://matecno.pt/servicos/emails-profissionais/': 0.8,
  'https://matecno.pt/servicos/alojamento-web/': 0.8,
  'https://matecno.pt/servicos/design-websites/': 0.8,
  'https://matecno.pt/servicos/seo/': 0.8,
  'https://matecno.pt/sobre/': 0.6,
  'https://matecno.pt/blog/': 0.8,
  'https://matecno.pt/faq/': 0.7,
};

export default defineConfig({
  site: 'https://matecno.pt',
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        const isService = item.url.includes('/servicos/');
        const isHome = item.url === 'https://matecno.pt/';
        const isBlogPost = item.url.includes('/blog/') && item.url !== 'https://matecno.pt/blog/';
        return {
          ...item,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: isHome ? 'weekly' : isService ? 'monthly' : 'monthly',
          priority: PRIORITIES[item.url] ?? (isBlogPost ? 0.6 : 0.5),
        };
      },
    }),
  ],
});
