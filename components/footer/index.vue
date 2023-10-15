<template>
  <footer>
    <nav class="footer-menu container">
      <div class="menu-grid">
        <div class="site-info">
          <img src="~/assets/image/logo.png" alt="site logo" />
          <!-- <ul>
            <li>
              <img src="../../assets/image/facebook-icon.svg" alt="facebook" />
            </li>
            <li>
              <img src="../../assets/image/twitter-icon.svg" alt="facebook" />
            </li>
            <li>
              <img src="../../assets/image/twitch-icon.svg" alt="facebook" />
            </li>
            <li>
              <img src="../../assets/image/youtube-icon.svg" alt="facebook" />
            </li>
          </ul> -->
        </div>
        <div class="grid-column">
          <header>Quick Links</header>
          <ul>
            <li>
              <NuxtLink to="/">News</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Guides</NuxtLink>
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
          <header>Important Links</header>
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
          <header>Stay in touch</header>
          <p>
            If you have any feedback, want to report an error or just want to
            hang out with the community
          </p>
          <a href="https://discord.gg/6ae4RYSS" target="_blank">
            <button type="button">Join us on Discord</button>
          </a>
          <!-- <TextField
            @change="(value) => (email = value)"
            placeholder="Your email address"
          />
          <button type="button" class="button-subscribe">Subscribe</button> -->
        </div>
      </div>
    </nav>
    <div class="footer-bottom">
      <p>© Copyright wor-codex.com 2023. All rights reserved</p>
    </div>
  </footer>
</template>

<script setup>
import TextField from "../TextField.vue";

const email = ref("");
</script>

<style lang="scss" scoped>
footer {
  background-color: $clr-secondary;
}
.footer-menu {
  padding: 2em;
}

.menu-grid {
  margin-top: 1em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

  &:last-of-type {
    header {
      position: relative;
      &:after {
        content: "";
        width: 100%;
        height: 1px;
        left: 0;
        bottom: -0.04em;
        position: absolute;
        z-index: 1;
        background: linear-gradient(to right, $clr-primary 20%, $clr-white 50%);
      }
    }
  }
}
.button-subscribe {
  font-family: $ff-alternative;
  font-weight: 400;
  border-radius: 0;
  font-size: 1.2em;
}
.footer-bottom {
  background-color: $clr-black;
  text-align: center;
  padding: 0.8em;
  font-family: $ff-alternative;
  font-size: 1em;
}

.site-info {
  & > ul {
    display: flex;
    align-items: center;
    width: 100%;

    & > li {
      margin-top: 1em;
      background-color: $clr-secondary-dark;
      padding: 0.5em;
      margin: 0 0.5em;
      cursor: pointer;
    }

    & > li > img {
      width: 1em;
      height: 1em;
    }
  }
}
</style>
