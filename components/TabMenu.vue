<template>
  <div class="tab-menu-container">
    <div class="tab-menu">
      <button
        type="button"
        class="tab"
        @click="onSelect(tab.label)"
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ active: value === tab.label }"
      >
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["change"]);
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  value: {
    type: String,
  },
});

const onSelect = (tab) => {
  emit("change", tab);
};
</script>

<style lang="scss" scoped>
.tab-menu {
  display: flex;
  justify-content: space-between;
  margin-top: 0.55em;

  .tab {
    background: none;
    color: $clr-white;
    border-bottom: 1px solid $clr-white;
    border-radius: 0;
    padding: 0 0 0.5em 0;
    width: 100%;
    text-align: left;
    font-family: $ff-alternative;
    transition: border 0.3s ease;

    text-align: center;

    &:first-of-type {
      text-align: left;
    }
    &:last-of-type {
      text-align: right;
    }

    &.active {
      color: $clr-primary;
      border-bottom: 1px solid $clr-primary;
    }
  }
}
</style>
