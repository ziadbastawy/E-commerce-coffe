<template>
  <div class="product-slider">
    <component :is="!hideContanier ? 'b-container' : 'div'">
      <h4 class="title">
        {{ title }}
      </h4>
      <c-slider v-if="products.length" :slides-to-show="slideToShowProduct">
        <template #items>
          <div v-for="(product, index) in products" :key="index">
            <c-product
              :product="{
                name: product.name,
                img: product.image,
                badgeContent: product.discount ? `${product.discount} %` : '',
                salePrice: product.price_before_discount,
                price: product.price,
                addedToCart: false,
                addedToWishList: true,
                rate: product.rate,
                id: product.id
              }"
            />
          </div>
        </template>
      </c-slider>
    </component>
  </div>
</template>

<script>
import apiSliderProducts from '@/services/global'
export default {
  props: {
    slideToShowProduct: {
      type: Number,
      required: false,
      default: 4
    },
    title: {
      type: String,
      default: ''
    },
    sliderEndpoint: {
      type: String,
      required: true
    },
    hideContanier: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      products: []
    }
  },
  async fetch () {
    await apiSliderProducts.getProductsSlider(this.sliderEndpoint).then((res) => {
      this.products = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>
.title {
  color: $gray-dark;
  font-size: 22px;
  font-weight: 800;
}
</style>
