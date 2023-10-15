<template>
  <div class="top-logo">
    <div class="logo-container">
      <img
        src="../../assets/image/logo-background.png"
        alt="site logo"
        class="logo-background"
      />
      <img src="../../assets/svg/logo.svg" class="main-logo" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.top-logo {
  position: absolute;
  top: -2.5em;
  left: 50%;
  transform: translateX(-50%);

  @include respond(tab-port) {
    display: none;
  }
}
.logo-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .logo-background {
    position: absolute;
    width: auto;
    height: auto;
    z-index: 1;
  }

  .main-logo {
    width: 12em;
    height: auto;
    z-index: 2;
    padding: 2em;
  }
}
</style>
