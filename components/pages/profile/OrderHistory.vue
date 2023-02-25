<template>
  <div>
    <h4 class="font-weight-bold main-header">
      {{ $t('profile.orderHistory') }}
    </h4>
    <!-- <div v-if="loading" class="mt-3">
      <b-skeleton v-for="index in 3" :key="index" width="100%" height="6rem" />
    </div>
    -->
    <div v-if="orderHistoryItems.length">
      <div v-for="(item, i) in orderHistoryItems" :key="i">
        <OrderHistoryCard
          :id="i"
          :orderItem="item"
          @makeReorder="makeReorder"
        />
      </div>
    </div>
    <div
      v-else-if="!orderHistoryItems.length"
      class="empty-order-list bg-white p-4 w-100 text-center"
    >
      <NoOrderHistory />
      <h6 class="font-weight-bold mt-5">
        {{ $t('profile.noOrderHistory') }}
      </h6>
      <p class="">
        {{ $t('profile.checkWhatsTrending') }}
      </p>
      <nuxt-link class="shop-now" :to="'/products'">
        {{ $t('profile.shopNow') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import OrderHistoryCard from './components/OrderHistoryCard.vue'
import NoOrderHistory from '~/assets/images/svg-icons/NoOrderHistory.vue'

import Api from '@/services/profile'
export default {
  components: {
    NoOrderHistory,
    OrderHistoryCard
  },
  props: {
    allOrders: {
      type: Array,
      require: false,
      default: () => []
    }
  },
  data () {
    return {
      // loading: false,
      orderHistoryItems: []
    }
  },

  created () {
    this.orderHistoryItems = [...this.allOrders]
  },
  methods: {
    makeReorder (id) {
      Api.makeReorder(id).then(() => {
        this.successMsg(
          'Reorded made successfully, your cart is updated please check it'
        )
        this.$store.dispatch('carts/getCartFromApi')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.main-header {
  @media (max-width: 991px) {
    text-align: center;
    margin: 0;
    padding: 10px 0;
  }
}

.empty-order-list {
  padding-top: 12rem !important;
  padding-bottom: 12rem !important;
  border-radius: $default-radios;
  .shop-now {
    color: $main-color;
  }
}
</style>
