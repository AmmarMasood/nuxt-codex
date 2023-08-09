<template>
  <div class="class-banner">
    <img :src="image" />
  </div>
</template>

<script setup>
const props = defineProps({
  heroClass: {
    type: String,
    required: true,
  },
});

const image = computed(() => {
  return `/image/${props.heroClass.toLowerCase()}.png`;
});
</script>

<style lang="scss" scoped>
.class-banner {
  position: absolute;
  top: 0.2rem;
  right: 0.3rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 1rem;
  border-top-right-radius: 1rem;

  img {
    max-height: 3.5rem;
  }
}
</style>
