import { defineStore } from 'pinia'

export const useFactionStore = defineStore('factions', {
  state: () => ({
    factions: [],
  }),
  actions: {
    async getFaction(name) {
      if (!this.factions.length > 0) {
        await this.fetchFactions()
      }

      return this.factions.find((item) => {
        return item.name === name
      })
    },
    async getFactions() {
      if (this.factions.length > 0) {
        return this.factions
      }

      await this.fetchFactions()
      return this.factions
    },
    async fetchFactions() {
      const { data: factionsList } = await useFetch('/api/factions')
      this.factions = factionsList.value
    }
  },
});
