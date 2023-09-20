<template>
  <div class="pity-tracker-container">
    <header class="pity-tracker-header">
      <h2>{{ title }}</h2>
    </header>
    <div class="pity-tracker-grid">
      <label>Current legendary chance</label>
      <ProgressBar :completed="currentLegendaryChanceProgress" :label="currentLegendaryChance * 100 + '%'" />
      <label>Pity count starts in</label>
      <ProgressBar :completed="pityCountProgress" :label="pityCountStart + ' ' + ' pulls'" />
      <label>Guaranteed legendary in</label>
      <ProgressBar :completed="guaranteedCountProgress" :label="`${guaranteedCount} pulls`" />
      <label>Current count</label>
      <input type="number" v-model="currentCount" />
    </div>

    <header class="pity-tracker-header">
      <h2>Hero tracker</h2>
    </header>
    <div class="hero-tracker-container">
      <label>Got hero</label>
      <select id="heroes" v-model="trackerHero">
        <option value="" selected>Select hero...</option>
        <option :value="hero.slug" v-for="hero in heroes">
          {{ hero.name }}
        </option>
      </select>
      <label for="trackerCount">At pull</label>
      <input type="number" min="0" v-model="trackerCount" />
      <button type="button" @click="addHero">Add</button>
      <div class="hero-tracker-list">
        <ul>
          <li v-for="(tracked, index) in heroTracker">
            Pulled {{ tracked.hero }} at pull number {{ tracked.count }}
            <button type="button" @click="remove(index)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
import { usePityStore } from "~/stores/pityStore";

const heroStore = useHeroStore();
const pityStore = usePityStore();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  baseChanceLegendary: {
    type: Number,
    required: true,
  },
  guaranteedCount: {
    type: Number,
    required: true,
  },
  pityBonus: {
    type: Number,
    required: true,
  },
  basePityCount: {
    type: Number,
    required: true,
  },
  pityType: {
    type: String,
    required: true,
  },
});

const heroes = ref(await heroStore.getLegendaryHeroes());
const currentCount = ref(0);
const trackerHero = ref("");
const trackerCount = ref(0);
const heroTracker = ref([]);

const pityStores = {
  legendary: pityStore.legendary,
  rare: pityStore.rare,
};

onMounted(() => {
  if (pityStores[props.pityType]) {
    const store = pityStores[props.pityType];
    heroTracker.value = store.tracker;
    trackerCount.value = store.currentCount;
    currentCount.value = trackerCount.value;
  }
});

const pityCountProgress = computed(() => {
  const count = (resetCount.value / props.basePityCount) * 100

  if (count > 100) {
    return 100
  }

  return count
})

const guaranteedCountProgress = computed(() => {
  const count = (resetCount.value / props.guaranteedCount) * 100;

  if (count > 100) {
    return 100
  }

  return count
})

const currentLegendaryChanceProgress = computed(() => {
  const count = currentLegendaryChance.value * 100

  if (count < 1) {
    return 0
  }

  return count
})

const pityCountStart = computed(() => {
  const count = props.basePityCount - resetCount.value;

  if (count < 0) {
    return 0;
  }

  return count > props.basePityCount ? props.basePityCount : count;
});

const guaranteedCount = computed(() => {
  const count = props.guaranteedCount - resetCount.value;

  if (count < 0) {
    return 0;
  }

  if (count > props.guaranteedCount) {
    return props.guaranteedCount;
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
  if (resetCount.value > props.basePityCount) {
    const bonus = props.pityBonus * (resetCount.value - props.basePityCount);
    const chance = (props.baseChanceLegendary + bonus).toFixed(2);
    return chance > 1 ? 1 : chance;
  }

  return props.baseChanceLegendary;
});

const remove = (index) => {
  if (index > -1) {
    heroTracker.value.splice(index, 1);
    pityStore[props.pityType].tracker = heroTracker.value;
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

  pityStore[props.pityType] = {
    tracker: heroTracker.value,
    currentCount: currentCount.value,
  };
};
</script>

<style lang="scss" scoped>
.pity-tracker-container {
  .pity-tracker-header {
    display: flex;
    font-size: 1.5em;
    font-family: $ff-heading;
    color: $clr-primary;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  .pity-tracker-grid {
    max-width: 30em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  .hero-tracker-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    gap: 1em;

    .hero-tracker-list {
      grid-column: 3;
      grid-row: 1;
      background-color: $clr-primary;
    }

    input {
      grid-column: 2 / 2;
    }

    label {
      grid-column: 1 / 1;
    }

    button {
      grid-column: 2 / 2;
      display: inline-block;
      max-width: 5.25em;
      padding: 0.5em;
    }
  }
}
</style>
