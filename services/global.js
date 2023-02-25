import axios from '@/helpers/axios-port'

export default {
  getProductsSlider (sliderEndpoint = '') {
    return axios.$get(`/products/${sliderEndpoint}`)
  },
  getCategories (showSub = 1) {
    return axios.$get(`/categories?show_sub=${showSub}`)
  }
}
