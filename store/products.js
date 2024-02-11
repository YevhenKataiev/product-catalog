import axios from 'axios'
export const state = () => ({
  productsList: []
})

export const getters = {
  getProductById: state => (id) => {
    return state.productsList.find(elem => elem.id === id)
  }
}

export const actions = {
  async fetchProductsList({ commit }) {
    const { data } = await axios.get('http://localhost:3001/')
    commit('setProductsList', data)
  },
  async fetchProductById({ commit }, id) {
    const { data } = await axios.get(`http://localhost:3001/${id}`)
    commit('setProductsList', data)
  }
}

export const mutations = {
  setProductsList(state, list) {
    state.productsList = list
  }
}
