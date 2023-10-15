<template>
  <div class="share-container">
    <div>
      <div class="share-container--date" style="margin-bottom: 1em">
        <img src="../../../assets/svg/calendar-icon.svg" alt="calendar" />
        <p>{{ format(props.date, "MMM dd, yyyy") }}</p>
      </div>
      <div class="share-container--date">
        <img src="../../../assets/svg/clock-icon.svg" alt="clock" />
        <p>{{ format(props.date, "p") }}</p>
      </div>
    </div>

    <div class="share-container--inner">
      <p>Share us on:</p>
      <div>
        <img src="../../../assets/image/facebook-icon.svg" alt="facebook" />
        <img src="../../../assets/image/twitter-icon.svg" alt="twitter" />
        <img src="../../../assets/image/youtube-icon.svg" alt="instagram" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { format } from "date-fns";

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.share-container {
  background-color: $clr-secondary-dark;
  padding: 2.5em 2.25em;
  border: 1px solid $clr-primary;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &--date {
    display: flex;
    align-items: center;
    gap: 1em;
    color: $clr-white;
    font-size: 1.05em;
  }

  &--inner {
    display: flex;
    align-items: center;
    gap: 1em;
    color: $clr-white;
    font-size: 1.25em;
    font-family: $ff-heading;

    @include respond(phone) {
      margin-top: 3em;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 1em;

      & > img {
        cursor: pointer;
        width: 1.85em;
        height: 1.85em;
        padding: 0.5em;
        border: 1px solid $clr-primary;
      }
    }
  }
}
</style>
