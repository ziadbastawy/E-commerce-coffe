<template>
  <div class="review">
    <b-row class="content py-4" align-v="center">
      <b-col cols="12" md="5" lg="4" xl="3" class="media overflow-hidden">
        <video :src="video" controls class="w-100" />
      </b-col>
      <b-col cols="12" md="7" lg="8" xl="9" class="data py-3 py-md-0">
        <nuxt-link
          tag="h4"
          to="/reviews/1"
          class="title mb-3 text-center text-md-left"
        >
          {{ title }}
        </nuxt-link>
        <p class="description mb-2 text-justify">
          {{ description }}
        </p>
        <div class="tags">
          <span v-for="(tag, id) in tags" :key="id" class="tag">{{ tag }}</span>
        </div>
      </b-col>
    </b-row>
    <hr class="m-0" style="border-color: #cecece;">
  </div>
</template>
<script>
export default {
  props: {
    video: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.review {
  .content {
    .media {
      video {
        border-radius: $default-radios * 2;
      }
    }
    .data {
      .title {
        cursor: pointer;
      }
      .description {
        color: $gray-dark;
      }
    }
  }
}
</style>
