<template>
  <div>
    <h2>Page not found</h2>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
