// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/greatYa.github.io/",
    head: {
      htmlAttrs: {
        lang: "RU"
      },
      title: "Харизмы",
      //script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
      link: [{ rel: 'shortcut icon', href: 'favicon.ico' }],
      meta: [{ hid: 'description', name: 'description', content: 'Харизмы' }]
    }
  },
  builder: 'vite',
  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
  },
  css: ['normalize.css', 'vue-final-modal/style.css'],
  //devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ['gsap'],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  ssr: false,
  //typescript: {
  //  typeCheck: true
  //},
})