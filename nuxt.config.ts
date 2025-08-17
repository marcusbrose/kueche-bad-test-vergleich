// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxt/fonts', 
    '@nuxt/icon', 
    '@nuxt/image',
  ],
})