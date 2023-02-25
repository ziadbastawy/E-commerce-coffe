<template>
  <div class="container">
    <CbreadCrumb class="mt-4" :bread-crumb-array="yourArray" />
    <OfferCard
      v-for="offerCard in offerCards"
      :key="offerCard.id"
      :offer="offerCard"
    />
  </div>
</template>

<script>
import OfferCard from './components/OfferCard.vue'
export default {
  name: 'OfferList',
  components: {
    OfferCard
  },
  data () {
    return {
      offerCards: [
        {
          id: 1,
          productImage: require('@/assets/images/navbar-cart-item-3.png'),
          brandName:
            'Starbucks Starbucks Dark Roast Whole Bean Coffe - Sumatra - 100% Arabica - 6 bags (12 oz.each)',
          salePrice: 'EGP 240',
          sale: 'EGP 350',
          companyDetails: {
            companyImage: require('@/assets/images/home-shop-by-brands-section/starbuck-logo.png'),
            companyName: 'Starbucks'
          }
        },
        {
          id: 2,
          productImage: require('@/assets/images/navbar-cart-item-2.png'),
          brandName:
            'Starbucks Starbucks Dark Roast Whole Bean Coffe - Sumatra - 100% Arabica - 6 bags (12 oz.each)',
          salePrice: 'EGP 240',
          sale: 'EGP 350',
          companyDetails: {
            companyImage: require('@/assets/images/home-shop-by-brands-section/starbuck-logo.png'),
            companyName: 'Starbucks'
          }
        },
        {
          id: 3,
          productImage: require('@/assets/images/navbar-cart-item-1.png'),
          brandName:
            'Starbucks Starbucks Dark Roast Whole Bean Coffe - Sumatra - 100% Arabica - 6 bags (12 oz.each)',
          salePrice: 'EGP 240',
          sale: 'EGP 350',
          companyDetails: {
            companyImage: require('@/assets/images/home-shop-by-brands-section/starbuck-logo.png'),
            companyName: 'Starbucks'
          }
        }
      ],
      yourArray: [
        {
          text: 'Home',
          to: '/'
        },
        // {
        //   text: 'single product',
        //   to: '/single-product/5'
        // },
        {
          text: 'Offers',
          active: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
