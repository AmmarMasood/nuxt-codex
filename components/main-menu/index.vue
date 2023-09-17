<template>
  <header>
    <nav class="main-menu container">
      <NuxtLink to="/">
        <img class="site-logo" src="~/assets/image/logo.png" alt="site logo" />
      </NuxtLink>
      <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">News</NuxtLink></li>
          <li><NuxtLink to="/">Guides</NuxtLink></li>
          <li><NuxtLink to="/heroes">Heroes</NuxtLink></li>
          <li><NuxtLink to="/artifacts">Artifacts</NuxtLink></li>
          <li class="dropdown" @mouseenter="toolsIsOpen = true" @mouseleave="toolsIsOpen = false">
            <button>
              Tools <SvgoArrowDownBold />
            </button>

            <div class="dropdown-menu" v-show="toolsIsOpen">
              <ul>
                <li><NuxtLink to="/tools/hero-builder">Hero builder</NuxtLink></li>
                <li><NuxtLink to="/tools/pity-tracker">Pity tracker</NuxtLink></li>
              </ul>
            </div>
          </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const toolsIsOpen = ref(false)
</script>

<style lang="scss">
header {
  background-color: $clr-secondary;
}

.main-menu {
  font-family: $ff-heading;
  text-transform: uppercase;
  border-radius: 1em;
  padding: 0em;
  font-size: 1.25em;
  display: flex;
  min-height: 5em;
  align-items: center;
  gap: 2em;
}

img.site-logo {
  max-height: 4em;
}

.main-menu > ul {
  display: flex;
  gap: 2.5em;
  align-items: center;
  margin-left: 2em;
}

.dropdown {
  position: relative;

  > button {
    background: none;
    color: white;
    font-size: inherit;
    text-transform: uppercase;
    display: flex;
    gap: 0.5em;
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
</style>
