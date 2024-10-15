
const BLOG = 'blog'
const TAGS = 'tags'

const base = import.meta.env.BASE_URL.replace(/\/$/g, '')
const strip = (str: string) => str.replace(/^\/|\/$/g, '')
console.log(base)

export const permalink = {
  root: (slug: string) => `${base}/${strip(slug)}`,
  blog: (slug: string) => `${base}/${BLOG}/${strip(slug)}`,
  tags: (slug: string) => `${base}/${BLOG}/${TAGS}/${strip(slug)}`,
}
console.log(permalink.root(''))
