import heartApi from '@/services/products'

const getIndex = (arr, id) => {
  return arr.indexOf(id)
}

export const state = () => {
  return {
    wishList: [],
    wishListIds: []
  }
}

export const getters = {
  getWishlist (state) {
    return state.wishList
  },
  isAddedToWishList (state) {
    return (id) => {
      return state.wishListIds.includes(id)
    }
  }
}
export const mutations = {
  MOVE_TO_WISH_LIST (state, payload) {
    state.wishListIds.push(payload)
  },
  REMOVE_FROM_WISH_LIST (state, payload) {
    const index = getIndex(state.wishListIds, payload)
    state.wishListIds.splice(index, 1)
    state.wishList.splice(index, 1)
  },
  UPDATE_WISH_LIST_IDS (state, payload) {
    state.wishListIds = [...payload]
  },
  UPDATE_WISH_LIST (state, payload) {
    state.wishList = [...payload]
  },
  RESET_WISH_LIST_DATA (state) {
    state.wishList = []
    state.wishListIds = []
  }
}
export const actions = {
  toggleProductWishList ({ commit, getters }, data) {
    window.$nuxt.$root.$nuxt.$loading.start()
    return new Promise((resolve, reject) => {
      heartApi
        .toggleWishList(data)
        .then((res) => {
          // if not false go to condition
          if (!getters.isAddedToWishList(data.product_id)) {
            // call mutation move to wish list
            commit('MOVE_TO_WISH_LIST', data.product_id)
          } else {
            commit('REMOVE_FROM_WISH_LIST', data.product_id)
          }
          resolve(res)
          window.$nuxt.$root.$nuxt.$loading.finish()
        })
        .catch((err) => {
          reject(err)
          window.$nuxt.$root.$nuxt.$loading.finish()
        })
    })
  },
  getWishListFromApi ({ commit }) {
    return new Promise((resolve) => {
      heartApi.getWishlist().then((res) => {
        const arrOfIds = res.data.map(item => item.id)
        commit('UPDATE_WISH_LIST_IDS', arrOfIds)
        commit('UPDATE_WISH_LIST', res.data)
        resolve(res)
      })
    })
  }
}
