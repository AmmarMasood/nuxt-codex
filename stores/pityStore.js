import { defineStore } from 'pinia'

export const usePityStore = defineStore('pity', {
  state: () => ({
    rarePity: null,
  }),
  actions: {

  },
  persist: {
    storage: persistedState.localStorage,
  },
});
