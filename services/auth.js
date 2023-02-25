import axios from '@/helpers/axios-port'

export default {
  singup (payload) {
    return axios.$post('/auth/register', payload)
  },
  resetPassword (payload) {
    return axios.$post('/auth/mobile', payload)
  },
  newPassword (payload) {
    return axios.$post('/auth/newPassword', payload)
  },
  resendCodeMobile (payload) {
    return axios.$post('/send_otp', payload)
  },
  verificationMobile (payload) {
    return axios.$post('/auth/verifyUser', payload)
  },
  vendorRegister (payload) {
    return axios.$post('/auth/vendor_register', payload)
  }
}
