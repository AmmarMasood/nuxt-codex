<template>
  <div>
    <h2>Pity tracker</h2>
    <ul>
      <li>
        Current Legendary chance:
        {{ Math.round(currentLegendaryChance * 100) }}%
      </li>
      <li>Pity count starts in: {{ pityCountStart }} pulls</li>
      <li>Guaranteed legendary in: {{ guaranteedCount }} pulls</li>
    </ul>
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
      <li v-for="(tracked, index) in heroTracker">
        Pulled {{ tracked.hero }} at pull number {{ tracked.count }}
        <button type="button" @click="remove(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
import { usePityStore } from "~/stores/pityStore";

const heroStore = useHeroStore();
const pityStore = usePityStore();

const baseChanceLegendary = 0.01;
const pityBonus = 0.05;

const heroes = ref(await heroStore.getLegendaryHeroes());
const eventActive = ref(false);
const currentCount = ref(0);
const trackerHero = ref("");
const trackerCount = ref(0);
const heroTracker = ref([]);

onMounted(() => {
  if (pityStore.rarePity) {
    heroTracker.value = pityStore.rarePity.tracker;
    trackerCount.value = pityStore.rarePity.currentCount;
    currentCount.value = trackerCount.value;
  }
});

const pityCountStart = computed(() => {
  const count = 200 - resetCount.value;

  if (count < 0) {
    return 0;
  }

  return count > 200 ? 200 : count;
});

const guaranteedCount = computed(() => {
  const count = 220 - resetCount.value;

  if (count < 0) {
    return 0;
  }

  if (count > 220) {
    return 220;
  }

  return count;
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

const remove = (index) => {
  if (index > -1) {
    heroTracker.value.splice(index, 1);
    pityStore.rarePity.tracker = heroTracker.value;
  }
};

const addHero = () => {
  if (trackerCount.value <= 0) {
    return;
  }

  if (trackerHero.value === "") {
    return;
  }

  if (heroTracker.value && trackerCount.value < heroTracker.value[0]?.count) {
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

  pityStore.rarePity = {
    tracker: heroTracker.value,
    currentCount: currentCount.value,
  };
};
</script>

<style lang="scss">
.ul {
  font-size: 1.5rem;
}
</style>
