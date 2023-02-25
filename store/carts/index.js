/* eslint-disable no-unused-vars */
import axios from '@/services/cart'

const getIndex = (arr, id) => {
  return arr.map(item => item.id).indexOf(id)
}
const updateCartLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data))
}

const updateCartApi = (payload) => {
  const data = {
    products: payload
  }
  return new Promise((resolve, reject) => {
    axios
      .addToCart(data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const state = () => {
  return {
    cartsProducts: [],
    sub_total: '',
    total: '',
    totalItems: '',
    delivery_charge: 0,
    discount: 0,
    isLoading: true
  }
}

export const getters = {
  cartsProducts (state) {
    return state.cartsProducts
  },
  cartProductsIds (state) {
    return state.cartsProducts.map(item => item.id)
  },
  addedToCart (state, getters) {
    return (id) => {
      return getters.cartProductsIds.includes(id)
    }
  },
  getSpecificProduct (state) {
    return (id) => {
      return state.cartsProducts.find((item) => {
        return item.id === id
      })
    }
  },
  filteredCartForApi (state) {
    return state.cartsProducts.map((item) => {
      return {
        product_id: item.id,
        quantity: item.quantity
      }
    })
  },
  getTotal (state) {
    return state.total
  },
  getTotalSubCart (state) {
    return state.sub_total
  },
  getDiscount (state) {
    return state.discount
  },
  getDeliveryCharge (state) {
    return state.delivery_charge
  },
  isLoading (state) {
    return state.isLoading
  }
}

export const mutations = {
  ADD_TO_CART (state, { product, quantity }) {
    state.cartsProducts.push({
      ...product,
      quantity
    })
    updateCartLocalStorage(state.cartsProducts)
  },
  REMOVE_FROM_CART (state, { id }) {
    const index = getIndex(state.cartsProducts, id)
    state.cartsProducts.splice(index, 1)
    updateCartLocalStorage(state.cartsProducts)
  },
  INCREASE_QUANTITY (state, { id, newQuantity }) {
    const index = getIndex(state.cartsProducts, id)
    state.cartsProducts[index].quantity = newQuantity
    updateCartLocalStorage(state.cartsProducts)
  },
  DECREASE_QUANTITY (state, { id, newQuantity }) {
    const index = getIndex(state.cartsProducts, id)
    state.cartsProducts[index].quantity = newQuantity
    updateCartLocalStorage(state.cartsProducts)
  },
  UPDATE_STATE_WITH_BULK_ARRAY (state, payload) {
    state.cartsProducts = [...payload]
  },
  UPDATE_CART_FROM_API (state, payload) {
    if (state.cartsProducts.length) {
      const arrOfIds = payload.map(item => item.id)
      arrOfIds.forEach((id, idIndex) => {
        const index = getIndex(state.cartsProducts, id)
        if (index >= 0) {
          state.cartsProducts[index].quantity += payload[idIndex].quantity
          payload.splice(idIndex, 1)
        }
      })
    }
    state.cartsProducts = [...state.cartsProducts, ...payload]
    updateCartLocalStorage(state.cartsProducts)
  },
  RESET_CART_DATA (state) {
    state.cartsProducts = []
    updateCartLocalStorage([])
  },
  UPDATE_CART_DETAILS (state, payload) {
    Object.entries(payload).forEach(([key, value]) => {
      state[key] = value
    })
  },
  UPDATE_SUB_TOTAL (state) {
    state.sub_total = state.cartsProducts.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    )
    state.total = state.sub_total
  },
  UPDATE_ORDER_SUMMRY (state, payload) {
    state.sub_total = payload.sub_total
    state.delivery_charge = payload.delivery_charge
    state.total = payload.total
    state.discount = payload.discount
  },
  START_CART_LOADING (state) {
    state.isLoading = true
  },
  STOP_CART_LOADING (state) {
    state.isLoading = false
  }
}

export const actions = {
  addProductToCart ({ commit, rootState, getters }, payload) {
    commit('ADD_TO_CART', payload)
    if (rootState.auth.loggedIn) {
      updateCartApi(getters.filteredCartForApi)
    }
    commit('UPDATE_SUB_TOTAL')
  },
  increaseQuantity ({ commit, rootState, getters }, payload) {
    commit('INCREASE_QUANTITY', payload)
    if (rootState.auth.loggedIn) {
      updateCartApi(getters.filteredCartForApi)
    }
    commit('UPDATE_SUB_TOTAL')
  },
  decreaseQuantity ({ commit, rootState, getters }, payload) {
    commit('DECREASE_QUANTITY', payload)
    if (rootState.auth.loggedIn) {
      updateCartApi(getters.filteredCartForApi)
    }
    commit('UPDATE_SUB_TOTAL')
  },
  removeProductFromCart ({ commit, rootState }, payload) {
    if (rootState.auth.loggedIn) {
      return new Promise((resolve, reject) => {
        const data = {
          product_id: payload.id
        }
        axios
          .deleteFromCart(data)
          .then((res) => {
            commit('REMOVE_FROM_CART', payload)
            commit('UPDATE_SUB_TOTAL')
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    } else {
      commit('REMOVE_FROM_CART', payload)
      commit('UPDATE_SUB_TOTAL')
    }
  },
  getCartFromApi ({ commit, getters }, fromLogin = false) {
    commit('START_CART_LOADING')
    return new Promise((resolve, reject) => {
      axios
        .getCart()
        .then((res) => {
          const { items, ...details } = res.data
          const updatedResponse = [...items]
          if (fromLogin) {
            commit('UPDATE_CART_FROM_API', updatedResponse)
            updateCartApi(getters.filteredCartForApi)
          } else {
            commit('UPDATE_STATE_WITH_BULK_ARRAY', updatedResponse)
          }
          commit('UPDATE_CART_DETAILS', details)
        })
        .catch(() => {})
        .finally(() => {
          commit('STOP_CART_LOADING')
        })
    })
  },
  resetCartConfiguration ({ commit }) {
    commit('RESET_CART_DATA')
  },
  getOrderSummary ({ commit }, payload) {
    axios.orderSummary(payload).then((res) => {
      commit('UPDATE_ORDER_SUMMRY', res.data)
    })
  }
}
