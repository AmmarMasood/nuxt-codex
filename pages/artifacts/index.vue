<template>
  <div class="gallery-page-heading">
    <p>Home/Artifacts</p>
    <h1>Artifacts</h1>
  </div>
  <div class="gallery-page container">
    <div class="gallery-filter">
      <SearchField
        :placeholder="`Search artifact name..`"
        v-model="searchTerm"
        class="gallery-filter--search"
      />
      <div class="gallery-filter--selectors">
        <Select
          class="gallery-filter--selectors-select"
          label="Faction"
          :values="factions"
          v-model="factionFilter"
          :labelInside="true"
        />
        <Select
          class="gallery-filter--selectors-select"
          label="Rarity"
          :values="Object.keys(rarities).map((rarity) => ({ name: rarity }))"
          v-model="rarityFilter"
          :labelInside="true"
        />
      </div>
    </div>
    <div class="gallery">
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
import { useFactionStore } from "~/stores/factionStore";

import ArtifactCard from "../../components/artifacts/ArtifactCard.vue";
import SearchField from "../../components/shared/SearchField.vue";
import Select from "../../components/shared/Select.vue";

const artifactStore = useArtifactsStore();
const factionStore = useFactionStore();

const artifacts = ref(await artifactStore.getArtifacts());
const factions = ref(await factionStore.getFactions());
const rarities = {
  Mythic: 1,
  Legendary: 2,
  Epic: 3,
};

const searchTerm = ref("");
const factionFilter = ref("");
const rarityFilter = ref("");

const filteredArtifacts = computed(() => {
  let filteredArtifacts = artifacts.value;

  if (factionFilter.value.length > 0) {
    filteredArtifacts = filteredArtifacts.filter((artifact) => {
      return artifact.factions.some((faction) => {
        return factionFilter.value.includes(faction.name);
      });
    });
  }

  if (rarityFilter.value.length > 0) {
    filteredArtifacts = filteredArtifacts.filter((artifact) =>
      rarityFilter.value.toLowerCase().includes(artifact.rarity.toLowerCase())
    );
  }

  if (searchTerm.value.length > 0) {
    filteredArtifacts = filteredArtifacts.filter((artifact) =>
      artifact.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }

  return sortByRarity(filteredArtifacts);
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
// styles are being used same as heroes page
</style>
