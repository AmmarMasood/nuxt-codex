import { defineStore } from 'pinia'

export const useGameEventsStore = defineStore('gameEvents', {
  state: () => ({
    events: [],
  }),
  actions: {
    async getEvents() {
      if (this.events.length > 0) {
        return this.events
      }

      await this.fetchEvents()
      return this.events
    },
    async fetchEvents() {
      const { data: eventsList } = await useFetch('/api/game-events')

      if (eventsList.value) {
        this.events = eventsList.value.filter((event) => {
          const today = new Date().toISOString().split('T')[0]
          return event.end >= today
        })
      }
    }
  },
});
