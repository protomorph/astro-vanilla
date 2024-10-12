
import { defineCollection } from 'astro:content'

import { blog } from '../schema/blog'

export const collections = {
	blog: defineCollection({
		type: 'content',
		schema: blog,
	})
}
