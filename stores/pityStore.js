import { defineStore } from 'pinia'

export const usePityStore = defineStore('pity', {
  state: () => ({
    rarePity: null,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
});
