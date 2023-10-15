<template>
  <div class="breadcrumb-container">
    <div class="breadcrumb">
      <ul>
        <li v-for="(item, index) in breadcrumb" :key="index">
          <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
          <span v-if="index < breadcrumb.length - 1"> /</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  breadcrumb: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  width: 100%;
  padding: 1em 0;
}
.breadcrumb {
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
      text-transform: uppercase;
      font-size: 0.875em;
      color: $clr-white;
      opacity: 0.8;
      font-family: $ff-alternative-2;

      @include respond(phone) {
        font-size: 0.675em;
      }

      span {
        margin: 0 0.5em;
      }
    }
  }
}
</style>
