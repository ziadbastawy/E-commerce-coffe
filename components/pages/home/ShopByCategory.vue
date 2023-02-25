<template>
  <div class="product-slider">
    <b-container>
      <h4 class="title mb-5">
        {{ $t('home.shopByCategory') }}
      </h4>
      <c-slider :slides-to-show="4.5" :responsive="responsive">
        <template #items>
          <div
            v-for="(category, index) in categoriesList"
            :key="index"
            class="category"
          >
            <shop-category-card :category="category" />
          </div>
        </template>
      </c-slider>
    </b-container>
  </div>
</template>
<script>
import ShopCategoryCard from './components/ShopCategoryCard.vue'
export default {
  components: {
    ShopCategoryCard
  },
  data () {
    return {
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3.5,
            arrows: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2.5,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2.333,
            arrows: false
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: false,
            slidesToShow: 1.3333
          }
        }
      ]
    }
  },
  computed: {
    categoriesList () {
      return this.$store.getters.getCategories
    }
  }
}
</script>

<style lang="scss" scoped>
.slick-slide {
  .category {
    padding-inline-end: 22px;
  }
  &:last-child {
    .category {
      padding-inline-end: 0;
    }
  }
}
.product-slider {
  .title {
    font-size: 22px;
    font-weight: 800;
    color: $gray-dark;
  }
}
</style>
