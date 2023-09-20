<template>
  <div class="article-card">
    <img :src="thumbnail" alt="article thumbnail" />
    <span>{{ publishedAt }}</span>
    <h3>{{ title }}</h3>
    <p>{{ excerpt }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  excerpt: String,
  thumbnail: String,
  publishedAt: String
})
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.625em;
  }

  h3 {
    font-family: $ff-alternative;
    font-size: 1.25em;
    margin-bottom: 1em;
  }

  img {
    max-height: 16em;
    aspect-ratio: 16 / 9;
    margin-bottom: 1.5em;
  }

  p {
    color: #ffffff99;
    font-size: 0.875em;
  }
}
</style>
