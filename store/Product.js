import mixin from '@/mixins'

export const state = () => ({
  products: {},
  product: {},
  tes: {}
})

export const mutations = {
  setProducts(state, payload) {
    const { products, paginate } = payload
    let productObj = {
      data: products
    }
    if (paginate) {
      const formatedPage = mixin.methods.parseLinkHeader(paginate)
      productObj = Object.assign(productObj, {
        ...formatedPage
      })
    }

    state.products = productObj
  },
  setProduct(state, payload) {
    state.product = payload
  }
}

export const getters = {
  getProductsOnly (state) {
    return state.products.data || []
  },
  getPageConfig (state) {
    const prodObj = JSON.parse(JSON.stringify(state.products))
    delete prodObj.data
    return prodObj
  }
}

export const actions = {
  getProducts({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/products', payload)
        .then((response) => {
          const products = response.data
          const paginate = response.headers.link

          commit('setProducts', {
            products,
            paginate
          })
          resolve(response)
        })
          .catch((error) => {
            reject(error)
          })
    })
  },
  showProduct({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/products/${payload.id}`, payload)
        .then((response) => {
          commit('setProduct', response.data)
          resolve(response)
        })
          .catch((error) => {
            reject(error)
          })
    })
  }
}
