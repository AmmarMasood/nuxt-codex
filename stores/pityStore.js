import { defineStore } from 'pinia'

export const usePityStore = defineStore('pity', {
  state: () => ({
    rare: null,
    legendary: null
  }),
  persist: {
    storage: persistedState.localStorage,
  },
});
