<template>
  <header>
    <nav class="main-menu container">
      <CodexLogo />
      <div class="main-menu--top">
        <div class="main-menu--top-first">
          <!-- <p>Follow Us</p>
          <span
            ><img
              src="../../assets/image/facebook-icon.svg"
              alt="facebook-icon"
          /></span>
          <span
            ><img src="../../assets/image/twitter-icon.svg" alt="twitter-icon"
          /></span>
          <span
            ><img src="../../assets/image/youtube-icon.svg" alt="youtube-icon"
          /></span> -->
        </div>
        <div
          class="main-menu--top-mobile-btn"
          @click="showSecondMenu = !showSecondMenu"
        >
          <span
            ><img src="../../assets/image/menu-icon.png" alt="facebook-icon"
          /></span>
        </div>
        <div>
          <button type="button">REGISTER</button>
          <p>OR</p>
          <button type="button">LOGIN</button>
        </div>
      </div>
      <div
        class="main-menu--bottom"
        :class="{
          'main-menu--bottom-show': showSecondMenu,
          'main-menu--bottom-hide': !showSecondMenu,
        }"
      >
        <ul>
          <li
            :class="{
              'nav-current-select': isCurrentRoute('/'),
            }"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li><NuxtLink to="/">About Us</NuxtLink></li>
          <li><NuxtLink to="/">Guides</NuxtLink></li>
          <li style="margin-right: 0"><NuxtLink to="/">News</NuxtLink></li>
        </ul>
        <ul>
          <li
            :class="{
              'nav-current-select': isCurrentRoute('/heroes'),
            }"
          >
            <NuxtLink to="/heroes">Heroes</NuxtLink>
          </li>
          <li
            :class="{
              'nav-current-select': isCurrentRoute('/artifacts'),
            }"
          >
            <NuxtLink to="/artifacts">Artifacts</NuxtLink>
          </li>
          <li
            style="margin-right: 1em"
            class="dropdown"
            @mouseenter="toolsIsOpen = true"
            @mouseleave="toolsIsOpen = false"
            :class="{
              'nav-current-select': isCurrentRoute('/tools/pity-tracker'),
              'nav-current-select': isCurrentRoute('/tools/hero-builder'),
            }"
          >
            <button>Tools <SvgoArrowDownBold /></button>

            <div class="dropdown-menu" v-show="toolsIsOpen">
              <ul>
                <li>
                  <NuxtLink to="/tools/hero-builder">Hero builder</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tools/pity-tracker">Pity tracker</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li style="margin-right: 0">
            <img src="../../assets/svg/search.svg" alt="search" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute();
import CodexLogo from "./Codex-Logo.vue";
const toolsIsOpen = ref(false);
const showSecondMenu = ref(true);

const isCurrentRoute = (routeName) => {
  return route.path === routeName;
};
</script>

<style lang="scss">
header {
  background-color: $clr-secondary;
}

.main-menu {
  position: relative;

  &--top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0;

    &-first {
      @include respond(phone) {
        display: none !important;
      }
    }

    &-mobile-btn {
      display: none !important;
      cursor: pointer;

      @include respond(phone) {
        display: flex !important;
        align-items: center;
        justify-content: center;

        span {
          padding: 0.5em !important;

          img {
            height: 1em !important;
            width: 1em !important;
          }
        }
      }
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;

      p {
        color: $clr-white;
        font-size: 1em;
        font-family: $ff-heading;
        margin-top: 0.25em;
      }

      span {
        background-color: $clr-secondary-dark;
        padding: 0.25em;
        margin-left: 0.5em;

        img {
          height: 1em;
          width: 1em;
        }
      }

      button {
        padding: 0.25em 0.5em;
      }
    }
  }

  &--bottom {
    ul {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;

      li {
        font-family: $ff-heading;
        font-size: 1.35em;
        margin-right: 1.5em;
        text-transform: uppercase;
        cursor: pointer;
        img {
          height: 1.5em;
          width: 1.5em;
        }
        :hover {
          color: $clr-primary;
        }

        @include respond(tab-land) {
          font-size: 1em;
          margin-right: 1em;
        }
      }
    }

    &-show {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include respond(phone) {
        display: none;
      }
    }

    &-hide {
      display: none;

      @include respond(phone) {
        display: flex;
        margin-top: 1em;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}

img.site-logo {
  max-height: 5em;
}

.dropdown {
  position: relative;
  z-index: 1;

  > button {
    background: none;
    color: white;
    font-size: inherit;
    text-transform: uppercase;
    display: flex;
    gap: 0.5em;
    font-size: 1em;
    min-width: 0;
  }

  svg {
    max-height: 1.125em;
    margin-top: 0.1em;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: $clr-secondary;
    width: max-content;
    border: 1px solid $clr-black;

    ul > * {
      padding: 0.5em 1em;
    }

    ul > * + * {
      border-top: 1px solid $clr-white;
    }
  }
}
.nav-current-select {
  color: $clr-primary;
  & > a {
    color: $clr-primary;
  }
}
</style>
