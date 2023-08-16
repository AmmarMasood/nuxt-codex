<template>
  <div>
    <h2>Hero builder</h2>
    <select id="heroes" v-model="buildHero">
      <option value="" selected>Select hero...</option>
      <option v-for="hero in heroes" :value="hero.slug">{{ hero.name }}</option>
    </select>
    <HeroBuilderHero v-if="selectedHero" :hero="selectedHero" />
    <hr v-if="sections.length > 0" />
    <div v-for="section in sections">
      <HeroBuilderTextSection
        v-if="section.type === 'text'"
        :content="section.value"
      />
    </div>
    <hr />
    <div v-if="selectedHero">
      <select id="sectionType" v-model="sectionType">
        <option value="">Choose section type...</option>
        <option value="text">Text section</option>
      </select>
      <HeroBuilderTextField
        v-if="sectionType === 'text'"
        @change="(value) => (section = value)"
      />
      <button type="button" @click="addSection">Add section</button>
    </div>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";

const store = useHeroStore();
const heroes = ref(await store.getHeroes());
const buildHero = ref("");
const sections = ref([]);
const sectionType = ref("");
const section = ref(null);

const selectedHero = computed(() => {
  if (buildHero === "") {
    return;
  }

  return heroes.value.find((hero) => {
    return hero.slug === buildHero.value;
  });
});

const addSection = () => {
  sections.value.push(section.value);
  sectionType.value = "";
  section.value = null;
};
</script>

<style lang="scss" scoped></style>
