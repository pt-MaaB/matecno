import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.string(),
    categoryIcon: z.string(),
    readTime: z.string(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = { blog };
