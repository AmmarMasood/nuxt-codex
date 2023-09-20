<template>
  <div class="article-list">
    <div class="article-list-header" v-if="header">
      <h3>{{ header }}</h3>
    </div>
    <TabMenu :tabs="tabs" @change="changeTab" :value="selectedTab" />
    <TransitionGroup name="fade" tag="ul">
      <li v-for="(article, index) in filteredArticles" :key="`article-${index}`">
        <NuxtLink :to="article.link" class="article-item">
          <img :src="article.thumbnail" alt="article thumbnail" />
          <div class="article-text">
            <span>{{ article.publishedAt }}</span>
            <p>{{ article.title }}</p>
          </div>
        </NuxtLink>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
const props = defineProps({
  header: {
    type: String,
    required: false
  },
  articles: {
    type: Array,
    required: true
  }
})

const selectedTab = ref(props.articles[0].heading)

const changeTab = (e) => {
  selectedTab.value = e
}

const tabs = computed(() => {
  return props.articles.map((item) => {
    return { label: item.heading }
  })
})

const filteredArticles = computed(() => {
  const list = props.articles.find((item) => {
    return item.heading === selectedTab.value
  })

  return list.articles
})
</script>

<style lang="scss" scoped>
.article-list {
  display: flex;
  flex-direction: column;
  max-width: 23em;

  .article-list-header {
    align-self: center;
    color: $clr-primary;
    font-size: 1.5em;
    font-family: $ff-heading;
    margin-bottom: 1em;
  }

  .article-item {
    display: flex;
    margin-top: 1em;


    img {
      max-height: 4.375em;
    }

    .article-text {
      margin-left: 1em;

      span {
        font-size: 0.625em;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
