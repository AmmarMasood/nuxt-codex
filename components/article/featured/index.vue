<template>
  <div class="article-gallery-grid container">
    <ArticleFeaturedCard category="Guides" date="17 Sep 2023" link="/" title="After all is said and done, more is done"
      background="https://picsum.photos/550/400" class="grid-col-span-2 grid-row-span-2" />
    <ArticleFeaturedCard category="Articles" date="17 Sep 2023" link="/" title="After all is said and done, more is done"
      background="https://picsum.photos/410/400" />
    <ArticleFeaturedCard category="News" date="17 Sep 2023" link="/" title="After all is said and done, more is done"
      background="https://picsum.photos/420/400" />
    <ArticleFeaturedCard category="News" date="17 Sep 2023" link="/" title="After all is said and done, more is done"
      background="https://picsum.photos/430/400" class='grid-col-span-2' />
  </div>
</template>

<style lang="scss" scoped>
.article-gallery-grid {
  margin-top: 5em;
  margin-bottom: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
  height: 35em;
}
</style>
