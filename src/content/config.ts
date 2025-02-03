import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      thumbnail: image(),
      excerpt: z.string().optional(),
    }),
})

export const collections = {
  blog: blogCollection,
}
