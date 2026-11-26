// Allow everything except the APIs, and point crawlers at the sitemap.
export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${siteOrigin(event)}/sitemap.xml\n`
})
