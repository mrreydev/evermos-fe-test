<script>
  export default {
    props: {
      column: {
        type: Number,
        default: 5
      }
    }
  }
</script>

<template>
  <div :class="`grid-container-${column}`">
    <BaseCardProduct v-for="i in 10" :key="i" />
  </div>
</template>

<style lang="scss" scoped>

</style>
