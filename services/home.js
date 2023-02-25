import axios from '@/helpers/axios-port'

export default {
  getAdsData () {
    return axios.$get('/homeAds')
  },
  getSliderData () {
    return axios.$get('/homeSliders')
  },
  getBrandsLogosData () {
    return axios.$get('/homeBrands')
  },
  getHomeShippingStepsData () {
    return axios.$get('/homeShippingSteps')
  },
  subscribeByEmail (payload) {
    return axios.$post('subscribe', payload)
  }
}
