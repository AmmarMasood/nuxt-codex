<template>
  <header>
    <nav class="main-menu container">
      <img class="site-logo" src="~/assets/svg/logo.svg" alt="site logo" />
      <div class="spacer"></div>
      <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">News</NuxtLink></li>
          <li><NuxtLink to="/">Guides</NuxtLink></li>
          <li><NuxtLink to="/heroes">Heroes</NuxtLink></li>
          <li><NuxtLink to="/artifacts">Artifacts</NuxtLink></li>
          <li class="dropdown">
            <button>
              Tools <img src="~/assets/svg/arrow-down-bold.svg" />
            </button>

            <div class="dropdown-menu">
              <ul>
                <li><NuxtLink to="/tools/hero-builder">Hero builder</NuxtLink></li>
                <li><NuxtLink to="/tools/pity-tracker">Pity tracker</NuxtLink></li>
              </ul>
            </div>
          </li>
      </ul>

      <div class="right-container">
        <img class="search-icon" src="~/assets/svg/search.svg" alt="search icon" />
        <button type="button">Login</button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  background-color: $clr-secondary;
}

.main-menu {
  font-family: $ff-heading;
  text-transform: uppercase;
  border-radius: 1em;
  padding: 0;
  font-size: 1.25em;
  display: flex;
  justify-content: space-between;
  position: relative;
  min-height: 5em;
  align-items: center;
}

img.site-logo {
  max-height: 5em;
  position: absolute;
  left: -0.55em;
  top: 0;
}

img.search-icon {
  max-width: 1.5em;
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

  img {
    max-height: 1.125em;
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

.right-container {
  display: flex;
  gap: 2.5em;

  > button {
    padding: 0.4em 0.75em;
    text-transform: uppercase;
    border-radius: 0.45em;
  }
}
</style>
