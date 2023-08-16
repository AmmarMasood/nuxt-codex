<template>
  <div class="text-section">
    {{ props.content }}
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.text-section {
  font-size: 1.5rem;
}
</style>
