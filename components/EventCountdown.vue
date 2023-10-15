<template>
  <div class="countdown-component">
    <div class="image-container">
      <img src="../assets/svg/obsidion.svg" alt="event image" />
    </div>
    <div class="event-content">
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>

      <div class="countdown-container">
        <strong>{{ countdown.text }}</strong>
        <div class="number-boxes">
          <div class="number-box">{{ countdown.days }} Days</div>
          <div class="number-box">{{ countdown.hours }} Hours</div>
          <div class="number-box">{{ countdown.minutes }} Min</div>
          <div class="number-box">{{ countdown.seconds }} Sec</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  localTime: {
    type: String,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start: {
    type: Number,
    required: true,
  },
  end: {
    type: Number,
    required: true,
  },
});

const countdown = ref({
  text: "",
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const updateCountdown = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  let remainingTime = 0;
  if (currentTime < props.start) {
    remainingTime = props.start - currentTime;
    countdown.value.text = "Event starts in:";
  } else if (currentTime < props.end) {
    remainingTime = props.end - currentTime;
    countdown.value.text = "Event ends in:";
  }

  if (remainingTime > 0) {
    countdown.value.days = Math.floor(remainingTime / 86400);
    countdown.value.hours = Math.floor((remainingTime % 86400) / 3600);
    countdown.value.minutes = Math.floor((remainingTime % 3600) / 60);
    countdown.value.seconds = remainingTime % 60;
  } else {
    countdown.value.days = 0;
    countdown.value.hours = 0;
    countdown.value.minutes = 0;
    countdown.value.seconds = 0;
  }
};

onMounted(() => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
</script>

<style lang="scss" scoped>
.countdown-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $clr-secondary-dark;
  border: 3px solid $clr-primary;
  border-radius: 0.25em;
  position: relative;
  padding: 2em;
  width: 100%;
  padding-top: 3.5em;

  @include respond(tab-port) {
    margin-bottom: 3em;
  }

  .event-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      font-size: 1.5em;
      font-weight: 400;
      font-family: $ff-heading;
      text-transform: uppercase;
    }

    p {
      font-size: 1em;
      font-family: $ff-alternative;
    }

    .countdown-container {
      margin-top: 1em;

      strong {
        font-weight: 600;
      }

      .number-boxes {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        margin-top: 1em;

        @include respond(tab-port) {
          justify-content: center;
        }

        .number-box {
          padding: 0.75em;
          background-color: $clr-black;
          border: 1px solid $clr-primary;
          font-size: 1em;
          width: 5.5em;
          text-align: center;
          font-weight: 600;
          font-family: $ff-heading;
          text-transform: uppercase;
        }
      }
    }
  }
}

.image-container {
  background-color: $clr-secondary-dark;
  border: 3px solid $clr-primary;
  border-radius: 100%;
  padding: 0.5em;

  top: -3em;
  position: absolute;

  & > img {
    height: 4em;
    width: 4em;
  }
}
</style>
