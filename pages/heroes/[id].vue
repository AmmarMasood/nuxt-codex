<template>
  <div class="hero-page container">
    <h2>{{ hero.name }}</h2>
    <div class="hero-page--top">
      <HeroCard :hero="hero" :maxLevel="maxLevel" />
      <div class="hero-detail">
        <div>
          <p>Title:</p>
          <p>{{ hero.title }}</p>
        </div>
        <div>
          <p>Description:</p>
          <p>{{ hero.description }}</p>
        </div>
        <div>
          <p>Rarity:</p>
          <p>{{ hero.rarity }}</p>
        </div>
        <div>
          <p>Class:</p>
          <p>{{ hero.class }}</p>
        </div>
        <div>
          <p>{{ factionLabel }}:</p>
          <p>{{ factions }}</p>
        </div>
        <div>
          <p>Tags:</p>
          <p>{{ hero.tags.join(", ") }}</p>
        </div>
      </div>
    </div>
    <Separator />
    <Checkbox v-model="maxLevel" label="Max Level" style="margin-bottom: 2em" />
    <div class="hero-detail">
      <div>
        <p>Attack range:</p>
        <img :src="attackRange" alt="Image showing the heros attack range" />
      </div>
    </div>

    <div class="hero-page--bottom">
      <div>
        <h3>Basic Attributes</h3>
        <div class="hero-detail">
          <div>
            <p>HP:</p>
            <p>{{ basicAttributes.healthPoints }}</p>
          </div>
          <div>
            <p>ATK:</p>
            <p>{{ basicAttributes.attack }}</p>
          </div>
          <div>
            <p>DEF:</p>
            <p>{{ basicAttributes.defense }}</p>
          </div>
          <div>
            <p>M. Res.:</p>
            <p>{{ basicAttributes.magicResistance }}</p>
          </div>
          <div>
            <p>Cost:</p>
            <p>{{ basicAttributes.cost }}</p>
          </div>
          <div>
            <p>Block Value:</p>
            <p>{{ basicAttributes.blockValue }}</p>
          </div>
          <div>
            <p>Revival Time:</p>
            <p>{{ basicAttributes.revivalTime }}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Promoted Attributes</h3>
        <div class="hero-detail">
          <div>
            <p>ATK Interval::</p>
            <p>{{ hero.promotedAttributes[0].attackInterval }}</p>
          </div>
          <div>
            <p>ATK Spd.:</p>
            <p>{{ hero.promotedAttributes[0].attackSpeed }}</p>
          </div>
          <div>
            <p>Crit. Rate:</p>
            <p>{{ hero.promotedAttributes[0].criticalRate }}</p>
          </div>
          <div>
            <p>Crit. DMG:</p>
            <p>{{ hero.promotedAttributes[0].criticalDamage }}</p>
          </div>
          <div>
            <p>Healing Effect:</p>
            <p>{{ hero.promotedAttributes[0].healingEffect }}</p>
          </div>
          <div>
            <p>Rage Regen:</p>
            <p>{{ hero.promotedAttributes[0].rageRegen }}</p>
          </div>
          <div>
            <p>Rage Regen (Auto):</p>
            <p>{{ hero.promotedAttributes[0].rageRegenAuto }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeroStore } from "~/stores/heroStore";
import HeroCard from "../../components/heroes/HeroCard.vue";
import Checkbox from "../../components/shared/Checkbox.vue";
import Separator from "../../components/shared/Separator.vue";

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

  return hero.value.baseAttackRange;
});

const factionLabel = computed(() => {
  if (hero.value.factions.length > 1) {
    return "Factions";
  }

  return "Faction";
});

const factions = computed(() => {
  const mapped = hero.value.factions.map((faction) => {
    return faction.shortName;
  });

  return mapped.join(", ");
});
</script>

<style lang="scss" scoped>
.hero-page {
  padding: 2em 0 5em 0;

  h2 {
    font-family: $ff-heading;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 3.25em;
    color: $clr-white;
    text-align: center;

    @include respond(phone) {
      font-size: 2.25em;
    }
  }

  h3 {
    font-family: $ff-heading;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 2.25em;
    color: $clr-primary;

    @include respond(phone) {
      font-size: 2em;
    }
  }

  &--top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 1em;

    & > div:nth-child(2) {
      max-width: 650px;
    }
  }

  &--bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 2em;
  }
}

.hero-detail {
  & > div {
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: center;
    margin-bottom: 0.65em;

    & > p {
      font-size: 1.35em;
      font-family: $ff-alternative;

      @include respond(phone) {
        font-size: 1em;
      }

      &:first-child {
        font-weight: 600;
        color: $clr-primary;
      }
    }
  }
}
</style>
