import type { H3Event } from 'h3'

/** Live site origin: NUXT_PUBLIC_SITE_URL if set, else the request's own origin. */
export function siteOrigin(event: H3Event) {
  const configured = useRuntimeConfig(event).public.siteUrl as string
  return (configured || getRequestURL(event).origin).replace(/\/$/, '')
}
