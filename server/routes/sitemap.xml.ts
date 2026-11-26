import { blogs } from '~/mock/blog'

// Static pages plus one entry per blog post.
const pages = ['/', '/work', '/about', '/blog', '/contact']

export default defineEventHandler((event) => {
  const origin = siteOrigin(event)
  // Dates are written in Cambodia time, so a post dated 26 Nov stays 26 Nov.
  const day = (d: Date) => new Date(d).toLocaleDateString('en-CA', { timeZone: 'Asia/Phnom_Penh' })
  const latest = blogs.reduce((max, b) => (new Date(b.createdAt) > max ? new Date(b.createdAt) : max), new Date(0))

  const urls = [
    ...pages.map((path) => ({ loc: origin + path, lastmod: path === '/blog' && blogs.length ? day(latest) : undefined })),
    ...blogs.map((b) => ({ loc: `${origin}/blog/${b.id}`, lastmod: day(b.createdAt) })),
  ]

  const body = urls
    .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
})
