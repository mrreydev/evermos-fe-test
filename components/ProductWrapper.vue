<script>
  export default {
    props: {
      column: {
        type: Number,
        default: 5
      },
      products: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<template>
  <div :class="`grid-container-${column}`">
    <BaseCardProduct v-for="(product, i) in products" :key="i" :product="product"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
