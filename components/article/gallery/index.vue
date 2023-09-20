<template>
  <div class="article-gallery-container">
    <div class="article-gallery-header">
      <h2>Latest Articles</h2>
    </div>
    <div class="article-gallery">
      <NuxtLink :to="article.link" v-for="article in articles" class="child">
        <ArticleGalleryCard :title="article.title" :excerpt="article.excerpt" :thumbnail="article.thumbnail"
          :publishedAt="article.publishedAt" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  articles: Array
})
</script>

<style lang="scss" scoped>
.article-gallery-container {
  width: 100%;
}

.article-gallery-header {
  border-bottom: 1px solid #393939;
  margin-bottom: 1.5em;

  h2 {
    font-family: $ff-alternative;
    font-size: 1.5em;
    color: $clr-primary;
    margin-bottom: 0.2em;
  }
}

.article-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
}

.child {
  flex-basis: 45%;
}
</style>
