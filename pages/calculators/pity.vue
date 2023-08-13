<template>
  <div>
    <h2>Pity tracker</h2>
    <ul>
      <li>
        Legendary base chance:
        {{
          eventActive
            ? baseChanceLegendary * 2 * 100
            : baseChanceLegendary * 100
        }}%
      </li>
      <li>
        Current Legendary chance:
        {{ Math.round(currentLegendaryChance * 100) }}%
      </li>
      <li>Guaranteed legendary in: {{ guaranteedCount }} pulls</li>
    </ul>
    <label for="event">2x event</label>
    <input type="checkbox" id="event" v-model="eventActive" /><br />
    <label for="currentRareCount">Current count</label>
    <input type="number" v-model="currentCount" min="0" /><br />
    <br />
    <h3>Hero tracker</h3>
    <label for="heroes">Got hero</label>
    <select id="heroes" v-model="trackerHero">
      <option value="" selected>Select hero...</option>
      <option :value="hero.slug" v-for="hero in heroes">
        {{ hero.name }}
      </option>
    </select>
    <label for="trackerCount">At pull</label>
    <input type="number" min="0" v-model="trackerCount" />
    <button type="button" @click="addHero">Add</button>
    <ul>
      <li v-for="tracked in heroTracker">
        {{ tracked.hero }} at pull {{ tracked.count }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";

const heroStore = useHeroStore();

const baseChanceLegendary = 0.01;
const pityBonus = 0.05;

const heroes = ref(await heroStore.getLegendaryHeroes());
const eventActive = ref(false);
const currentCount = ref(0);
const trackerHero = ref("");
const trackerCount = ref(0);
const heroTracker = ref([]);

const guaranteedCount = computed(() => {
  const count = 220 - resetCount.value;
  return count < 0 ? 0 : count;
});

const resetCount = computed(() => {
  if (heroTracker.value.length > 0) {
    return currentCount.value - heroTracker.value[0].count;
  }

  return currentCount.value;
});

const currentLegendaryChance = computed(() => {
  if (resetCount.value > 200) {
    const bonus = pityBonus * (resetCount.value - 200);
    const chance = (baseChanceLegendary + bonus).toFixed(2);
    return chance > 1 ? 1 : chance;
  }

  return baseChanceLegendary;
});

const addHero = () => {
  if (trackerCount.value <= 0) {
    return;
  }

  if (trackerHero.value === "") {
    return;
  }

  if (currentCount.value < trackerCount.value) {
    currentCount.value = trackerCount.value;
  }

  heroTracker.value.unshift({
    hero: trackerHero.value,
    count: trackerCount.value,
  });

  trackerHero.value = "";
  trackerCount.value = currentCount.value;
};
</script>

<style lang="scss">
.ul {
  font-size: 1.5rem;
}
</style>
