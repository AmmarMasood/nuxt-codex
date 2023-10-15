<template>
  <div class="numberfield-container">
    <input
      type="number"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      :min="min"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const { placeholder, modelValue, min } = defineProps({
  placeholder: {
    type: String,
    default: "",
    required: true,
  },
  modelValue: {
    type: Number,
    default: 0,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
    required: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  const newValue = event.target.value;
  emit("update:modelValue", newValue);
};
</script>
<style lang="scss" scoped>
.numberfield-container {
  background: $clr-white;
  display: flex;
  align-items: center;
  padding: 0.3em 0.5em;
  border-radius: 0.2em;

  & > img {
    margin-right: 0.25em;
  }

  & > input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1em;
    font-family: $ff-alternative-2;
  }
}
</style>
