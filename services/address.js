import axios from '@/helpers/axios-port'

export default {
  governorates () {
    return axios.$get('/governorates')
  },
  cites (id) {
    return axios.$get(`/cities/${id}`)
  },
  areas (id) {
    return axios.$get(`/areas/${id}`)
  },
  addAddress (payload) {
    return axios.$post('/addAddress', payload)
  },
  myAddresses () {
    return axios.$get('/myAddresses')
  },
  updateAddress (payload) {
    return axios.$post('/updateAddress', payload)
  },
  deleteAddress (payload) {
    return axios.$post('/deleteAddress', payload)
  }
}
