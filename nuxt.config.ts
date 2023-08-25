// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap",
        },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },
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
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      // 'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      // 'composables/**'
    ]
  },
  components: [
    { path: '~/components/HeaderComponents', pathPrefix: false }, 
    { path: '~/components/NavigationComponents', pathPrefix: false }, 
    { path: '~/components/CardsComponents', pathPrefix: false }, 
    { path: '~/components/ChartComponents', pathPrefix: false }, 
    { path: '~/components/ModalsComponents', pathPrefix: false }, 
    '~/components'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],
  
})
