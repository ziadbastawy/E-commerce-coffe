import axios from '@/helpers/axios-port'

export default {
  updateProfile (payload) {
    return axios.$post('/auth/updateProfile', payload)
  },
  makeReorder (id) {
    return axios.$post(`/reorder/${id}`)
  }
}
