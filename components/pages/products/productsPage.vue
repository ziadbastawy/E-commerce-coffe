<template>
  <div class="container">
    <!--
    removed based on client requirement
    <c-headerMedia
      :title="
        $t('products.coffeeHasGivenUnrealisticExpectationsOfProductivity')
      "
      no-backrgound
      :image="require('@/assets/images/seller-profile/header-media-2.jpg')"
    /> -->
    <productsList />
  </div>
</template>
<script>
import productsList from './ProductsList.vue'
export default {
  components: {
    productsList
  }
}
</script>
<style lang="scss" scoped>
.productsList {
  .spinner {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
