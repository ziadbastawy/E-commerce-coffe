export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cofepedia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/sass/style.scss', './assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/axios',
    './plugins/globalComponents',
    './plugins/globalMixins',
    './plugins/globalFilter',
    './plugins/vue-sweetalert',
    { src: './plugins/vue-infinite-scroll.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    seo: true,
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      }
    ],
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      common: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          maxAge: 3600
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' }, // $auth.loggedIn => if yoy are logged in
          user: { url: '/auth/me', method: 'post' }, // $auth.user => profile of user
          logout: { url: '/auth/logout', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post' }
        }
      }
    }
  },
  styleResources: {
    scss: ['./assets/sass/variables.scss', './assets/sass/mixins.scss']
  },
  env: {
    baseUrl: process.env.BASE_URL
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['mixins']
  },
  router: {
    parseQuery (query) {
      return require('qs').parse(query)
    },
    stringifyQuery (query) {
      const result = require('qs').stringify(query, { encode: false })
      return result ? `?${result}` : ''
    }
  },
  loading: '~/components/global/loader.vue'
}
