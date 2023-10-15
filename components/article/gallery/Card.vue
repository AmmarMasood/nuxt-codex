<template>
  <div class="article-card">
    <img :src="thumbnail" alt="article thumbnail" />
    <div class="article-info">
      <span>{{ author }} - </span> <span>{{ publishedAt }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ excerpt }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  excerpt: String,
  thumbnail: String,
  publishedAt: String,
  author: String,
});
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  width: 24em;

  span {
    font-size: 0.625em;
    color: $clr-gray-dark;

    &:first-of-type {
      margin-right: 0.3em;
      color: $clr-white;
    }
  }

  h3 {
    font-family: $ff-alternative;
    font-size: 1.25em;
    margin-bottom: 0.5em;
  }

  img {
    width: auto;
    height: 18em;
    aspect-ratio: 16 / 9;
    margin-bottom: 1.5em;
  }

  p {
    color: $clr-gray-dark;
    font-size: 0.875em;
    line-height: 1.3em;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @include respond(tab-port) {
      max-width: 100%;
    }
  }
}

.article-info {
  display: flex;
  align-items: center;
}
</style>
