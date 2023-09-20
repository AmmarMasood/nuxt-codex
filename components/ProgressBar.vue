<template>
  <div class="progress-bar-container">
    <div :style="fillerStyles">
      <span class="label">{{ label }}</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  completed: {
    type: Number,
    default: 0
  },
})


const fillerStyles = computed(() => {
  return {
    height: '100%',
    width: `${props.completed}%`,
    backgroundColor: '#F8A219',
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  };
});
</script>

<style lang="scss" scoped>
.progress-bar-container {
  height: 1.25em;
  width: 100%;
  background-color: $clr-white;
  border-radius: 3.125em;
}

.label {
  color: $clr-black;
  font-weight: bold;
  padding: 1em;
  vertical-align: top;
  line-height: 1.35;
  white-space: nowrap;
}
</style>
