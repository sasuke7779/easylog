export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: 'src/',
  head: {
    title: 'easylog',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    link: [{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    // fonts
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/base.css',
    '@/assets/css/plugin.css',
    '@/assets/css/module.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/firebase', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  /*
   ** FontAwesome
   */
  fontawesome: {
    component: 'fa',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
