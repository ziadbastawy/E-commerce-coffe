import { setClient } from '@/helpers/axios-port'

export default ({ $axios, app: { $cookies, $i18n } }) => {
  const authToken = $cookies.get()
  const lang = $cookies.get('i18n_redirected')
  $axios.onRequest((config) => {
    // const CancelToken = $axios.CancelToken.source()
    const headers = {}
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`
    }

    if (lang) {
      headers['Content-Language'] = lang
    }

    config.headers.common = {
      // lang: 'ar',
      ...config.headers.common,
      ...headers
    }
    // config.cancelToken = CancelToken
  })
  $axios.onResponse((config) => {})

  $axios.onError((error) => {
    return Promise.reject(error)
  })

  setClient($axios)
}
