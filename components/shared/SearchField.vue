<template>
  <div class="searchfield-container">
    <img src="../../assets/svg/search-icon.svg" alt="search" />
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateSearchTerm"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const { placeholder, modelValue } = defineProps({
  placeholder: {
    type: String,
    default: "",
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateSearchTerm = (event) => {
  const newValue = event.target.value;
  emit("update:modelValue", newValue);
};
</script>
<style lang="scss" scoped>
.searchfield-container {
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
