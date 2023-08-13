<template>
  <div class="artifacts-page">
    <h2>Artifacts</h2>
    <div class="artifact-gallery">
      <template v-for="artifact in filteredArtifacts">
        <NuxtLink :to="`/artifacts/${artifact.slug}`">
          <ArtifactCard :artifact="artifact" />
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useArtifactsStore } from "~/stores/artifactsStore";

const artifactStore = useArtifactsStore();
const artifacts = ref(await artifactStore.getArtifacts());

const rarities = {
  Mythic: 1,
  Legendary: 2,
  Epic: 3,
};

const filteredArtifacts = computed(() => {
  const toBeSorted = artifacts.value;
  return sortByRarity(toBeSorted);
});

const sortByRarity = (toBeSorted) => {
  return toBeSorted.sort((a, b) => {
    const rarityComparison = rarities[a.rarity] - rarities[b.rarity];
    if (rarityComparison === 0) {
      return a.name.localeCompare(b.name);
    }
    return rarityComparison;
  });
};
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
