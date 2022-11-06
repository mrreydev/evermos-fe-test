<template>
  <div class="product-image-wrapper">
    <img :src="`/images/products/${product.image}.jpg`" class="product-image" alt="product-img">
    <!-- <div class="preview-wrapper">
      <img v-for="i in 3" :key="i" :src="`/images/products/jersey-${(i+1)}.jpg`" alt="preview-image" class="preview-image">
    </div> -->
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="scss" scoped>
.product-image-wrapper {
  .product-image {
    width: 100%;
    border-radius: 4px;
  }

  .preview-wrapper {
    display: flex;
    justify-content: space-around;

    .preview-image {
      width: 100px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
}
</style>
