<template>
  <div class="countdown-component">
    <img v-if="props.image" :src="props.image" />
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
    <br />
    <p>{{ countdownText }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
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
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

const currentTime = new Date();

const eventStartTime = new Date(props.start);
eventStartTime.setHours(10, 0, 0, 0);

const tomorrowAt10AM = new Date(currentTime);
tomorrowAt10AM.setDate(tomorrowAt10AM.getDate() + 1);
tomorrowAt10AM.setHours(10, 0, 0, 0);

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date();

  if (now < eventStartTime) {
    const timeDiff = eventStartTime - now;
    updateCountdownValues(timeDiff);
  } else if (now < tomorrowAt10AM) {
    const timeDiff = tomorrowAt10AM - now;
    updateCountdownValues(timeDiff);
  } else {
    clearInterval(countdownInterval);
  }
}

function updateCountdownValues(timeDiff) {
  countdown.value.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  countdown.value.hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  countdown.value.minutes = Math.floor(
    (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
  );
  countdown.value.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
}

const countdownText = computed(() => {
  if (currentTime < eventStartTime) {
    return `${countdown.value.days} days ${countdown.value.hours} hours ${countdown.value.minutes} minutes ${countdown.value.seconds} seconds until the event starts`;
  } else if (currentTime < tomorrowAt10AM) {
    return `${countdown.value.days} days ${countdown.value.hours} hours ${countdown.value.minutes} minutes ${countdown.value.seconds} seconds until the event ends`;
  }
});

onMounted(() => {
  updateCountdown();
});

onBeforeUnmount(() => {
  clearInterval(countdownInterval);
});
</script>

<style lang="scss">
.countdown-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
</style>
