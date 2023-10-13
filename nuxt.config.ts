// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: ''
  },
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      BASE_API_URL: `${process.env.API_BASE_URL}` || 'http://softswitch.main:8000',
      APP_BASE_URL:`${process.env.APP_BASE_URL}` || 'http://localhost:3000',
      // BASE_API_BROWSER_URL: '${BASE_API_BROWSER_URL}'
    }
  },
  ssr:false,
  spaLoadingTemplate: 'spa-loading-template.html',
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
    { path: '~/components/NewBaseModal', pathPrefix: false }, 
    { path: '~/components/NotificationComponents', pathPrefix: false }, 
    { path: '~/components/FormsComponents', pathPrefix: false }, 
    '~/components'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],
  
})
