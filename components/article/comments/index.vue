<template>
  <div class="comments-container">
    <div class="comments-container--input-section">
      <h2>Leave a comment</h2>
      <textarea v-model="input" rows="5"></textarea>
      <button type="button" @click="onCommentSubmit">Submit</button>
    </div>
    <CommentList :comments="comments" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import CommentList from "./List.vue";

const input = ref("");

const props = defineProps({
  comments: {
    type: Array,
    required: true,
  },
});

const onCommentSubmit = () => {
  console.log("comment", input.value);
};
</script>

<style lang="scss" scoped>
.comments-container {
  &--input-section {
    margin-bottom: 2em;

    & > h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-family: $ff-heading;
      color: $clr-primary;
    }

    & > textarea {
      width: 100%;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      padding: 1em;
      border-radius: 0.5em;
      resize: none;
      background-color: $clr-offwhite;
    }

    & > button {
      text-transform: uppercase;
      padding: 0.8em 2.5em;
      border-radius: 0.5em;
    }
  }
}
</style>
