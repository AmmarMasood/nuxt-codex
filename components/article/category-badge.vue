<template>
  <div class="category-badge" :class="color">{{ category }}</div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.category-badge {
  padding: 0.5em;
  font-size: 1em;
  max-width: 6em;
  text-align: center;
  background-color: $clr-primary;
  color: $clr-black;
  font-family: $ff-alternative;
  font-weight: 500;

}
</style>
