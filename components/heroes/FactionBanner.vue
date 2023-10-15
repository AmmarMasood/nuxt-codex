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
  top: 0em;
  left: -0.7em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  &.lord {
    top: 1em;
  }

  img {
    max-height: 3em;

    &.lord-frame {
      position: absolute;
      min-height: 4.5em;
      min-width: 3.5em;
      top: -1.3em;
      left: -0.25em;
    }
  }
}
</style>
