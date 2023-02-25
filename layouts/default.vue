<template>
  <div>
    <Nav />
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Nav from '@/components/layout/Nav.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  components: {
    Nav,
    Navbar,
    Footer
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      }
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('cart'))?.length && !this.isUserLogin) {
      this.$store.commit(
        'carts/UPDATE_STATE_WITH_BULK_ARRAY',
        JSON.parse(localStorage.getItem('cart'))
      )
      this.$store.commit('carts/UPDATE_SUB_TOTAL')
    }

    if (this.isUserLogin) {
      this.$store.dispatch('carts/getCartFromApi')
      this.$store.dispatch('products/getWishListFromApi')
    } else {
      this.$store.commit('carts/STOP_CART_LOADING')
    }
  }
}
</script>
