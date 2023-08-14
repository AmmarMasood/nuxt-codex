<template>
  <div>
    <h2>Start</h2>
    <ul>
      <li>
        <NuxtLink to="/heroes">Heroes</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/artifacts">Artifacts</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/calculators">Calculators</NuxtLink>
      </li>
    </ul>
    <EventCountdown
      v-for="event in events"
      :image="event.image"
      :title="event.name"
      :description="event.description"
      :start="event.start"
      :end="event.end"
    />
  </div>
</template>
<script setup>
import { useGameEventsStore } from "~/stores/gameEventsStore";
const store = useGameEventsStore();

const events = ref(await store.getEvents());
</script>

<style lang="scss">
li {
  font-size: 2rem;
}
</style>
