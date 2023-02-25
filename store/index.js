import globalApiServer from '~/services/global'

export const state = () => {
  return {
    categories: []
  }
}

export const getters = {
  getCategories (state) {
    return state.categories
  }
}

export const mutations = {
  setCategories (state, payload) {
    state.categories = [...payload]
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    await globalApiServer.getCategories().then((res) => {
      commit('setCategories', res.data)
    })
  }
}
