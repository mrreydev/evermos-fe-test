<script>
import mixin from '@/mixins'
  export default {
    mixins: [mixin],
    props: {
      product: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<template>
  <NuxtLink :to="`/products/${product.id}`" class="card">
    <img :src="`/images/products/${product.image}.jpg`" alt="Nike 1" class="card-img">
    <div class="card-info">
      <h5 class="card-info__title">{{ product.brand }}</h5>
      <p class="card-info__text">{{ product.name }}</p>
      <h5 class="card-info__price">{{ formatRupiah(product.price) }}</h5>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>

</style>
