export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  router: {
    base: '/',
  },
  head: {
    title: 'BONDIBONv2',
    titleTemplate: 'Игрушки, развивающие и развлекательные игры | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bondibon - игрушки, развивающие и развлекательные игры' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/normalize.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vue-lazysizes.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@aceforth/nuxt-optimized-images',
    'nuxt-webfontloader',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: false,
    extend(config, { loaders: { vue } }) {
      vue.transformAssetUrls.img = ['data-src', 'src']; // eslint-disable-line no-param-reassign
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']; // eslint-disable-line no-param-reassign
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  webfontloader: {
    google: {
      families: ['Montserrat:800,400'],
    },
  },
  optimizedImages: {
    inlineImageLimit: 1000,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: false,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      speed: 3,
      quality: [0.65, 0.8],
    },
    webp: {
      preset: 'default',
      quality: 80,
    },
  },
};
