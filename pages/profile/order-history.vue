<template>
  <div>
    <OrderHistory :allOrders="allOrders" />
  </div>
</template>

<script>
import ApiServer from '../../services/orderHistory'
import OrderHistory from '~/components/pages/profile/OrderHistory.vue'
export default {
  components: {
    OrderHistory
  },
  middleware: 'auth',
  async asyncData () {
    let allOrders = []
    await ApiServer.orderHistory()
      .then((res) => {
        allOrders = res.data
      })
      .catch(() => {})
    return {
      allOrders
    }
  }
}
</script>

<style lang="scss" scoped></style>
