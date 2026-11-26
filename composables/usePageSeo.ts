import { seo } from '~/data/site'

type PageSeo = {
  /** Page title without the site suffix. Empty for the home page. */
  title?: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  /** Share image path or URL; defaults to the site share image. */
  image?: MaybeRefOrGetter<string | undefined>
  imageAlt?: MaybeRefOrGetter<string | undefined>
  type?: 'website' | 'article'
}

/**
 * Absolute origin of the live site: NUXT_PUBLIC_SITE_URL, else the request origin.
 * Empty while prerendering without NUXT_PUBLIC_SITE_URL, because the build's own
 * origin (localhost) must never end up in canonical or share URLs.
 */
export function useSiteOrigin() {
  const configured = useRuntimeConfig().public.siteUrl as string
  if (configured) return configured.replace(/\/$/, '')
  if (import.meta.prerender) return ''
  return useRequestURL().origin.replace(/\/$/, '')
}

/**
 * Title, description, canonical URL and Open Graph / Twitter tags for one page.
 * The title suffix comes from the titleTemplate in app.vue.
 */
export function usePageSeo(page: PageSeo) {
  const route = useRoute()
  const origin = useSiteOrigin()

  // Canonical drops the query string (e.g. ?noboot) and any trailing slash.
  const url = computed(() => origin + (route.path === '/' ? '/' : route.path.replace(/\/$/, '')))
  const title = computed(() => toValue(page.title) || '')
  const fullTitle = computed(() => (title.value ? `${title.value} · ${seo.siteName}` : seo.defaultTitle))
  const image = computed(() => {
    const src = toValue(page.image) || seo.shareImage
    return src.startsWith('http') ? src : origin + src
  })

  useHead({
    title: title,
    link: origin ? [{ rel: 'canonical', href: url }] : [],
  })

  useSeoMeta({
    description: () => toValue(page.description),
    ogTitle: fullTitle,
    ogDescription: () => toValue(page.description),
    ogType: page.type ?? 'website',
    ogUrl: () => (origin ? url.value : undefined),
    ogSiteName: seo.siteName,
    ogImage: () => (origin ? image.value : undefined),
    ogImageAlt: () => toValue(page.imageAlt) || fullTitle.value,
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: () => toValue(page.description),
    twitterImage: () => (origin ? image.value : undefined),
  })
}
