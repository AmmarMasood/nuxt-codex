<template>
  <!-- <div class="main-menu">
    <header class="header border">
      <div class="container">
        Join Us
        <ul role="list" class="social-menu">
          <a href="https://discord.gg/44PnNQpkVF" target="_blank">
            <img src="~/assets/svg/discord.svg" alt="discord" />
          </a>
        </ul>
      </div>
    </header>
    <header class="header">
      <div class="container">
        <ul role="list">
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </div>
    </header>
  </div> -->

  <MainMenu />
  <slot />
  <footer></footer>
</template>

<style lang="scss">
.header {
  background-color: $clr-secondary;
  width: 100%;
  font-family: $ff-heading;
  font-weight: 400;
  padding: 1rem 0 1rem 0;
  text-align: bottom;

  ul {
    display: flex;
    gap: 2.5rem;

    li {
      font-size: 1.25rem;
      text-transform: uppercase;
    }
  }

  &.border {
    border-bottom: 1px solid #2a2c35;
  }

  .container {
    display: flex;
  }

  .social-menu {
    margin-left: 1.875rem;

    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
</style>
