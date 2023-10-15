<template>
  <div class="article-gallery-grid container">
    <ArticleFeaturedCard
      category="Guides"
      categoryColor="#08F"
      date="17 Sep 2023"
      link="/"
      author="Craig Bator"
      title="After all is said and done, more is done"
      background="https://picsum.photos/550/400"
      class="article-gallery-card--large"
    />
    <div class="article-gallery-grid--inner">
      <div>
        <ArticleFeaturedCard
          category="Articles"
          categoryColor="#997C00"
          date="17 Sep 2023"
          author="Craig Bator"
          link="/"
          title="After all is said and done, more is done"
          background="https://picsum.photos/410/400"
        />
        <ArticleFeaturedCard
          category="Guides"
          date="17 Sep 2023"
          categoryColor="#08F"
          author="Craig Bator"
          link="/"
          title="After all is said and done, more is done"
          background="https://picsum.photos/420/400"
        />
      </div>
      <ArticleFeaturedCard
        category="News"
        categoryColor="#49CFE8"
        date="17 Sep 2023"
        author="Craig Bator"
        link="/"
        title="After all is said and done, more is done"
        background="https://picsum.photos/430/400"
        class="article-gallery-card--medium"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-gallery-grid {
  margin-top: 5em;
  margin-bottom: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
  min-height: 40em;

  &--inner {
    display: grid;
    gap: 1em;
    grid-template-rows: 1fr 1fr;

    & > div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1em;
    }
  }
}
</style>
