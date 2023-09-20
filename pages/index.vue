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
        <EventCountdown v-for="event in events" :image="event.image" :title="event.name" :description="event.description"
          :start="event.start" :end="event.end" />
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
    link: '#',
    title: 'Lorem ipsum dolor sit amet consectetur',
    excerpt: 'Praesent consectetur turpis id tellus iaculis, molestie sagittis tellus ornare. Suspendisse sed ullamcorper ex. In maximus ornare nulla, ut placerat nulla sagittis elementum',
    thumbnail: 'https://picsum.photos/400/300',
    publishedAt: '20 Sep 2023'
  },
  {
    link: '#',
    title: 'Lorem ipsum dolor sit amet consectetur. Purus A diam varius.',
    excerpt: 'Vivamus rhoncus nec mauris eget blandit. Morbi accumsan sagittis nisi, tincidunt euismod ligula vulputate non. Suspendisse at mi ultricies, dapibus nulla in, tristique nunc.',
    thumbnail: 'https://picsum.photos/500/400',
    publishedAt: '20 Sep 2023'
  },
  {
    link: '#',
    title: 'Lorem ipsum dolor sit amet consectetur',
    excerpt: 'Praesent consectetur turpis id tellus iaculis, molestie sagittis tellus ornare. Suspendisse sed ullamcorper ex. In maximus ornare nulla, ut placerat nulla sagittis elementum',
    thumbnail: 'https://picsum.photos/450/300',
    publishedAt: '20 Sep 2023'
  },
  {
    link: '#',
    title: 'Lorem ipsum dolor sit amet consectetur. Purus A diam varius.',
    excerpt: 'Vivamus rhoncus nec mauris eget blandit. Morbi accumsan sagittis nisi, tincidunt euismod ligula vulputate non. Suspendisse at mi ultricies, dapibus nulla in, tristique nunc.',
    thumbnail: 'https://picsum.photos/510/400',
    publishedAt: '20 Sep 2023'
  }
])

const articles = ref([
  {
    heading: 'Recent',
    articles: [
      {
        link: '#',
        title: 'Lorem ipsum dolor sit amet consectetur',
        thumbnail: 'https://picsum.photos/200/200',
        publishedAt: '20 Sep 2023'
      },
      {
        link: '#',
        title: 'Lorem ipsum dolor sit amet consectetur. Purus A diam varius.',
        thumbnail: 'https://picsum.photos/100/100',
        publishedAt: '20 Sep 2023'
      }
    ]
  },
  {
    heading: 'Trending',
    articles: [
      {
        link: '#',
        title: 'Lorem ipsum dolor sit',
        thumbnail: 'https://picsum.photos/150/150',
        publishedAt: '20 Sep 2023'
      },
      {
        link: '#',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        thumbnail: 'https://picsum.photos/130/130',
        publishedAt: '20 Sep 2023'
      }
    ]
  },
  {
    heading: 'Most views',
    articles: []
  },
])
</script>

<style lang="scss" scoped>
.landing-page {
  .hero {
    background: linear-gradient(0deg,
        hsl(213, 18%, 18%, 0.6),
        hsl(213, 18%, 18%, 0.6)),
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

  .article-gallery {
    display: flex;
    gap: 2.5em;
    margin-bottom: 3em;
  }
}
</style>
