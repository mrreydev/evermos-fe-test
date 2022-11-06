export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories (state, payload) {
    state.categories = payload
  }
}

export const getters = {
  getCategories (state) {
    return state.categories
  }
}

export const actions = {
  getCategories ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/categories', payload)
        .then((response) => {
          commit('setCategories', response.data)
          resolve(response)
        })
          .catch((error) => {
            reject(error)
          })
    })
  }
}
