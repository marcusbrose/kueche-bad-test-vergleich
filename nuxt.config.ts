// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      storyblokDeliveryVersion: process.env.STORYBLOK_DELIVERY_VERSION || 'published',
    },
  },
  ssr: true,
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxt/fonts', 
    '@nuxt/icon', 
    '@nuxt/image',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
        apiOptions: {
          region: 'eu',
        },
      },
    ],
  ],
})