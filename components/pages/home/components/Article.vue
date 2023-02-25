<template>
  <div>
    <b-media v-show="!loading" class="article">
      <template #aside class="writer-image align-self-auto">
        <b-img src="@/assets/images/article-writer.jpg" alt="writer image" />
      </template>
      <h5 class="article-head">
        {{ head }}
      </h5>
      <p class="my-3 article-description">
        {{ content }}
      </p>
      <nuxt-link to="/articles/1" class="article-link">
        Read More
      </nuxt-link>
    </b-media>
    <div
      v-if="loading"
      style="max-height: 12rem ; overflow: hidden; margin-inline-end: 1.75rem ; border-radius: 1rem ;
"
    >
      <b-skeleton-img />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    head: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  data () {
    return { loading: true }
  },
  mounted () {
    this.loading = false
  }
}
</script>
<style lang="scss" scoped>
.article {
  margin-inline-end: 1.75rem;
  background-color: rgba(16, 124, 192, 0.07);
  padding: 2rem;
  border-radius: 1rem;
  img {
    max-width: 9rem;
    border-radius: 1rem;
  }
  .article-head {
    font-size: 16pt;
  }
  .article-description {
    color: #231f20;
  }
  .article-link {
    color: $main-color;
  }
  @media (max-width: 991px) {
    margin-inline-end: 0;
  }
  @media (max-width: 575px) {
    display: block;
    text-align: center;
    .article-head {
      text-align: center;
      margin: 1rem 0;
    }
    img {
      margin: 0 auto;
    }
  }
}
</style>
