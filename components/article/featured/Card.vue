<template>
  <article
    class="article-gallery-card"
    :style="{ backgroundImage: `url(${props.background})` }"
  >
    <ArticleCategoryBadge
      :category="props.category"
      :color="props.categoryColor"
      v-if="props.category"
    />

    <div class="article-content">
      <p>{{ props.author }}- {{ props.date }}</p>
      <h2>
        <NuxtLink :to="props.link">{{ props.title }}</NuxtLink>
      </h2>
    </div>
  </article>
</template>

<script setup>
import ArticleCategoryBadge from "../../CategoryBadge.vue";

const props = defineProps({
  background: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  categoryColor: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});
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
    max-width: 80%;

    p {
      font-size: 0.75em;
      color: $clr-white;
      margin-bottom: 0.5em;
      font-family: $ff-alternative;
    }
  }

  h2 {
    font-family: $ff-alternative;
    font-weight: 500;
    font-size: 1em;
    font-weight: 500;
    text-transform: capitalize;
  }
}

.article-gallery-card {
  &--large {
    h2 {
      font-size: 2.5em;

      @include respond(tab-port) {
        font-size: 1em;
      }
    }
  }

  &--medium {
    h2 {
      font-size: 1.65em;

      @include respond(tab-port) {
        font-size: 1em;
      }
    }
  }
}
</style>
