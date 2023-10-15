<template>
  <div class="article-gallery-container">
    <div class="article-gallery-header">
      <h2>Latest Articles</h2>
    </div>
    <div class="article-gallery">
      <NuxtLink :to="article.link" v-for="article in articles" class="child">
        <ArticleGalleryCard
          :title="article.title"
          :excerpt="article.excerpt"
          :thumbnail="article.thumbnail"
          :publishedAt="article.publishedAt"
          :author="article.author"
        />
      </NuxtLink>
    </div>
    <button type="button">LOAD MORE ARTICLES</button>
  </div>
</template>

<script setup>
const props = defineProps({
  articles: Array,
});
</script>

<style lang="scss" scoped>
.article-gallery-container {
  width: 100%;

  & > button {
    width: 100%;
    margin-top: 3em;
    padding: 0.85em 0;
  }
}

.article-gallery-header {
  border-bottom: 1px solid $clr-secondary-darker;
  margin-bottom: 1.5em;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    left: 0;
    bottom: -0.04em;
    position: absolute;
    z-index: 1;
    background: linear-gradient(
      to right,
      $clr-primary 5%,
      $clr-secondary-darker 50%
    );
  }

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
  align-items: flex-start;
  justify-content: space-between;
}

.child {
  // flex-basis: 45%;
}
</style>
