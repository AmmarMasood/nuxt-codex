<template>
  <div>
    <img :src="props.hero.image" />
    <h3>{{ props.hero.name }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  hero: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
