// https://nuxt.com/docs/api/configuration/nuxt-config
import en from "./lang/en";
import fa from "./lang/fa";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', "@nuxt/fonts", "@nuxtjs/i18n", "nuxt-viewport",'@morev/vue-transitions/nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/colors.scss" as *;',
        },
      },
    },
  },
  css: ["@/assets/main.scss"],
  i18n: {
    locales: [
      { code: "fa", dir: "rtl", file: "fa.js", iso: "fa-IR" },
      { code: "en", dir: "ltr", file: "en.js", iso: "en-US" },
    ],
    langDir: "./lang",
    defaultLocale: "en",
  },
  app: {
    head: {
      htmlAttrs: {
        dir: "ltr",
      },
      title: "Black Magic",
    },
  },
})