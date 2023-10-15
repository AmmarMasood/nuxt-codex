<template>
  <div class="landing-page">
    <section class="hero">
      <div class="container hero--inner">
        <div class="hero-text">
          <h2>Explore</h2>
          <h1>The Watcher of Realms <span>universe</span></h1>
          <p>
            Discover the ultimate watcher of realms resource center right here.
            Our guides, tools and news updates are designed to elevate your
            gameplay, reveal secrets and keep you ahead of the curve. Join us on
            this epic journey through the realms and become a true watcher.
          </p>
          <button type="button">
            <img src="../assets/svg/play-icon.svg" alt="play icon" />
            <span>WATCH GAME TRAILER</span>
          </button>
        </div>
        <div class="hero-image-container">
          <iframe
            src="https://www.youtube.com/embed/2Du7XMRA60c"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <section class="event-timers" v-if="events.length > 0">
      <div class="container event-timers-container">
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
      <ArticleFeatured />
    </section>
    <section class="container">
      <div class="article-gallery">
        <ArticleGallery :articles="latestArticles" />
        <ArticleList :articles="articles" />
      </div>
    </section>
  </div>
</template>
<script setup>
import { useGameEventsStore } from "~/stores/gameEventsStore";
const store = useGameEventsStore();

const events = ref(await store.getEvents());
const latestArticles = ref([
  {
    link: "#",
    author: "Craig Bator",
    title: "Lorem ipsum dolor sit amet consectetur",
    excerpt:
      "Praesent consectetur turpis id tellus iaculis, molestie sagittis tellus ornare. Suspendisse sed ullamcorper ex. In maximus ornare nulla, ut placerat nulla sagittis elementum",
    thumbnail: "https://picsum.photos/400/300",
    publishedAt: "20 Sep 2023",
  },
  {
    link: "#",
    author: "Craig Bator",
    title: "Lorem ipsum dolor sit amet consectetur. Purus A diam varius.",
    excerpt:
      "Vivamus rhoncus nec mauris eget blandit. Morbi accumsan sagittis nisi, tincidunt euismod ligula vulputate non. Suspendisse at mi ultricies, dapibus nulla in, tristique nunc.",
    thumbnail: "https://picsum.photos/500/400",
    publishedAt: "20 Sep 2023",
  },
  {
    link: "#",
    author: "Craig Bator",
    title: "Lorem ipsum dolor sit amet consectetur",
    excerpt:
      "Praesent consectetur turpis id tellus iaculis, molestie sagittis tellus ornare. Suspendisse sed ullamcorper ex. In maximus ornare nulla, ut placerat nulla sagittis elementum",
    thumbnail: "https://picsum.photos/450/300",
    publishedAt: "20 Sep 2023",
  },
  {
    link: "#",
    author: "Craig Bator",
    title: "Lorem ipsum dolor sit amet consectetur. Purus A diam varius.",
    excerpt:
      "Vivamus rhoncus nec mauris eget blandit. Morbi accumsan sagittis nisi, tincidunt euismod ligula vulputate non. Suspendisse at mi ultricies, dapibus nulla in, tristique nunc.",
    thumbnail: "https://picsum.photos/510/400",
    publishedAt: "20 Sep 2023",
  },
]);

const articles = ref([
  {
    heading: "Recent",
    articles: [
      {
        link: "#",
        author: "Craig Bator",
        title: "Lorem ipsum dolor sit amet consectetur",
        thumbnail: "https://picsum.photos/200/200",
        publishedAt: "20 Sep 2023",
      },
      {
        link: "#",
        author: "Craig Bator",
        title: "Lorem ipsum dolor sit amet consectetur. Purus A diam varius.",
        thumbnail: "https://picsum.photos/100/100",
        publishedAt: "20 Sep 2023",
      },
    ],
  },
  {
    heading: "Trending",
    articles: [
      {
        link: "#",
        author: "Craig Bator",
        title: "Lorem ipsum dolor sit",
        thumbnail: "https://picsum.photos/150/150",
        publishedAt: "20 Sep 2023",
      },
      {
        link: "#",
        author: "Craig Bator",
        title: "Lorem ipsum dolor sit amet consectetur.",
        thumbnail: "https://picsum.photos/130/130",
        publishedAt: "20 Sep 2023",
      },
    ],
  },
  {
    heading: "Most views",
    articles: [],
  },
]);
</script>

<style lang="scss" scoped>
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
    min-height: 45rem;
    display: flex;
    align-items: center;

    h2 {
      font-size: $fs-heading-2;
      text-transform: uppercase;
    }

    h1 {
      font-size: $fs-heading-1;
      font-family: $ff-heading;
      line-height: 100%;
      color: $clr-primary;
      text-transform: uppercase;

      span {
        color: $clr-white;
      }
    }

    button {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      & > img {
        margin-right: 0.5em;
      }
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5em;

      @include respond(tab-land) {
        flex-direction: column;
      }
    }

    .hero-text {
      width: 50%;
      vertical-align: middle;

      @include respond(tab-land) {
        width: 100%;
      }
    }

    &--inner {
      position: relative;
    }
  }

  .event-timers {
    margin-top: 4em;

    &-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5em;
      align-items: center;
      justify-items: center;

      @include respond(tab-port) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      }
    }
  }

  .article-gallery {
    display: grid;
    grid-template-columns: 1fr 22em;
    gap: 2.5em;
    margin-bottom: 3em;

    @include respond(tab-port) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
}

.hero-image-container {
  & > iframe {
    width: 550px;
    height: 300px;

    @include respond(desktop) {
      width: 350px;
      height: 200px;
    }
  }
  // position: absolute;
  // top: -20rem;
  // flex: 1;
  // right: -7.625rem;

  // @include respond(desktop) {
  //   top: -15rem;
  //   flex: 1;
  //   right: -7.625rem;

  //   & > img {
  //     max-width: 100%;
  //     max-height: 45rem;
  //   }
  // }

  // @include respond(tab-land) {
  //   display: none;
  // }
}
</style>
