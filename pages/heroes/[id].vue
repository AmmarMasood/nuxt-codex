<template>
  <div class="hero-page">
    <NuxtLink to="/heroes"> &lt- Back </NuxtLink>
    <h2>{{ hero.name }}</h2>
    <img :src="hero.image" :alt="`Image of ${hero.name}`" />
    <p><strong>Title:</strong> {{ hero.title }}</p>
    <p><strong>Description:</strong> {{ hero.description }}</p>
    <p><strong>Rarity:</strong> {{ hero.rarity }}</p>
    <p><strong>Class:</strong> {{ hero.class }}</p>
    <p><strong>Tags:</strong> {{ hero.tags.join(", ") }}</p>
    <br />
    <br />
    <label for="max-level">Max Level</label>
    <input type="checkbox" id="max-level" v-model="maxLevel" />
    <p>
      <strong>Attack range:</strong>
      <img :src="attackRange" alt="Image showing the heros attack range" />
    </p>
    <h3>Basic Attributes</h3>
    <p><strong>HP:</strong> {{ basicAttributes.healthPoints }}</p>
    <p><strong>ATK:</strong> {{ basicAttributes.attack }}</p>
    <p><strong>DEF:</strong> {{ basicAttributes.defense }}</p>
    <p><strong>M. Res.:</strong> {{ basicAttributes.magicResistance }}</p>
    <p><strong>Cost:</strong> {{ basicAttributes.cost }}</p>
    <p><strong>Block Value:</strong> {{ basicAttributes.blockValue }}</p>
    <p><strong>Revival Time:</strong> {{ basicAttributes.revivalTime }}</p>
    <br />
    <h3>Promoted Attributes</h3>
    <p>
      <strong>ATK Interval:</strong>
      {{ hero.promotedAttributes[0].attackInterval }}
    </p>
    <p>
      <strong>ATK Spd.:</strong> {{ hero.promotedAttributes[0].attackSpeed }}
    </p>
    <p>
      <strong>Crit. Rate:</strong> {{ hero.promotedAttributes[0].criticalRate }}
    </p>
    <p>
      <strong>Crit. DMG:</strong>
      {{ hero.promotedAttributes[0].criticalDamage }}
    </p>
    <p>
      <strong>Healing Effect:</strong>
      {{ hero.promotedAttributes[0].healingEffect }}
    </p>
    <p>
      <strong>Rage Regen:</strong> {{ hero.promotedAttributes[0].rageRegen }}
    </p>
    <p>
      <strong>Rage Regen (Auto):</strong>
      {{ hero.promotedAttributes[0].rageRegenAuto }}
    </p>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
const store = useHeroStore();

const hero = ref(null);
const maxLevel = ref(false);

const route = useRoute();
const router = useRouter();
hero.value = await store.getHero(route.params.id);

const basicAttributes = computed(() => {
  if (maxLevel.value) {
    return hero.value.basicAttributes[1];
  }

  return hero.value.basicAttributes[0];
});

const attackRange = computed(() => {
  if (maxLevel.value) {
    return hero.value.maxAttackRange;
  }
  console.log(hero.value.maxAttackRange);

  return hero.value.baseAttackRange;
});
</script>

<style lang="scss" scoped>
.hero-page {
  font-size: 1.6rem;

  strong {
    font-weight: 600;
  }
}
</style>
