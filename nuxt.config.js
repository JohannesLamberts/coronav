const baseUrl = 'https://coronav.de'
const hostname = baseUrl

export default {
  mode: 'universal',
  render: {
    bundleRenderer: {
      // always reuse context to match prod & dev behaviour
      runInNewContext: false
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'CoroNav',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:wght@400&family=Quicksand:wght@400;500;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/custom-bootstrap.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vue-states'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        baseUrl,
        locales: [
          { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de-DE.js' },
          { code: 'en', iso: 'en-US', name: 'English', file: 'en-EN.js' },
          {
            code: 'de-leicht',
            iso: 'de-DE',
            name: 'Leichte Sprache',
            file: 'de-SIMPLE.js'
          }
        ],
        defaultLocale: 'de',
        // seo is activated in layouts
        // https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance
        seo: false,
        vueI18n: {
          fallbackLocale: 'de',
          silentFallbackWarn: true
        },
        lazy: true,
        langDir: 'assets/locales/'
      }
    ],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    ['nuxt-canonical', { baseUrl: 'https://coronav.de' }]
  ],
  bootstrapVue: {
    icons: true, // Install the IconsPlugin (in addition to BootStrapVue plugin
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  markdownit: {
    injected: true,
    html: true,
    use: ['@/plugins/md-safe-links.js']
  },
  pwa: {
    manifest: {
      name: 'CoroNav',
      description:
        'Hier erfahren Sie, ob bei Ihnen eine Coronavirus-Infektion wahrscheinlich ist, ob ein Test empfohlen wird und warum.'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      })
    }
  },
  sitemap: {
    hostname,
    gzip: true,
    trailingSlash: true
  },
  polyfill: {
    features: [
      {
        require: 'url-polyfill',
        detect: () => 'URL' in window
      }
    ]
  }
}
