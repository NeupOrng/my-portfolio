// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-02-13'
})