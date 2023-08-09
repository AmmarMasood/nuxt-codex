import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/reset.scss','~/assets/main.scss'],
  devtools: { enabled: true }
})
