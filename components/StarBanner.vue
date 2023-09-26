<template>
  <div class="star-banner">
    <div class="stars" v-if="maxLevel">
      <img v-for="n in 6" src="~/assets/image/star-purple.png" />
    </div>
    <div class="stars" v-else>
      <img v-for="n in yellowStars" src="~/assets/image/star-yellow.png" />
      <img v-for="n in greyStars" src="~/assets/image/star-grey.png" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rarity: {
    type: String,
    required: true,
  },
  maxLevel: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const rarities = {
  Legendary: { yellow: 5, grey: 1 },
  Epic: { yellow: 4, grey: 2 },
  Rare: { yellow: 3, grey: 3 },
  Uncommon: { yellow: 2, grey: 4 },
  Common: { yellow: 1, grey: 5 },
};

const getStars = (color) => {
  const rarity = rarities[props.rarity];
  return rarity[color];
};

const yellowStars = getStars("yellow");
const greyStars = getStars("grey");
</script>

<style lang="scss">
.star-banner {
  position: absolute;
  left: 2.4em;
  bottom: 1.6em;
  width: 100%;

  .stars {
    display: flex;

    img {
      max-height: 1.5em;
    }
  }
}
</style>
