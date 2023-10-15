<template>
  <div class="pity-tracker-container">
    <div class="pity-tracker-container--header">
      <h2>{{ title }}</h2>
      <img :src="props.image" alt="legendary" />
    </div>
    <div class="pity-tracker-container--top">
      <div>
        <label>Current legendary chance</label>
        <ProgressBar :completed="currentLegendaryChanceProgress" />
        <label>{{ currentLegendaryChance * 100 + "%" }}</label>
      </div>
      <div>
        <label>Pity count starts in</label>
        <ProgressBar :completed="pityCountProgress" />
        <label>{{ pityCountStart + " " + " Pulls" }}</label>
      </div>
      <div>
        <label>Guaranteed legendary in</label>
        <ProgressBar :completed="guaranteedCountProgress" />
        <label>{{ `${guaranteedCount} Pulls` }}</label>
      </div>
      <div>
        <label>Current count</label>
        <NumberField v-model="currentCount" placeholder="" />
        <label>{{ currentCount }}</label>
      </div>
    </div>

    <div class="pity-tracker-container--header" style="margin-top: 2em">
      <h2>Hero tracker</h2>
    </div>

    <div class="pity-tracker-container--bottom">
      <div>
        <div>
          <label>Got hero</label>
          <Select
            :values="heroes"
            v-model="trackerHero"
            topValue="Select hero..."
          />
        </div>
        <div>
          <label>At pull</label>
          <NumberField v-model="trackerCount" placeholder="" />
        </div>
        <div>
          <label></label>
          <button
            type="button"
            @click="addHero"
            style="padding: 0.5em 2em; width: fit-content"
          >
            Add
          </button>
        </div>
      </div>
      <ul class="hero-tracker--list">
        <li v-for="(tracked, index) in heroTracker">
          <p>Pulled {{ tracked.hero }} at pull number {{ tracked.count }}</p>
          <img
            src="../assets/svg/cross.svg"
            alt="cross-icon"
            @click="remove(index)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
import { usePityStore } from "~/stores/pityStore";
import ProgressBar from "./shared/ProgressBar.vue";
import NumberField from "./shared/NumberField.vue";
import Select from "./shared/Select.vue";

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
  const count = (resetCount.value / props.basePityCount) * 100;

  if (count > 100) {
    return 100;
  }

  return count;
});

const guaranteedCountProgress = computed(() => {
  const count = (resetCount.value / props.guaranteedCount) * 100;

  if (count > 100) {
    return 100;
  }

  return count;
});

const currentLegendaryChanceProgress = computed(() => {
  const count = currentLegendaryChance.value * 100;

  if (count < 1) {
    return 0;
  }

  return count;
});

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
  &--header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;

    & > h2 {
      color: $clr-primary;
      font-family: $ff-heading;
      text-transform: uppercase;
      font-size: 2em;
    }
  }

  &--top {
    margin-top: 1em;

    & > div {
      display: grid;
      grid-template-columns: 200px 300px 100px;
      align-items: center;
      margin-bottom: 1.5em;
      grid-gap: 1em;

      @include respond(tab-port) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      }

      label {
        color: $clr-white;
        font-size: 1.25em;
        font-family: $ff-alternative;

        &:nth-child(3) {
          text-align: right;
        }
      }
    }
  }

  &--bottom {
    margin-top: 1em;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2em;

    @include respond(tab-land) {
      flex-wrap: wrap;
    }

    & > div > div {
      display: grid;
      grid-template-columns: 200px 300px;
      align-items: center;
      margin-bottom: 1.5em;
      grid-gap: 1em;

      @include respond(tab-port) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      }

      label {
        color: $clr-white;
        font-size: 1.25em;
        font-family: $ff-alternative;

        &:nth-child(3) {
          text-align: right;
        }
      }
    }
  }
}

.hero-tracker {
  &--list {
    width: 100%;
    & > li {
      background-color: $clr-primary;
      padding: 0.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 0.25em;
      margin-bottom: 0.5em;
      & > p {
        color: $clr-black;
        font-family: $ff-alternative;
        font-size: 1em;
      }
    }
  }
}
</style>
