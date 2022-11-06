export const state = () => ({
  brands: []
})

export const mutations = {
  setBrands (state, payload) {
    state.brands = payload
  }
}

export const getters = {
  getBrands (state) {
    return state.brands
  }
}

export const actions = {
  getBrands({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/brands', payload)
        .then((response) => {
          commit('setBrands', response.data)
          resolve(response)
        })
          .catch((error) => {
            reject(error)
          })
    })
  }
}
