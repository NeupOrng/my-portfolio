// https://nuxt.com/docs/api/configuration/nuxt-config
const bootCheck = `try{if(location.search.indexOf('noboot')>-1||sessionStorage.getItem('orng-boot')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('booted')}sessionStorage.setItem('orng-boot','1')}catch(e){document.documentElement.classList.add('booted')}`

export default defineNuxtConfig({
  srcDir: "./",
  imports: {
    dirs: ['~/models', '~/mock']
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      htmlAttrs: { lang: 'en' },
      // Title template, descriptions and share tags are set at runtime by
      // app.vue and composables/usePageSeo.ts (functions can't live here).
      meta: [
        { name: 'theme-color', content: '#0d0e0c' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preload', href: '/fonts/archivo-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      script: [{ innerHTML: bootCheck, tagPosition: 'head' }],
      noscript: [{ innerHTML: '<style>.boot{display:none}</style>' }],
    },
  },

  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'last'}],
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./data/**/*.ts",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
          colors: {
            ink: '#0d0e0c',
            'ink-raised': '#161714',
            paper: '#e8e8e3',
            'paper-sunk': '#dcdcd5',
            signal: '#c8f31d',
          },
          maxWidth: {
            site: '1360px',
          },
        },
      },
      plugins: [],
    }
  },

  runtimeConfig: {
    // Server-only. Set NUXT_TELEGRAM_BOT_TOKEN and NUXT_TELEGRAM_CHAT_ID in .env.
    telegramBotToken: '',
    telegramChatId: '',
    public: {
      // Live origin for canonical URLs, share images and the sitemap, e.g.
      // https://example.com. Set NUXT_PUBLIC_SITE_URL; falls back to the request origin.
      siteUrl: '',
      baseURL: process.env.BASE_URL
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-02-14",
})
