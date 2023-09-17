<template>
  <div class="landing-page">
    <section class="hero">
      <div class="container">
        <div class="hero-text">
          <h2>Explore</h2>
          <h1>The Watcher of Realms <span>universe</span></h1>
          <p>
            Discover the ultimate watcher of realms resource center right here.
            Our guides, tools and news updates are designed to elevate your
            gameplay, reveal secrets and keep you ahead of the curve. Join us on
            this epic journey through the realms and become a true watcher.
          </p>
          <button type="button">VISIT THE OFFICIAL WEBSITE</button>
        </div>
        <div class="youtube-container">
          <iframe src="https://www.youtube.com/embed/2Du7XMRA60c" frameborder='0' allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <section class="event-timers" v-if="events.length > 0">
      <div class="container">
        <EventCountdown
          v-for="event in events"
          :image="event.image"
          :title="event.name"
          :description="event.description"
          :start="event.start"
          :end="event.end"
        />
      </div>
    </section>
    <section>
      <div class="article-gallery-grid container">
        <article
          class="article-gallery-card grid-col-span-2 grid-row-span-2"
          style="--background: url('https://picsum.photos/400/400')
        ">
          <ArticleCategoryBadge category="Guides" />
          <div class="article-content">
            <p>Lindz - 17 Sep 2023</p>
            <h2><NuxtLink to="/">After all is said and done, more is done</NuxtLink></h2>
          </div>
        </article>
        <article class="article-gallery-card" style="--background: url('https://picsum.photos/400/400')">
          <ArticleCategoryBadge category="Articles" />
          <div class="article-content">
            <p>Lindz - 17 Sep 2023</p>
            <h2><NuxtLink to="/">After all is said and done, more is done</NuxtLink></h2>
          </div>
        </article>
        <article class="article-gallery-card" style="--background: url('https://picsum.photos/400/400')">
          <ArticleCategoryBadge category="News" />
          <div class="article-content">
            <p>Lindz - 17 Sep 2023</p>
            <h2><NuxtLink to="/">After all is said and done, more is done</NuxtLink></h2>
          </div>
        </article>
        <article class="article-gallery-card grid-col-span-2" style="--background: url('https://picsum.photos/400/400')">
          <ArticleCategoryBadge category="Guides" />
          <div class="article-content">
            <p>Lindz - 17 Sep 2023</p>
            <h2><NuxtLink to="/">After all is said and done, more is done</NuxtLink></h2>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useGameEventsStore } from "~/stores/gameEventsStore";
const store = useGameEventsStore();

const events = ref(await store.getEvents());
</script>

<style lang="scss">
.landing-page {
  .hero {
    background: linear-gradient(
        0deg,
        hsl(213, 18%, 18%, 0.6),
        hsl(213, 18%, 18%, 0.6)
      ),
      url("~/assets/image/bg.png") fixed;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 41.25rem;
    display: flex;
    align-items: center;

    h2 {
      font-size: $fs-heading-2;
    }

    h1 {
      font-size: $fs-heading-1;
      font-family: $ff-heading;
      line-height: 100%;
      color: $clr-primary;

      span {
        color: $clr-white;
      }
    }

    button {
      margin-top: 2rem;
    }

    .container {
      display: flex;
      justify-content: space-between;
      gap: 5em;
    }

    .youtube-container {
      flex: 1;
      border: 2px solid $clr-primary;

      iframe {
        height: 100%;
        width: 100%;
      }
    }

    .hero-text {
      flex: 1;
      vertical-align: middle;
    }
  }

  .event-timers {
    margin-top: 4em;
  }

  .article-gallery-grid {
    margin-top: 5em;
    margin-bottom: 5em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
    height: 35em;
  }

  .article-gallery-card {
    background-image: var(--background);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .article-content {
      padding: 1em;
      max-width: 70%;
      background: linear-gradient(
        0deg,
        hsl(0, 0%, 12%, 0.6),
        hsl(0, 0%, 12%, 0.6),
      )
    }

    h2 {
      font-family: $ff-alternative;
      font-weight: 500;
    }

    &.grid-col-span-2 {
      grid-column: span 2;

      h2 {
        font-size: 1.5em;
      }
    }

    &.grid-row-span-2 {
      grid-row: span 2;

      h2 {
        font-size: 2.25em;
      }
    }
  }
}
</style>
