import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: rssSchema
});

export const collections = { blog };
