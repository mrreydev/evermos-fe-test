<script>
import { mapState, mapGetters } from 'vuex'
import mixin from '@/mixins'
export default {
  mixins: [mixin],
  async asyncData({ params, query,  store }) {
      try {
        await store.dispatch('Brand/getBrands')
        await store.dispatch('Category/getCategories')
        const payload = {
          params: {
            _page: query.page || 1,
            _limit: 12,
            brand: query.brand || null,
            q: query.q || null
          }
        }

        await store.dispatch('Product/getProducts', payload)
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error
        console.error(errorMessage)
      }
  },
  data () {
    return {
      currentPage: 1,
      inputSearch: ''
    }
  },
  computed: {
    ...mapState('Product', ['products']),
    ...mapGetters('Product', ['getProductsOnly', 'getPageConfig']),
    ...mapGetters('Brand', ['getBrands'])
  },
  watchQuery: true,
  methods: {
    onPageChange(value) {
      this.currentPage = value
    },
    handleChangePage(page) {
      this.setQuery({
        page
      })
    },
    handleFilterChange(brand) {
      this.setQuery({
        brand,
        page: 1
      })
    },
    handleInputSearch(value) {
      setTimeout(() => {
        this.setQuery({
          q: value,
          page: 1
        })
      }, 1000);
    }
  }
}
</script>

<template>
  <div class="container product-catalogue">
    <div class="flex-column height-100vh">
      <div class="flex-row">
        <div class="filter-wrapper mb-24">
          <h3 class="mb-16">Brands</h3>
          <FilterBrand :brands="getBrands" @filter-change="handleFilterChange" />
        </div>
        <div class="product-wrapper">
          <div class="mb-16">
            <BaseInput v-model="inputSearch" placeholder="Cari Produk" @input="handleInputSearch"/>
          </div>
          <template v-if="getProductsOnly.length">
            <ProductWrapper :column="4" :products="getProductsOnly" class="mb-16"/>
            <BasePagination :paginate-obj="getPageConfig" @change-page="handleChangePage"/>
          </template>
          <template v-else>
            <div class="flex-column">
              <img src="/images/not-found/404.svg" class="width-50 margin-auto" alt="">
              <div class="text-center mt-16">
                <p class="mb-24">
                  Produk Tidak Ditemukan
                </p>
                <button class="btn btn-primary" @click="setQuery({})">Reset Filter</button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-catalogue {
  .flex-row {
    flex-direction: column;
    margin: 0;

    .filter-wrapper, .product-wrapper {
      width: 100%;
      padding: 0;
    }

    .filter-wrapper {
      @media screen and (min-width: $display-lg) {
        width: 25%;
      }
    }
  }
}

@media screen and (min-width: $display-lg) {
  .product-catalogue {
    .flex-row {
      flex-direction: row;

      .filter-wrapper, .product-wrapper {
        padding: 0 24px
      }
    }
  }
}

</style>
