<template>
  <section id="brands" class="brand-section container">
    <div class="grid-container-5">
      <NuxtLink v-for="(brand, i) in getBrands" :key="i" :to="`/products?brand=${brand.slug}`" class="brand-wrapper">
        <img :src="`/images/brands/${brand.image}`" class="brand-image width-100" :alt="`${brand.name} Image`" placeholder loading="lazy"/>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters('Brand', ['getBrands'])
    },
  }
</script>

<style lang="scss" scoped>
.brand-section {
  .brand-wrapper {
    padding: 32px;


    .brand-image {
      transition: all 0.3s ease;
      opacity: 0.5;

      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>
