// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/greatYa.github.io/",
    head: {
      htmlAttrs: {
        lang: "RU"
      },
      title: "Харизмы",

      link: [{ rel: 'shortcut icon', href: 'favicon.ico' }],
      meta: [{ hid: 'description', name: 'description', content: 'Харизмы' }]
    }
  },
  css: ['normalize.css', 'vue-final-modal/style.css'],
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  ssr: false,
})