<template>
  <div>
    <textarea @input="emitEvent" v-model="text" />
  </div>
</template>

<script setup>
const text = ref("");
const emit = defineEmits(["change"]);
const emitEvent = () => {
  emit("change", { type: "text", value: text.value });
};
</script>

<style lang="scss" scoped></style>
