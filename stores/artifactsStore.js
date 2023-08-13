import { defineStore } from 'pinia'

export const useArtifactsStore = defineStore('artifacts', {
  state: () => ({
    artifacts: [],
  }),
  actions: {
    async getArtifact(name) {
      if (!this.artifacts.length > 0) {
        await this.fetchArtifacts()
      }

      return this.artifacts.find((item) => {
        return item.name === name
      })
    },
    async getArtifacts() {
      if (this.artifacts.length > 0) {
        return this.artifacts
      }

      await this.fetchArtifacts()
      return this.artifacts
    },
    async fetchArtifacts() {
      const { data: artifactsList } = await useFetch('/api/artifacts')
      this.artifacts = artifactsList.value
    }
  },
});
