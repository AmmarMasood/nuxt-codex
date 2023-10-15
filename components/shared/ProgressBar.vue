<template>
  <div class="progress-bar-container">
    <div :style="innerBarStyle">
      <span
        class="progress-bar-container--shadow"
        v-if="props.completed > 1"
      ></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  completed: {
    type: Number,
    default: 0,
  },
});

const innerBarStyle = computed(() => {
  return {
    height: "100%",
    width: `${props.completed}%`,
    backgroundColor: "#F8A219",
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
    position: "relative",
  };
});
</script>

<style lang="scss" scoped>
.progress-bar-container {
  height: 1em;
  width: 100%;
  background-color: $clr-white;
  border-radius: 3.125em;

  &--shadow {
    height: 1em;
    display: inline-block;
    position: absolute;
    right: 2px;
    box-shadow: 0px -2px 20px 10px rgba(248, 162, 25, 0.71);
    -webkit-box-shadow: 0px -2px 20px 10px rgba(248, 162, 25, 0.71);
    border-radius: 50%;
    -moz-box-shadow: 0px -2px 20px 10px rgba(248, 162, 25, 0.71);
  }
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
