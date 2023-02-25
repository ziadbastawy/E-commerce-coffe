<template>
  <div class="blog-head">
    <h4 v-show="!loading" class="title mb-5">
      {{ $t('home.fromOurBlog') }}
    </h4>
    <b-skeleton v-if="loading" height="2rem" width="25%" class="my-5" />

    <b-row class="blog-content align-items-center">
      <b-col cols="12" lg="6" class="blog-video p-0 overflow-hidden">
        <video v-show="!loading" src="@/assets/images/Nature.mp4" controls />
        <b-skeleton-img v-if="loading" class="test" />
      </b-col>
      <b-col cols="12" lg="6" class="blog-data">
        <c-badge
          :content="$t('home.reviews')"
          :class="{ invisible: loading }"
          class="font-weight-bold"
        />
        <h2 v-show="!loading" class="head">
          The Olympia Cremina
        </h2>
        <b-skeleton v-if="loading" height="3rem" width="50%" class="my-4" />

        <p v-show="!loading" class="description">
          We have seen increased interest in our Olympia Cremina model. Watch
          this video review and find out what independent expert James Hoffman
          has to say.
        </p>
        <b-skeleton v-if="loading" width="85%" />
        <b-skeleton v-if="loading" width="65%" />
        <b-skeleton v-if="loading" width="45%" class="mb-4" />

        <div
          class="blog-links d-flex align-items-center"
          :class="{ invisible: loading }"
        >
          <c-button @click="goTo('/reviews/5')">
            <b-icon-play-circle />
            <span class="pt-1">
              {{ $t('home.watchVideo') }}
            </span>
          </c-button>
          <c-button to="/blog/reviews" class="see-all-videos">
            {{ $t('home.seeAllVideos') }}
          </c-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BIconPlayCircle } from 'bootstrap-vue'
export default {
  components: { BIconPlayCircle },
  data () {
    return { loading: true }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-head {
  .title {
    font-weight: 800;
    color: $gray-dark;
    font-size: 22px;
  }
  .blog-content {
    .blog-video {
      border-radius: 2rem;
      overflow: hidden;
      video {
        width: 100%;
        border-radius: 2rem;
        min-height: 21rem;
        object-fit: cover;
      }
    }
    .blog-data {
      color: $gray-dark;
      .head {
        font-size: 28px;
        margin: 2rem 0;
      }
      .description {
        margin-bottom: 1rem;
        font-size: 14px;
      }
    }
  }
}
.blog-links {
  flex-wrap: wrap;
  .see-all-videos {
    margin-inline-start: 1rem;
    @media (max-width: 435px) {
      padding: 15px !important;
    }
  }
}
</style>
