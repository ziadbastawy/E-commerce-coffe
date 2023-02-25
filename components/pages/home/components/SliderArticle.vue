<template>
  <div class="article-slider">
    <div
      class="slider-links d-flex justify-content-between align-items-center mb-4"
      :class="{ invisible: loading }"
    >
      <c-badge :content="$t('home.articles')" />
      <c-button to="/blog/articles" style="padding: 0">
        {{ $t('home.seeAllArticles') }}
      </c-button>
    </div>
    <c-slider :slides-to-show="1.5" :responsive="responsive">
      <template #items>
        <div v-for="(article, index) in Articles" :key="index">
          <Article :head="article.head" :content="article.content" />
        </div>
      </template>
    </c-slider>
  </div>
</template>

<script>
import Article from './Article'

export default {
  components: {
    Article
  },
  data () {
    return {
      Articles: [
        {
          head: 'The Best Coffee Cake',
          content:
            'Ever wondered how to make the best, moistest coffee cake that will surprise everyone? Look no further. We have this covered. Follow the recipe to successful coffee crumb cake with mocha ribbon and other ways how to use leftover coffee'
        },
        {
          head: 'The Best Coffee Cake',
          content:
            'Ever wondered how to make the best, moistest coffee cake that will surprise everyone? Look no further. We have this covered. Follow the recipe to successful coffee crumb cake with mocha ribbon and other ways how to use leftover coffee'
        },
        {
          head: 'The Best Coffee Cake',
          content:
            'Ever wondered how to make the best, moistest coffee cake that will surprise everyone? Look no further. We have this covered. Follow the recipe to successful coffee crumb cake with mocha ribbon and other ways how to use leftover coffee'
        },
        {
          head: 'The Best Coffee Cake',
          content:
            'Ever wondered how to make the best, moistest coffee cake that will surprise everyone? Look no further. We have this covered. Follow the recipe to successful coffee crumb cake with mocha ribbon and other ways how to use leftover coffee'
        },
        {
          head: 'The Best Coffee Cake',
          content:
            'Ever wondered how to make the best, moistest coffee cake that will surprise everyone? Look no further. We have this covered. Follow the recipe to successful coffee crumb cake with mocha ribbon and other ways how to use leftover coffee'
        }
      ],
      loading: true,
      responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1, arrows: true } }]
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>
<style lang="scss"></style>
