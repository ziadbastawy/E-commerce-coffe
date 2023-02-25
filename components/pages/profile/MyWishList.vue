<template>
  <div>
    <h4 class="font-weight-bold main-header">
      {{ $t('profile.myWishlist') }}
    </h4>
    <div v-if="loading">
      <b-skeleton width="100%" height="8rem" />
    </div>
    <b-row v-if="wishLists.length && !loading">
      <b-col
        v-for="wishListItem in wishLists"
        :key="wishListItem.id"
        cols="12"
        xl="12"
      >
        <wishlistCard :wish-list="wishListItem" />
      </b-col>
    </b-row>
    <div
      v-else-if="!wishLists.length && !loading"
      class="empty-wishlist bg-white p-4 w-100 text-center"
    >
      <NoItemsInWishList />
      <h6 class="font-weight-bold mt-5">
        {{ $t('profile.emptyWishList') }}
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
import NoItemsInWishList from '~/assets/images/svg-icons/NoItemsInWishList.vue'

export default {
  components: {
    NoItemsInWishList,
    wishlistCard: () => import('./components/wishlistCard.vue')
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    wishLists () {
      return this.$store.getters['products/getWishlist']
    }
  },
  mounted () {
    this.$store.dispatch('products/getWishListFromApi').then(() => {
      this.loading = false
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.empty-wishlist {
  padding-top: 12rem !important;
  padding-bottom: 12rem !important;
  border-radius: $default-radios;
  .shop-now {
    color: $main-color;
  }
}
.main-header {
  @media (max-width: 991px) {
    text-align: center;
    margin: 0;
    padding: 10px 0;
  }
}
</style>
