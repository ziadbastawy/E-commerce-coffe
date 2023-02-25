<template>
  <div class="recipe">
    <b-row v-if="bigMedia" class="content py-4" align-v="center">
      <b-col cols="12" md="6" lg="4" class="media overflow-hidden">
        <img :src="image" :alt="title">
      </b-col>
      <b-col cols="12" md="6" lg="8" class="data py-3 py-md-0">
        <h6 v-if="date" class="date mb-3">
          {{ date }}
        </h6>
        <h4 class="title mb-3 text-center text-md-left">
          {{ title }}
        </h4>
        <p class="description m-md-0 text-justify">
          {{ description }}
        </p>
        <nuxt-link :to="link" class="link">
          View Recipe
        </nuxt-link>
      </b-col>
    </b-row>
    <b-row v-else class="content py-4" align-v="center">
      <b-col cols="12" md="4" lg="3" xl="2" class="media overflow-hidden">
        <img :src="image" :alt="title">
      </b-col>
      <b-col cols="12" md="8" lg="9" xl="10" class="data py-3 py-md-0">
        <h6 v-if="date" class="date mb-3">
          {{ date }}
        </h6>
        <h4 class="title mb-3 text-center text-md-left">
          {{ title }}
        </h4>
        <p class="description m-md-0 text-justify">
          {{ description }}
        </p>
        <nuxt-link :to="link" class="link">
          View Recipe
        </nuxt-link>
      </b-col>
    </b-row>
    <hr class="m-0" style="border-color: #cecece;">
  </div>
</template>
<script>
export default {
  props: {
    bigMedia: {
      type: Boolean,
      default: false
    },
    date: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    }
  }
}
</script>
<style lang="scss" scoped>
.recipe {
  .content {
    .media {
      img {
        border-radius: $default-radios;
      }
    }
    .data {
      .date {
        color: #8a8a8a;
      }
      .description {
        color: $gray-dark;
      }
      .link {
        color: $main-color;
      }
    }
  }
}
</style>
