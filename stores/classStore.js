import { defineStore } from 'pinia'

export const useClassStore = defineStore('classes', {
  state: () => ({
    classes: [],
  }),
  actions: {
    async getClass(name) {
      if (!this.classes.length > 0) {
        await this.fetchClasses()
      }

      return this.classes.find((item) => {
        return item.name === name
      })
    },
    async getClasses() {
      if (this.classes.length > 0) {
        return this.classes
      }

      await this.fetchClasses()
      return this.classes
    },
    async fetchClasses() {
      const { data: classList } = await useFetch('/api/classes')
      this.classes = classList.value
    }
  },
});
