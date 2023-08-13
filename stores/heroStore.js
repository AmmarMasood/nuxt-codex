import { defineStore } from 'pinia'

export const useHeroStore = defineStore('heroes', {
  state: () => ({
    heroes: [],
  }),
  actions: {
    async getHero(id) {
      if (!this.heroes.length > 0) {
        await this.fetchHeroes()
      }

      return this.heroes.find((item) => {
        return item.slug === id
      })
    },
    async getHeroes() {
      if (this.heroes.length > 0) {
        return this.heroes
      }

      await this.fetchHeroes()
      return this.heroes
    },
    async getLegendaryHeroes() {
      if (!this.heroes.length > 0) {
        await this.fetchHeroes()
      }

      const filtered = this.heroes.filter((hero) => {
        return hero.rarity === 'Legendary'
      })

      return filtered.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    },
    async fetchHeroes() {
      const { data: heroesList } = await useFetch('/api/heroes')
      this.heroes = heroesList.value
    }
  },
});
