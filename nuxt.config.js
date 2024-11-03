export default {
  head: {
    title: 'hsa-games',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: []
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/postcss8', 
    '@nuxtjs/tailwindcss', 
  ],

  modules: [],

  build: {},

  target: 'static',
  generate: {
    dir: 'dist',
  },
  
  env: {
    API_URL: 'https://api.hsa-games.com' 
  },

  server: {
    port: process.env.PORT || 3000, 
    host: '0.0.0.0' 
  },
}
