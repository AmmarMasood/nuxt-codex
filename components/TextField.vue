<template>
  <div class="inner-container">
    <label v-if="props.label">{{ props.label }}</label>
    <input
      @input="emitEvent"
      v-model="text"
      :placeholder="props.placeholder"
      :class="props.class"
    />
  </div>
</template>

<script setup>
const text = ref("");
const emit = defineEmits(["change"]);
const emitEvent = () => {
  emit("change", { type: "text", value: text.value });
};
const props = defineProps(["placeholder", "label", "class"]);
</script>

<style lang="scss" scoped>
.inner-container {
  width: 100%;

  label {
    display: block;
    font-size: 0.8em;
    margin-bottom: 0.5em;
  }

  input {
    width: 100%;
    padding: 0.8em;
    text-align: center;
    margin-top: 1em;
    border: 1px solid transparent;
    border-radius: 0;

    &:focus {
      outline: none;
      border: 1px solid $clr-primary;
    }

    &::placeholder {
      color: $clr-gray;
    }
  }
}
</style>
