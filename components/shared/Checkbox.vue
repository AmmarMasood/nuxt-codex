<template>
  <div class="checkbox-container">
    <input type="checkbox" :checked="modelValue" @change="updateCheckbox" />
    <label for="checkbox">{{ label }}</label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const { label, modelValue } = defineProps({
  label: {
    type: String,
    default: "",
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateCheckbox = (event) => {
  const newValue = event.target.checked;
  emit("update:modelValue", newValue);
};
</script>
<style lang="scss" scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  border-radius: 0.2em;

  & > label {
    margin-left: 0.5em;
  }

  & > input {
    height: 1em;
    width: 1em;
    accent-color: $clr-primary;
    color: $clr-white;
  }
}
</style>
