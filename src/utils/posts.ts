
import { slug } from 'github-slugger'
import { type CollectionEntry, getCollection } from 'astro:content'

const base = import.meta.env.BASE_URL

export type TaggedItem = {
  count?: number
  href: string
  name: string
}

export function filterByTag (
  tag: string,
  posts: (CollectionEntry<'blog'> & { body: string })[]
): (CollectionEntry<'blog'> & { body: string })[] {
  return posts.filter(({ data }) => data.tags.map(
    (t: string) => slug(t)
  ).includes(slug(tag)))
}

export function filterDrafts ({ data }: CollectionEntry<'blog'> & { body: string }) {
  if (import.meta.env.PROD) return (
      new Date(data.pubDate)
    ).getTime() < Date.now() || data.draft !== true

  return true
}

export function filterFeatured (
  posts: (CollectionEntry<'blog'> & { body: string })[],
  limit: number = 4
) {
  return [...posts.filter(({ data }) => data.featured)].slice(0, limit)
}

export async function getAllPosts (
  limit?: number
): Promise<(CollectionEntry<'blog'> & { body: string })[]> {
  const posts = (await getCollection('blog', filterDrafts)).sort((
    a: CollectionEntry<'blog'> & { body: string },
    b: CollectionEntry<'blog'> & { body: string }
  ) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()) as (CollectionEntry<'blog'> & { body: string})[]

  for (let { data } of posts) {
    data.tagged = data.tags.map((tag: string) => ({
      href: `${base}/blog/tags/${slug(tag)}`,
      name: tag,
    })) || []
  }

  return posts.slice(0, limit ?? posts.length)
}

export async function getAllTags (
  limit?: number
): Promise<TaggedItem[]> {
  const posts = await getCollection('blog', filterDrafts) as (CollectionEntry<'blog'> & { body: string})[]
  const tags = [...new Set(posts.flatMap(
    ({ data }) => data.tags || []
  ).filter(Boolean))]

  return tags.map((tag: string) => ({
    count: filterByTag(tag, posts).length,
    href: `${base}/blog/tags/${slug(tag)}`,
    name: tag,
  })).sort(
    (a, b) => b.count - a.count
  ).slice(0, limit ?? tags.length)
}

export function readingTime (html: string) {
  const text = html.replace(/<[^>]+>/g, '')
  const count = text.split(/\s+/).length
  return `${((count / 200) + 1).toFixed()} minute read`
}

export function relatedPosts (
  { data, id }: CollectionEntry<'blog'> & { body: string },
  posts: CollectionEntry<'blog'>[],
  limit: number = 4
) {
  return posts.filter((post: CollectionEntry<'blog'> & { body: string }) => {
    return post.id !== id && data.tags.some(
      (tag: string) => post.data.tags.includes(tag)
    )
  }).slice(0, limit) || []
}
