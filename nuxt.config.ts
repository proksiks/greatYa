// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/greatYa.github.io/",
    head: {
      link: [{ rel: 'shortcut icon', href: 'favicon.ico' }]
    }
  },
  css: ['normalize.css', 'vue-final-modal/style.css'],
  modules: [
    '@nuxt/eslint',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-swiper'
  ],
  swiper: {
    modules: ['effect-fade'],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  ssr: false,
  typescript: {
    typeCheck: true
  },
  //devtools: { enabled: true }
})