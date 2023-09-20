<template>
  <article
    class="article-gallery-card"
    :style="{ backgroundImage: `url(${props.background})` }"
  >
    <ArticleCategoryBadge :category="props.category" v-if="props.category" />
      <div class="article-content">
      <p>{{props.date}}</p>
      <h2><NuxtLink :to="props.link">{{props.title}}</NuxtLink></h2>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.article-gallery-card {
  background-image: --background;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .article-content {
    padding: 1em;
    max-width: 70%;
    background: linear-gradient(
      0deg,
      hsl(0, 0%, 12%, 0.6),
      hsl(0, 0%, 12%, 0.6),
    )
  }

  h2 {
    font-family: $ff-alternative;
    font-weight: 500;
  }

  &.grid-col-span-2 {
    grid-column: span 2;

    h2 {
      font-size: 1.5em;
    }
  }

  &.grid-row-span-2 {
    grid-row: span 2;

    h2 {
      font-size: 2.25em;
    }
  }
}
</style>
