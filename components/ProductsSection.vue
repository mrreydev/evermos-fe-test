<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('Product', ['getProductsOnly'])
  }
}
</script>

<template>
  <section id="products" class="container">
    <h2 class="mb-24 text-center">
      Produk Terlaris
    </h2>
    <ProductWrapper :column="5" :products="getProductsOnly" />
  </section>
</template>

<style lang="scss" scoped>

</style>
