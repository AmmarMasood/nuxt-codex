<template>
  <div class="gallery-page">
    <h1>Heroes</h1>
    <div class="gallery-filter">
      <input
        type="text"
        placeholder="Search hero name.."
        v-model="searchTerm"
      />
      <input type="checkbox" v-model="maxLevel" id="maxLevel" />
      <label for="maxLevel">Max Level</label>
      <select id="faction" v-model="factionFilter">
        <option value="" selected>Select faction...</option>
        <option :value="faction.name" v-for="faction in factions">
          {{ faction.name }}
        </option>
      </select>
      <select id="class" v-model="classFilter">
        <option value="" selected>Select class...</option>
        <option :value="heroClass.name" v-for="heroClass in heroClasses">
          {{ heroClass.name }}
        </option>
      </select>
    </div>
    <div class="gallery">
      <div v-for="hero in filteredHeroes">
        <NuxtLink :to="`/heroes/${hero.slug}`">
          <HeroCard :hero="hero" :maxLevel="maxLevel" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
const heroStore = useHeroStore();

const rarities = {
  Legendary: 1,
  Epic: 2,
  Rare: 3,
  Uncommon: 4,
  Common: 5,
};

const heroes = ref(await heroStore.getHeroes());
const { data: factions } = await useFetch("/api/factions");
const { data: heroClasses } = await useFetch("/api/classes");

const searchTerm = ref("");
const maxLevel = ref(false);
const factionFilter = ref("");
const classFilter = ref("");

const filteredHeroes = computed(() => {
  let sortedHeroes = heroes.value;

  if (searchTerm.value.length < 1) {
    sortedHeroes = sortByRarity(sortedHeroes);
  }

  if (factionFilter.value.length > 0) {
    sortedHeroes = sortedHeroes.filter((hero) => {
      return hero.factions.some((faction) => {
        return factionFilter.value.includes(faction.name);
      });
    });
  }

  if (classFilter.value !== "") {
    sortedHeroes = sortedHeroes.filter((hero) => {
      return hero.class === classFilter.value;
    });
  }

  if (searchTerm.value.length > 0) {
    sortedHeroes = sortedHeroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }

  return sortedHeroes;
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
.gallery-page {
  width: 100%;

  .gallery {
    margin-top: 3rem;
    display: grid;
    grid-gap: 3em;
    grid-template-columns: repeat(auto-fit, 12.2rem);

    p {
      font-size: 1.5rem;
    }
  }
}
</style>
