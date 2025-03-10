// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./",
  imports: {
    dirs: ['~/models', '~/mock']
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'last'}],
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
        },
      },
      plugins: [],
    }
  },

  runtimeConfig: {
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