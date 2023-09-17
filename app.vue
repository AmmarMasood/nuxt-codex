<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
