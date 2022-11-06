<template>
  <div class="detail-product">
    <div class="container">
      <div class="flex-column">
        <div class="flex-row">
          <div class="image-showcase">
            <ProductImage :product="product"/>
          </div>
          <div class="product-info d-flex">
            <ProductInfo :product="product"/>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="mb-16">Produk Lainnya</h2>
      <ProductWrapper :products="getProductsOnly"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
  export default {
    async asyncData({ params, store }) {
      try {
        await store.dispatch('Product/showProduct', {
          id: params.id
        })

        const payload = {
          params: {
            _page: 1,
            _limit: 5
          }
        }

        await store.dispatch('Product/getProducts', payload)
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error
        console.error(errorMessage)
      }
    },
    computed: {
      ...mapState('Product', ['product']),
      ...mapGetters('Product', ['getProductsOnly'])
    }
  }
</script>

<style lang="scss" scoped>
.detail-product {
  .flex-row {
    flex-direction: column;
  }
  .image-showcase {
    width: 100%;
    margin-bottom: 24px;
  }

  .product-info {
    width: 100%;
    padding: 0 16px;
  }
}

@media screen and (min-width: $display-lg) {
  .detail-product {

    .flex-row {
      flex-direction: row;
    }
    .image-showcase {
      width: 40%;
    }

    .product-info {
      width: 60%;
    }
  }
}
</style>
