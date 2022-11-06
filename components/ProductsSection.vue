<script>
  export default {
    props: {
        column: {
            type: Number,
            default: 5
        }
    }
}
</script>

<template>
  <div class="container">
    <h2 class="mb-16">
      Produk Terlaris
    </h2>
    <ProductWrapper />
  </div>
</template>

<style lang="scss" scoped>

</style>
