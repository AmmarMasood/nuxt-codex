<template>
  <div>
    <NuxtLink to="/heroes"> &lt- Back </NuxtLink>
    <h2>{{ hero.name }}</h2>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
const store = useHeroStore();

const hero = ref(null);

const route = useRoute();
const router = useRouter();
hero.value = await store.getHero(route.params.id);
</script>

<style lang="scss" scoped></style>
