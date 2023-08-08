<template>
  <div class="gallery">
    <div v-for="hero in sortByRarity(heroes)">
      <HeroCard :hero="hero" />
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

const sortByRarity = () => {
  return heroes.sort((a, b) => {
    const rarityComparison = rarities[a.rarity] - rarities[b.rarity];
    if (rarityComparison === 0) {
      return a.name.localeCompare(b.name);
    }
    return rarityComparison;
  });
};
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, 122px);
}
</style>
