import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/reset.scss','~/assets/main.scss'],
  devtools: { enabled: true },
  nitro: {
    routeRules: {
      '/api/**': { cors: false },
    }
  }
})
