<template>
  <footer>
    <nav class="footer-menu container">
      <div class="menu-grid">
        <img src="~/assets/image/logo.png" alt="site logo" />
        <div class="grid-column">
          <header>
            Quick Links
          </header>
          <ul>
            <li>
              <NuxtLink to="/articles/news">News</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/articles/guides">Guides</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/heroes">Heroes</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/artifacts">Artifacts</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="grid-column">
          <header>
            Important Links
          </header>
          <ul>
            <li>
              <NuxtLink to="/">Terms & Conditions</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Disclaimer</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Privacy policy</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="grid-column">
          <header>
            Stay in touch
          </header>
          <p>If you have any feedback, want to report an error or just want to hang out with the community</p>
          <a href="https://discord.gg/6ae4RYSS" target="_blank">
            <button type="button">Join us on Discord</button>
          </a>
        </div>
      </div>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 2em;
  background-color: $clr-secondary;
}

.menu-grid {
  margin-top: 1em;
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.grid-column {
  margin-top: 1em;

  header {
    font-size: 1.5em;
    border-bottom: 1px solid $clr-white;
    font-family: $ff-alternative;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
  }

  li {
    margin-top: 1em;
  }

  button {
    padding: 0.5em;
    width: 100%;
    margin-top: 1em;
  }
}
</style>
