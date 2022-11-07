<script>
export default {
  name: 'IndexPage',
  async asyncData({ params, store }) {
      try {
        await store.dispatch('Brand/getBrands', {
          params: {
            _limit: 5
          }
        })
        const payload = {
          params: {
            _limit: 10
          }
        }

        await store.dispatch('Product/getProducts', payload)
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error
        console.error(errorMessage)
      }
  },
  data() {
    return {
      test: ""
    }
  }
}
</script>

<template>
  <div class="main">
    <CarouselMain />
    <BrandSection />
    <ProductsSection />
    <div class="container text-center">
      <NuxtLink to="/products" class="btn btn-primary">Lihat Lebih Banyak</NuxtLink>
    </div>
  </div>
</template>
