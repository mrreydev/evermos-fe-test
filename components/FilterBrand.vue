<script>
  export default {
    props: {
      brands: {
        type: Array,
        default: () => ([])
      }
    },
    data() {
      return {
        active: ''
      }
    },
    methods: {
      handleClick(value) {
        this.active = value
        this.$emit('filter-change', value)
      }
    }
  }
</script>

<template>
  <div class="list list-wrapper">
    <a v-for="(brand, index) in brands" :key="index" href="#" class="list-item" :class="{'active': brand.slug === $route.query.brand}" @click.prevent="handleClick(brand.slug)">
      {{ brand.name }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.list {
  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-item {
    padding: 16px;
    cursor: pointer;
    border-bottom: solid 1px $black-04;
    background-color: $white;
    border-radius: 4px;

    &:last-child {
      border: none;
    }

    &.active {
      background-color: $primary;
      color: $white
    }
  }
}
</style>
