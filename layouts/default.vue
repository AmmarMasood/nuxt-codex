<template>
  <div class="page">
    <header>
      <NuxtLink to="/"><h1>Watcher of Realms Codex</h1></NuxtLink>
    </header>
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

    a {
      color: #e2c687;
      text-decoration: none;
    }
  }

  .page-content {
    display: grid;
    grid-template-columns: 1fr 104.8rem 1fr;
  }
}
</style>
