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
    type: Number,
    required: true,
  },
  end: {
    type: Number,
    required: true,
  },
});

const countdownText = ref("");

const updateCountdown = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  if (currentTime < props.start) {
    const timeUntilStart = props.start - currentTime;
    countdownText.value = `Event starts in ${formatTime(timeUntilStart)}`;
  } else if (currentTime < props.end) {
    const timeUntilEnd = props.end - currentTime;
    countdownText.value = `Event ends in ${formatTime(timeUntilEnd)}`;
  } else {
    countdownText.value = "Event has ended";
  }
};

const formatTime = (timeInSeconds) => {
  const days = Math.floor(timeInSeconds / 86400);
  const hours = Math.floor((timeInSeconds % 86400) / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
};

onMounted(() => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
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
