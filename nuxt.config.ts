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
      titleTemplate: (title?: string) => title ? `${title} · Orng Neup` : 'Orng Neup · Full-stack engineer, skilled with AI',
      meta: [
        { name: 'description', content: 'Orng Neup is a full-stack engineer who builds the whole path of a product, from Vue and React front ends to payment ledgers, identity and platform services, working with AI.' },
        { name: 'theme-color', content: '#0d0e0c' },
        { property: 'og:title', content: 'Orng Neup · Full-stack engineer, skilled with AI' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/brand/orng-wordmark-on-dark-bg.png' },
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
