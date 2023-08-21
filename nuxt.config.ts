// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      "@fortawesome/fontawesome-svg-core",
        // "@fortawesome/pro-solid-svg-icons",
        // "@fortawesome/pro-regular-svg-icons",
        // "@fortawesome/pro-light-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
    ],
  },
  components: [
    { path: '~/components/HeaderComponents', pathPrefix: false }, 
    { path: '~/components/NavigationComponents', pathPrefix: false }, 
    { path: '~/components/CardsComponents', pathPrefix: false }, 
    '~/components'
  ]
})
