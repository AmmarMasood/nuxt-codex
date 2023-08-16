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
      /><br />
      <button type="button" @click="addSection">Add section</button><br />
      <button type="button" @click="generateShareLink">Share</button>
      <input type="text" :value="shareLink" />
    </div>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";

const store = useHeroStore();
const heroes = ref(await store.getHeroes());
const buildHero = ref("");
const sections = ref([]);
const sectionType = ref("");
const section = ref(null);
const shareLink = ref("");

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

onMounted(() => {
  if (location.hash.startsWith("#!build=")) {
    const buildData = location.hash.replace("#!build=", "");
    try {
      const decompressedBuild = decompressFromEncodedURIComponent(buildData);
      const decodedBuild = JSON.parse(decompressedBuild);
      buildHero.value = decodedBuild.hero;
      sections.value = decodedBuild.sections;
    } catch (error) {
      console.error("Error decoding build:", error);
    }
  }
});

const generateShareLink = () => {
  const serializedBuild = JSON.stringify({
    hero: buildHero.value,
    sections: sections.value,
  });
  const compressedBuild = compressToEncodedURIComponent(serializedBuild);

  location.hash = `!build=${compressedBuild}`;

  shareLink.value = location.href;
};
</script>

<style lang="scss" scoped></style>
