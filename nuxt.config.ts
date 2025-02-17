// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "@/assets/style/global.css",
    "@/assets/style/normalize.css",
    "@/assets/style/fonts.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/_mixins.scss" as *;',
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
});
