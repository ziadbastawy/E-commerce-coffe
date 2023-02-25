<template>
  <!--

      props:examble  {
          name: 'Starvucks coffe',
          img: require('@/assets/images/navbar-cart-item-1.png'),
          badgeContent: 'Sale',
          salePrice: 300,
          price: 450,
          addedToCart: false,
          addedToWishList: true,
          rate: 4.5
        }
 -->
  <div class="product px-4 mb-4">
    <div
      class="d-flex justify-content-end align-items-center badge-heart-section"
    >
      <c-badge
        :content="product.badgeContent"
        :class="{ invisible: loading }"
      />
      <c-heart
        :scale="1.4"
        :class="{ invisible: loading }"
        :product-id="product.id"
      />
    </div>
    <div class="product-img">
      <b-img
        v-show="!loading"
        :src="product.img ? product.img : defaultImg"
        :alt="product.name | truncate(20) | tailing('...')"
        @click="goToSinglePage"
        @error="defaultImage"
      />
      <b-skeleton-img v-if="loading" />
    </div>
    <p v-show="!loading" class="product-name">
      <!-- {{ product.name | truncate(80) | tailing('...') }} -->
      {{ productName }}
    </p>
    <b-skeleton v-if="loading" width="55%" />
    <b-skeleton v-if="loading" width="45%" />

    <b-form-rating
      v-if="!loading"
      :value="product.rate"
      color="#ffd008"
      class="product-rate"
      no-border
      readonly
    />
    <!-- <b-skeleton v-if="loading" width="30%" /> -->
    <div class="d-flex justify-content-start">
      <p v-show="!loading" class="current-price">
        {{ product.price }} {{ $t('checkOut.EGP') }}
      </p>
      <b-skeleton v-if="loading" width="30%" />
      <p v-show="!loading" v-if="product.salePrice" class="previous-price">
        {{ product.salePrice }} {{ $t('checkOut.EGP') }}
      </p>
      <b-skeleton v-if="loading" width="30%" class="mb-4" />
    </div>
    <b-button
      v-if="!addedToCart(product.id)"
      :class="{ invisible: loading }"
      class="product-cart-btn"
      @click="addToCart()"
    >
      <img src="@/assets/images/shopping-cart.svg" alt="shopping cart">
    </b-button>
    <c-counter v-else :productId="product.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CProduct',
  props: {
    product: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      loading: true,
      defaultImg: require('@/assets/images/product-placeholder.jpg')
    }
  },
  watch: {
    isLoading: {
      handler (value) {
        if (!value) {
          this.loading = value
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters({ checkInCart: 'carts/addedToCart' }),
    productName () {
      if (this.product.name.length > 80) {
        const tuncateName = this.$options.filters.truncate(
          this.product.name || '',
          80
        )
        return this.$options.filters.tailing(tuncateName, '...')
      }
      return this.product.name
    },
    addedToCart () {
      return (id) => {
        return this.checkInCart(id)
      }
    }
  },

  mounted () {
    this.loading = false
  },
  methods: {
    defaultImage (e) {
      e.currentTarget.src = require('@/assets/images/product-placeholder.jpg')
    },

    goToSinglePage () {
      this.$router.push({
        path: `/single-product/${this.product.id ? this.product.id : '1'}`
      })
    },
    addToCart () {
      this.$store.dispatch('carts/addProductToCart', {
        product: {
          ...this.product,
          image: this.product.img
        },
        quantity: 1
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  padding: 0 0.8rem;
  // margin: 1rem 0;
  .badge-heart-section {
    min-height: 3rem;
  }
  .product-name {
    margin: 0.5rem 0;
    font-size: $default-font-size-lg;
    height: 2.625rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .product-img {
    margin: 1rem 0;
    border-radius: 0.6rem;
    overflow: hidden;
    text-align: center;
    height: 10rem;
    min-height: 10rem;
    img {
      cursor: pointer;
      max-width: 10rem;
      object-fit: contain;
    }
  }

  .previous-price {
    font-size: 14px;
    color: $previous-price-gray;
    text-decoration: line-through;
  }
  .current-price {
    font-size: $default-font-size-xl;
    color: $main-color;
    font-weight: 900;
  }
  .previous-price {
    margin-inline-start: 1rem;
  }
  .product-cart-btn img {
    width: 20px;
    height: 15px;
  }
}
</style>
