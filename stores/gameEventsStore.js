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
        const todayDateTime = new Date();

        // Adjust the current time to 10:00 am if it's before 10:00 am
        if (todayDateTime.getHours() < 10) {
          todayDateTime.setHours(10, 0, 0, 0);
        }

        const today = Math.floor(todayDateTime.getTime() / 1000);

        this.events = eventsList.value.filter((event) => {
          return event.end >= today;
        });
      }
    }
  }
});
