<template>
  <b-container>
    <div v-if="isLoading">
      <b-skeleton class="mt-5" height="300px" width="100%" />
    </div>
    <div v-else>
      <b-row v-if="productCarts.length > 0" class="mt-5">
        <b-col cols="12" xl="9">
          <div class="mt-5">
            <h3 class="font-weight-bold mb-5 mb-xl-0">
              {{ $t('checkOut.myCart') }}
              <span class="items-count">( {{ productCarts.length }} )</span>
            </h3>
            <b-row no-gutters class="cart-table-header d-none d-lg-flex">
              <b-col cols="12" lg="1">
                {{ $t('checkOut.item') }}
              </b-col>
              <b-col cols="12" lg="7" />
              <b-col cols="6" lg="2">
                {{ $t('checkOut.qty') }}
              </b-col>
              <b-col cols="6" lg="2" class="text-center">
                {{ $t('checkOut.price') }}
              </b-col>
            </b-row>
            <CartProducts
              v-for="(productCart, index) in productCarts"
              :key="productCart.id"
              :index="index"
              :productsCart="productCart"
              @onRemoveFromArray="removedFromArray(index)"
            />
          </div>
        </b-col>
        <b-col cols="12" xl="3">
          <PaymentDetails />
        </b-col>
      </b-row>
      <div v-else>
        <EmptyCart />
      </div>
    </div>
    <hr>
    <div class="my-5">
      <div v-if="isLoading">
        <b-skeleton class="mt-5" height="40px" width="40%" />
        <b-skeleton class="mt-3" height="300px" width="100%" />
      </div>
      <SliderProduct
        v-else
        :slide-to-show-product="numbersOfSlider"
        slider-endpoint="topRated"
        :hide-contanier="true"
        :title="$t(`checkOut.recommendedBasedOnYourShoppingHistory`)"
      />
    </div>
  </b-container>
</template>
<script>
import PaymentDetails from './components/Cart/PaymentDetails.vue'
import EmptyCart from './components/Cart/EmptyCart.vue'
import CartProducts from './components/Cart/CartProducts.vue'
import SliderProduct from '@/components/global/SliderProduct.vue'

export default {
  components: {
    PaymentDetails,
    EmptyCart,
    CartProducts,
    SliderProduct
  },
  data () {
    return {
      numbersOfSlider: 5
    }
  },
  computed: {
    productCarts () {
      return this.$store.getters['carts/cartsProducts']
    },

    isLoading () {
      return this.$store.getters['carts/isLoading']
    },
    getProductsIds () {
      return this.productCarts.map(item => item.id)
    }
  },
  methods: {
    removedFromArray (index) {
      this.$store.commit('carts/REMOVE_FROM_CART', index)
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-table-header {
  color: #9d9d9d;
  font-size: 12px;
  // padding-inline-start: 1rem;
  margin-block: 2.5rem 1.5rem;
  // margin: 1.5rem 0;
}
.items-count {
  font-size: 20px;
}
</style>
