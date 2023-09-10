import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/style/reset.scss'],
  devtools: { enabled: true },
  serverMiddleware: [
    { path: '/api', handler: '~/middleware/block-external.js' }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/style/main.scss";',
        },
      },
    },
  }
})
