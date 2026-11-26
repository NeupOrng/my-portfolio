<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { links, profile, seo } from '~/data/site'

// Every page title reads "Page · Orng Neup"; the home page uses the full default.
useHead({
  titleTemplate: (title?: string) => (title ? `${title} · ${seo.siteName}` : seo.defaultTitle),
})

// Structured data: who this site is about, for search engines.
const origin = useSiteOrigin()
useHead({
  script: [
    {
      type: 'application/ld+json',
      key: 'ld-person',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        url: origin + '/',
        jobTitle: 'Lead Software Developer',
        worksFor: { '@type': 'Organization', name: 'TrueMoney Cambodia' },
        description: profile.headline,
        sameAs: [links.github.href, links.linkedin.href],
      }),
    },
  ],
})
</script>
