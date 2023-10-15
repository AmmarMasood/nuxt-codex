<template>
  <div class="guides-page container">
    <BreadCrumbs :breadcrumb="breadcrumbs" style="margin: 1em 0" />
    <div class="article-detail">
      <div class="article-detail--container">
        <img :src="articleDetail.coverImage" alt="conver" />
        <h1>{{ articleDetail.title }}</h1>
        <ShareCard :date="articleDetail.publishedAt" style="margin: 3em 0" />
        <p>{{ articleDetail.introText }}</p>
        <div
          class="article-detail--container-inner"
          v-html="articleDetail.paragraph"
        ></div>
      </div>
      <div>
        <ArticleList
          :articles="articles"
          header="More Articles"
          style="margin: 0em 0 5em 0"
        />
        <ArticleList :articles="articles" header="More Guides" />
      </div>
    </div>
    <CommentSection :comments="comments" />
  </div>
</template>

<script setup>
import BreadCrumbs from "../../components/shared/BreadCrumbs.vue";
import CommentSection from "../../components/article/comments/index.vue";
import ShareCard from "../../components/article/share-card/index.vue";

const articleDetail = ref({
  title: "Lorem ipsum dolor sit amet consectetur. Nibh augue.",
  coverImage: "https://picsum.photos/700/500",
  publishedAt: new Date(),
  introText:
    "Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.",
  paragraph: `
      <h1>Guide on the Heroes for Newbies</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
      <ul>
          <li>There are many variations of passages of Lorem Ipsum available</li>
          <li>There are many variations of passages of Lorem Ipsum available</li>
          <li>There are many variations of passages of Lorem Ipsum available</li>
      </ul>
      <div class="image-container">
      <img src='https://picsum.photos/700/500' alt=img />
      <span>Lorem Ipsum -Agent</span>
      </div>
      <h1>Feel free to choose any hero you want</h1>
      <p>It was popularised in the 1960s with the release of Letraset  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <ol>
         <li>Your wellness goals and the areas of preference, then unwind with a customized.</li>  
         <li>Discover better health & wellness by using our beautician ratings & reviews to make your choice.</li>
         <li>Professionals team is trained to provide you with the care and support you need during this difficult time.</li>
         <li>We will fax the requested records directly to the Qualified Beautician.</li>
      </ol>
  `,
});

const breadcrumbs = ref([
  { name: "Home", link: "/" },
  { name: "Guides", link: "/guides" },
  { name: "Lorem ipsum dolor sit amet", link: "/guides" },
]);
const comments = ref([
  {
    img: "https://picsum.photos/100/100",
    username: "User1233",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit purus non consequat in id vulputate ornare magna in. Cras gravida tellus amet nam. Scelerisque massa elementum volutpat tellus rutrum id pulvinar. Senectus amet.",
  },
  {
    img: "https://picsum.photos/100/100",
    username: "kingSlayer ",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit purus non consequat in id vulputate ornare magna in. Cras gravida tellus amet nam. Scelerisque massa elementum volutpat tellus rutrum id pulvinar. Senectus amet.",
  },
  {
    img: "https://picsum.photos/100/100",
    username: "HelloA",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Sit purus non consequat in id vulputate ornare magna in. Cras gravida tellus amet nam. Scelerisque massa elementum volutpat tellus rutrum id pulvinar. Senectus amet.",
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

<style lang="scss">
.guides-page {
  margin-bottom: 3em;
}
.article-detail {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-gap: 2em;
  margin-bottom: 5em;

  @include respond(tab-port) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  &--container {
    & > h1 {
      color: $clr-primary;
      font-size: 3em;
      text-transform: uppercase;
      font-family: $ff-heading;
    }
    & > p {
      font-size: 1.25em;
      color: $clr-white;
      font-family: $ff-alternative;
    }
    & > img {
      border: 2px solid $clr-primary;
      width: 100%;
      height: 500px;
      margin: 0 0 2em 0;
    }

    &-inner {
      margin-top: 5em;
      & > h1 {
        color: $clr-primary;
        text-transform: uppercase;
        font-family: $ff-heading;
        font-size: 2em;
        margin-bottom: 0.5em;
      }

      & > p {
        font-size: 1.25em;
        color: $clr-white;
        font-family: $ff-alternative;
        margin-bottom: 1em;
      }
      & > ul {
        font-size: 1.25em;
        color: $clr-white;
        font-family: $ff-alternative;
        list-style: initial;

        & > li {
          margin-bottom: 1em;
          margin-left: 2.5em;
        }
      }
      & > ol {
        font-size: 1.25em;
        color: $clr-white;
        font-family: $ff-alternative;
        list-style: auto;

        & > li {
          margin-bottom: 1em;
          margin-left: 2.5em;
        }
      }

      & > div {
        text-align: center;
        width: fit-content;
        margin: 3em 0;
        & > span {
          color: $clr-white;
          font-family: $ff-alternative;
          font-size: 1em;
        }
        & > img {
          width: auto;
          height: 500px;
          margin-bottom: 1em;
        }
      }
    }
  }
}
</style>
