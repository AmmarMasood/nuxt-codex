<template>
  <div class="hero-card" :class="rarity">
    <img class="hero-card-border" :src="border" />
    <img class="hero-card-image" :src="props.hero.image" :alt="`Image of ${hero.name}`" />
    <FactionBanner :factions="props.hero.factions" :isLord="props.hero.isLord" />
    <ClassBanner :heroClass="props.hero.class" />
    <!-- <div class="level" v-if="!maxLevel">lvl. 1</div>
    <div class="level max" v-else>lvl. Max</div>
    <StarBanner :rarity="props.hero.rarity" :maxLevel="props.maxLevel" /> -->
  </div>
</template>

<script setup>
const props = defineProps({
  hero: {
    type: Object,
    required: true,
  },
  maxLevel: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const rarity = computed(() => {
  return props.hero.rarity.toLowerCase();
});

const border = computed(() => {
  const images = {
    Legendary: "/image/border-gold.png",
    Epic: "/image/border-purple.png",
    Rare: "/image/border-blue.png",
    Uncommon: "/image/border-green.png",
    Common: "/image/border-grey.png",
  };

  return images[props.hero.rarity];
});
</script>

<style lang="scss" scoped>
.hero-card {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 9em;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.4s ease;

  &.legendary {
    background-image: url("~/assets/image/card-gold.png");
  }

  &.epic {
    background-image: url("~/assets/image/card-purple.png");
  }

  &.rare {
    background-image: url("~/assets/image/card-blue.png");
  }

  &.uncommon {
    background-image: url("~/assets/image/card-green.png");
  }

  &.common {
    background-image: url("~/assets/image/card-grey.png");
  }

  .hero-card-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
  }

  .level {
    color: white;
    position: absolute;
    font-size: 2em;
    bottom: 3em;

    &.max {
      color: lightgreen;
    }
  }
}

.hero-card:hover {
  transform: scale(1.1);
}
</style>
