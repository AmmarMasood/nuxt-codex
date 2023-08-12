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
    async fetchHeroes() {
      const { data: heroesList } = await useFetch('/api/heroes')
      this.heroes = heroesList.value
    }
  },
});
