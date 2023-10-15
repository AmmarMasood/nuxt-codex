<template>
  <div class="pity-tracker-page container">
    <h1>Pity trackers</h1>
    <PityTracker
      pityType="rare"
      title="Rare pity tracker"
      image="https://image.wor-codex.com/rare_9ed4aa2086.png"
      :baseChanceLegendary="0.005"
      :pityBonus="0.05"
      :basePityCount="200"
      :guaranteedCount="220"
    />
    <Separator style="margin-bottom: 2em" />
    <PityTracker
      pityType="legendary"
      title="Legendary pity tracker"
      image="https://wor-codex.s3.eu-west-1.amazonaws.com/divine_a9ebe9eca6.png"
      :baseChanceLegendary="0.06"
      :pityBonus="0.02"
      :basePityCount="12"
      :guaranteedCount="59"
    />
  </div>
</template>

<script setup>
import Separator from "../../components/shared/Separator.vue";
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4.5em;
  font-family: $ff-heading;
  color: $clr-primary;
  margin-bottom: 0.5em;
  text-align: center;

  @include respond(phone) {
    font-size: 2.5em;
  }
}
.pity-tracker-page {
  margin: 2em 0 10em 0;
}
</style>
