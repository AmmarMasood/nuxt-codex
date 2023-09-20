<template>
  <div class="container">
    <h1>Pity trackers</h1>
    <PityTracker
      pityType="rare"
      title="Rare pity tracker"
      image="https://image.wor-codex.com/rare_9ed4aa2086.png"
      :baseChanceLegendary="0.005"
      :pityBonus="0.05"
      :basePityCount="200"
      :guaranteedCount="220"
    /><br />
    <br />
    <hr />
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

<script setup></script>

<style lang="scss">
h1 {
  font-size: 4.5em;
  font-family: $ff-heading;
  color: $clr-primary;
}
</style>
