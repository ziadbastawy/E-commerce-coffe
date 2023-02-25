import axios from '@/helpers/axios-port'

export default {
  orderHistory () {
    return axios.$get('/orderHistory')
  }
}
