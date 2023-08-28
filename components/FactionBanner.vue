<template>
  <div class="faction-banner" :class="{ lord: isLord }">
    <img class="lord-frame" v-if="isLord" src="~/assets/image/lord-frame.png" />
    <img v-for="faction in factions" :src="getImage(faction.name)" />
  </div>
</template>

<script setup>
const props = defineProps({
  factions: {
    type: Object,
    required: true,
  },
  isLord: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const images = {
  "the chaos dominion": "/image/the-chaos-dominion.png",
  "the cursed cult": "/image/the-cursed-cult.png",
  "the esoteria order": "/image/the-esoteria-order.png",
  "the infernal blast": "/image/the-infernal-blast.png",
  "the nightmare council": "/image/the-nightmare-council.png",
  "the north throne": "/image/the-north-throne.png",
  "the star piercers": "/image/the-star-piercers.png",
  "the unnamable": "/image/the-unnamable.png",
  "the watchguard": "/image/the-watchguard.png",
};

const getImage = (name) => {
  return images[name.toLowerCase()];
};
</script>

<style lang="scss">
.faction-banner {
  position: absolute;
  top: 0rem;
  left: -0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.lord {
    top: 2rem;
  }

  img {
    max-height: 4rem;

    &.lord-frame {
      position: absolute;
      min-height: 6.5rem;
      top: -2rem;
      left: -0.3rem;
    }
  }
}
</style>
