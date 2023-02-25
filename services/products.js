import axios from '@/helpers/axios-port'

export default {
  getProductsList (filters = {}) {
    return axios.$get('/products', {
      params: {
        ...filters
      }
    })
  },
  toggleWishList (payload) {
    return axios.$post('toggleProductInWishlist', payload)
  },
  getWishlist () {
    return axios.$get('/wishlist')
  },
  vendorData (id) {
    return axios.$get(`vendor_details/${id}`)
  }
}
