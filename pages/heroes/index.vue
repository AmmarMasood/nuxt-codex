<template>
  <div class="gallery-page-heading">
    <p>Home/Heroes</p>
    <h1>Heroes</h1>
  </div>
  <div class="gallery-page container">
    <div class="gallery-filter">
      <SearchField
        :placeholder="`Search hero name..`"
        v-model="searchTerm"
        class="gallery-filter--search"
      />
      <div class="gallery-filter--selectors">
        <Checkbox v-model="maxLevel" label="Max Level" />
        <Select
          class="gallery-filter--selectors-select"
          label="Faction"
          :values="factions"
          v-model="factionFilter"
          :labelInside="true"
        />
        <Select
          class="gallery-filter--selectors-select"
          label="Class"
          :values="heroClasses"
          v-model="classFilter"
          :labelInside="true"
        />
      </div>
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
import { useFactionStore } from "~/stores/factionStore";
import { useClassStore } from "~/stores/classStore";
import SearchField from "../../components/shared/SearchField.vue";
import Checkbox from "../../components/shared/Checkbox.vue";
import HeroCard from "../../components/heroes/HeroCard.vue";
import Select from "../../components/shared/Select.vue";

const heroStore = useHeroStore();
const factionStore = useFactionStore();
const classStore = useClassStore();

const rarities = {
  Legendary: 1,
  Epic: 2,
  Rare: 3,
  Uncommon: 4,
  Common: 5,
};

const heroes = ref(await heroStore.getHeroes());
const factions = ref(await factionStore.getFactions());
const heroClasses = ref(await classStore.getClasses());

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
  .gallery {
    margin-top: 5rem;
    display: grid;
    grid-gap: 3.5em;
    grid-template-columns: repeat(auto-fit, minmax(9.5em, 1fr));
    justify-content: center;
    padding-bottom: 3rem;

    p {
      font-size: 1.5rem;
    }
  }

  &-heading {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background: linear-gradient(180deg, #f8a219 0%, #efd598 100%);
    padding: 2.5rem 0;

    & > h1 {
      font-size: 3rem;
      text-transform: uppercase;
      font-family: $ff-heading;
      color: $clr-black;
      margin: 0;
    }
    & > p {
      font-size: 1rem;
      color: $clr-black;
      font-family: $ff-alternative;
    }
  }
}
.gallery-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--search {
    width: 250px;
  }

  &--selectors {
    display: flex;
    align-items: center;
    gap: 1em;

    @include respond(tab-land) {
      margin-top: 2em;
      flex-wrap: wrap;
    }

    &-select {
      width: 250px;
    }
  }
  @include respond(tab-land) {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
