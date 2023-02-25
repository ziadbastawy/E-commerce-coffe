import axios from '@/helpers/axios-port'

export default {
  getProductsData (id = 1) {
    return axios.$get(`/product/${id}`)
  }
}
