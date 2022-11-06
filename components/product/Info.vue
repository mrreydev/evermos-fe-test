<template>
  <div class="product-info-wrapper">
    <h5 class="product-info__brand">
      Nike
    </h5>
    <p class="product-info__name">
      Pelicans Statement Jersey
    </p>
    <p class="product-info__stats">
      Sold (12) | Views (85) | Wishlist(1)
    </p>
    <h4 class="product-info__price">
      Rp999.000
    </h4>
    <div class="product-info__variant">
      <p class="mb-8 font-base-normal">Varian</p>
      <div class="variants">
        <BaseRadioVariant v-for="(variant, index) in variants" :key="index" v-model="selectedVar" :label="variant.label" :value="variant.value" />
      </div>
    </div>
    <div class="d-flex">
      <button class="btn btn-primary">
        Tambah Ke Keranjang
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedVar: '',
        variants: [
          {
            label: 'Wing Zero',
            value: 'wing-zero'
          },
          {
            label: 'Freedom',
            value: 'freedom'
          },
          {
            label: 'Infinite Justice',
            value: 'infinite-justice'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.product-info {
  &-wrapper {
    margin: auto 0;
  }

  &__brand {
    font-size: $fs-sm;
    font-weight: $fw-bold;
    margin-bottom: 8px
  }

  &__name {
    font-size: $fs-base;
    margin-bottom: 8px;
  }

  &__stats {
    font-size: $fs-sm;
    margin-bottom: 16px;
  }

  &__price {
    font-size: $fs-lg;
    font-weight: $fw-semibold;
    margin-bottom: 16px;
  }

  &__variant {
    display: block;
    margin-bottom: 16px;

    .variants {
      display: flex;
      flex-wrap: wrap;
    }
  }
}

@media screen and (min-width: $display-md) {
  .product-info {
    &-wrapper {
      margin: auto 0;
    }

    &__brand {
      font-size: $fs-base;
      margin-bottom: 8px
    }

    &__name {
      font-size: $fs-lg;
      margin-bottom: 8px;
    }

    &__stats {
      font-size: $fs-sm;
      margin-bottom: 16px;
    }

    &__price {
      font-size: $fs-lg;
      margin-bottom: 16px;
    }

    &__variant {
      display: block;
      margin-bottom: 16px;

      .variants {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
