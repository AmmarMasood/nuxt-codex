<template>
  <div class="artifact-page">
    <NuxtLink to="/artifacts"> &lt- Back </NuxtLink>
    <h2>{{ artifact.name }}</h2>
    <img :src="artifact.image" :alt="`Image of ${artifact.name}`" />
    <p><strong>Rarity:</strong> {{ artifact.rarity }}</p>
    <p v-if="artifact.hero">
      <strong>Exclusive to:</strong> {{ artifact.hero }}
    </p>
    <p v-if="artifact.class">
      <strong>Exclusive to:</strong> {{ artifact.class }}
    </p>
    <p v-for="level in artifact.levels">
      <strong>{{ level.name }}:</strong> {{ level.description }}
    </p>
  </div>
</template>

<script setup>
import { useArtifactsStore } from "~/stores/artifactsStore";
const store = useArtifactsStore();

const artifact = ref(null);

const route = useRoute();
const router = useRouter();
artifact.value = await store.getArtifact(route.params.id);
</script>

<style lang="scss">
.artifact-page {
  font-size: 1.5rem;

  strong {
    font-weight: 600;
  }
}
</style>
