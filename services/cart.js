import axios from '@/helpers/axios-port'

export default {
  getCart () {
    return axios.$get('cart')
  },
  addToCart (payload) {
    return axios.$post('cart/add', payload)
  },
  deleteFromCart (payload) {
    return axios.$post('removeFromCart', payload)
  },
  getpayments () {
    return axios.$get('/payments')
  },
  makeOrder (payload) {
    return axios.$post('makeOrder', payload)
  },
  applyCoupon (payload) {
    return axios.$post('checkCoupon', payload)
  },
  orderSummary (payload) {
    return axios.$post('order_summary', payload)
  }
}
