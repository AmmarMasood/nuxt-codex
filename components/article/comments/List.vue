<template>
  <div class="comments-list">
    <Separator />
    <div class="comments-list--commentbox" v-for="comment in comments">
      <img :src="comment.img" alt="avatar" />
      <div>
        <div>
          <h4>{{ comment.username }}</h4>
          <div>
            <img src="../../../assets/svg/thumbs-up.svg" alt="thumbs-up" />
            <img src="../../../assets/svg/thumbs-down.svg" alt="thumbs-down" />
          </div>
        </div>
        <p>{{ comment.comment }}</p>
      </div>
    </div>
    <button type="button" @click="onLoadMoreComments">
      Load more comments
    </button>
  </div>
</template>
<script setup>
import Separator from "../../shared/Separator.vue";
import { defineProps } from "vue";

const onLoadMoreComments = () => {
  console.log("load more comments");
};

const props = defineProps({
  comments: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.comments-list {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 1em;

  &--commentbox {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1em;
    & > img {
      width: 2.8em;
      height: 2.8em;
      border-radius: 50%;
      margin-right: 1em;
    }
    & > div {
      & > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        & > h4 {
          font-size: 1.35em;
          color: $clr-gray;
          font-weight: 600;
          font-family: $ff-alternative;
        }
        & > div {
          display: flex;
          align-items: center;
          gap: 0.5em;
          & > img {
            cursor: pointer;
          }
        }
      }

      & > p {
        font-size: 1em;
        color: $clr-white;
        font-weight: 400;
        font-family: $ff-alternative;
        margin-top: 0.25em;
      }
    }
  }

  & > button {
    color: $clr-primary;
    background-color: transparent;
    border: 1px solid $clr-primary;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    border-radius: 0.5em;
    padding: 0.85em 1em;
    margin-top: 3em;
    align-self: center;
  }
}
</style>
