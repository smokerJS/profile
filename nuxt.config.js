import pkg from './package'
const path = require('path');

export default {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon-smoker.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
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
  css: [
     '~assets/style/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~assets/style/variables.scss'
    ]
  },
  
  /*
  ** Build configuration
  */
  build: {
    transpile: [],
    plugins: [],
    loaders: {
      stylus: {
        import: []
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const alias = config.resolve.alias = config.resolve.alias || {};
      alias['@'] = path.join(__dirname,'components');
      alias['@images'] = path.join(__dirname,'assets/images');
    }
  }
}
