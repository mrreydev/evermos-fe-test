<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="container container-padding product-catalogue">
    <div class="flex-column">
      <div class="flex-row">
        <div class="filter-wrapper">
          <h3 class="mb-16">Brands</h3>
          <FilterBrand />
        </div>
        <div class="product-wrapper">
          <ProductWrapper :column="4" />
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

    @media screen and (min-width: $display-lg) {
      flex-direction: row;
    }

    .filter-wrapper, .product-wrapper {
      width: 100%;
      padding: 0 24px;
    }

    .filter-wrapper {
      @media screen and (min-width: $display-lg) {
        width: 25%;
      }
    }
  }
}
</style>
