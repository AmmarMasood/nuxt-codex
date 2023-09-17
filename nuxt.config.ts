import { resolve } from 'path'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-svgo'],
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
  },
  svgo: {
    autoImportPath: '~/assets/svg/'
  }
})
