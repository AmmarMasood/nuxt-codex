<template>
  <div class="artifact-card" :class="rarity">
    <img
      class="artifact-card-border"
      src="~/assets/image/artifact-card-frame.png"
    />
    <ClassBanner
      v-if="props.artifact.class"
      :heroClass="props.artifact.class"
    />
    <img
      v-if="props.artifact.image !== ''"
      class="artifact-card-image"
      :src="props.artifact.image"
      :alt="`Image of the ${artifact.name} artifact`"
    />
  </div>
</template>

<script setup>
import ClassBanner from "../ClassBanner.vue";

const props = defineProps({
  artifact: {
    type: Object,
    required: true,
  },
});

const rarity = computed(() => {
  return props.artifact.rarity.toLowerCase();
});
</script>

<style lang="scss">
.artifact-card {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 15em;
  max-width: 12em;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.4s ease;

  & > img {
    height: 100%;
    width: auto;
  }

  &.mythic {
    background-image: url("~/assets/image/artifact-card-mythic.png");
  }

  &.legendary {
    background-image: url("~/assets/image/artifact-card-legendary.png");
  }

  &.epic {
    background-image: url("~/assets/image/artifact-card-epic.png");
  }

  .artifact-card-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
  }
}

.artifact-card:hover {
  transform: scale(1.1);
}
</style>
