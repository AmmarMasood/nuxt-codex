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
    </div>
    <div class="gallery">
      <div v-for="hero in filteredHeroes">
        <HeroCard :hero="hero" :maxLevel="maxLevel" />
      </div>
    </div>
  </div>
</template>

<script setup>
const rarities = {
  Legendary: 1,
  Epic: 2,
  Rare: 3,
  Uncommon: 4,
  Common: 5,
};

const heroes = await $fetch("/api/heroes");
const searchTerm = ref("");
const maxLevel = ref(false);

const filteredHeroes = computed(() => {
  if (searchTerm.value.length < 1) {
    return sortByRarity(heroes);
  }

  return heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
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
  }
}
</style>
