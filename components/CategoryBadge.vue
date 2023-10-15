<template>
  <div class="category-badge" :style="{ backgroundColor: props.color }">
    {{ category }}
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.category-badge {
  padding: 0.2em 1em;
  font-size: 1em;
  text-align: center;
  background-color: $clr-primary;
  color: $clr-black;
  font-family: $ff-alternative;
  font-weight: 500;
  width: fit-content;
}
</style>
