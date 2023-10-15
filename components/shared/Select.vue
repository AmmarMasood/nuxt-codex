<template>
  <div
    class="select-container"
    :class="{ 'select-container-inside': labelInside }"
  >
    <label v-if="label">{{ label }}:</label>
    <select :value="modelValue" @change="updateSelect">
      <option value="" selected>{{ topValue }}</option>
      <option :value="value.name" v-for="value in values">
        {{ value.name }}
      </option>
    </select>
    <span></span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const { label, modelValue, value, topValue } = defineProps({
  label: {
    type: String,
    default: "",
    required: false,
  },
  values: {
    type: Array,
    default: "",
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  labelInside: {
    type: Boolean,
    default: false,
  },
  topValue: {
    type: String,
    default: "All",
    required: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateSelect = (event) => {
  const newValue = event.target.value;
  emit("update:modelValue", newValue);
};
</script>
<style lang="scss" scoped>
.select-container {
  display: flex;
  align-items: center;
  border-radius: 0.2em;
  position: relative;

  & > span {
    height: 1.5em;
    width: 2em;
    margin-right: 10px;
    position: absolute;
    right: 0;
    background: url("../../assets/svg/dropdown-1.svg") no-repeat;
  }

  & > label {
    margin-left: 1em;
    color: $clr-black;
    font-weight: 600;
    font-size: 1em;
  }

  & > select {
    accent-color: $clr-primary;
    width: 100%;
    font-size: 1em;
    padding: 0.5em 1em;
    border: none;
    outline: none;
    appearance: none;
  }
}

.select-container-inside {
  background: $clr-white;
  padding: 0.25em;

  & > span {
    height: 1.5em;
    width: 2em;
    margin-right: 10px;
    background: url("../../assets/svg/dropdown-1.svg") no-repeat;
  }
}
</style>
