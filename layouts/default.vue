<template>
  <div class="page">
    <header>Watcher of Realms Codex</header>
    <div class="page-content">
      <div></div>
      <slot />
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  header {
    padding: 0 3rem 0 3rem;
    display: flex;
    align-items: center;
    min-height: 7rem;
    background-color: #2e2c2a;
    color: #e2c687;
    margin-bottom: 3rem;
  }

  .page-content {
    // width: 100%;
    // height: 100%;
    display: grid;
    grid-template-columns: 1fr 104.8rem 1fr;
  }
}
</style>
