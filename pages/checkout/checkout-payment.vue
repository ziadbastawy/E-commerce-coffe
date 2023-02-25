<template>
  <Checkout />
</template>
<script>
import Checkout from '~/components/pages/checkout/CheckoutPayment.vue'
export default {
  name: 'Payment',
  components: {
    Checkout
  },
  middleware: 'auth'
}
</script>
<style lang="scss" scoped></style>
