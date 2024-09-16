// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-viewport',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@dargmuesli/nuxt-cookie-control',
    'nuxt-aos',
    'nuxt-anchorscroll',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  app: {
    rootTag: 'body',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' },
        { rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' },
      ],
    },
  },
});
