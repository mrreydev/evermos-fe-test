<template>
  <div class="detail-product">
    <div class="container">
      <div class="flex-column">
        <div class="flex-row">
          <div class="image-showcase">
            <ProductImage />
          </div>
          <div class="product-info d-flex">
            <ProductInfo />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="mb-16">Produk Lainnya</h2>
      <ProductWrapper />
    </div>
  </div>
</template>

<script>
  export default {

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
