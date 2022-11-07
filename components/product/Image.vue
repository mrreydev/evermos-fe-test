<template>
  <div class="product-image-wrapper">
    <img :src="`/images/products/${product.image}.jpg`" class="product-image" alt="product-img">
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
