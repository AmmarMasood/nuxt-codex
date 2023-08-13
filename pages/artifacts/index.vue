<template>
  <div class="artifacts-page">
    <h2>Artifacts</h2>
    <div class="artifact-gallery">
      <ArtifactCard v-for="artifact in artifacts" :artifact="artifact" />
    </div>
  </div>
</template>

<script setup>
import { useArtifactsStore } from "~/stores/artifactsStore";

const artifactStore = useArtifactsStore();
const artifacts = ref(await artifactStore.getArtifacts());
</script>

<style lang="scss">
.artifacts-page {
  width: 100%;

  .artifact-gallery {
    margin-top: 3rem;
    display: grid;
    grid-gap: 3em;
    grid-template-columns: repeat(auto-fit, 12.2rem);
  }
}
</style>
