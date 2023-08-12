import { defineStore } from 'pinia'

export const useFactionStore = defineStore('faction', () => {
  const factions = ref([])

  async function getFaction(name) {
    return factions.value.find((item) => {
      return item.name === name
    })
  }

  return { factions, getFaction }
})
