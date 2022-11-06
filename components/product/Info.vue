<template>
  <div class="product-info-wrapper">
    <h5 class="product-info__brand">
      {{ product.brand || '-' }}
    </h5>
    <p class="product-info__name">
      {{ product.name || '-' }}
    </p>
    <p class="product-info__stats">
      Sold (12) | Views (85) | Wishlist(1)
    </p>
    <h4 class="product-info__price">
      {{ formatRupiah(product.price) || '-' }}
    </h4>
    <div v-if="product.variants && product.variants.length" class="product-info__variant">
      <p class="mb-8 font-base-normal">Varian</p>
      <div class="variants">
        <BaseRadioVariant v-for="(variant, index) in product.variants" :key="index" v-model="selectedVar" :label="variant" :value="variant" />
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
import mixin from '@/mixins'
  export default {
    mixins: [mixin],
    props: {
      product: {
        type: Object,
        default: () => ({})
      }
    },
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
    margin: auto;
  }

  &__brand {
    text-transform: capitalize;
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
