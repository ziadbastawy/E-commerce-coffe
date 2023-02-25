import axios from '@/helpers/axios-port'

export default {
  aboutUsPage () {
    return axios.$get('/about_us')
  },
  contactUs (payload) {
    return axios.$post('/contact_us', payload)
  }
}
