<template>
  <div class="height-100vh text-center d-flex">
    <div class="margin-auto">
      <img src="/images/not-found/404.svg" alt="not-found" class="width-50 mb-24">
      <template  v-if="error.statusCode === 404">
        <h2 class="mb-16">
          Halaman Tidak Ditemukan
        </h2>
      </template>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/" class="btn btn-primary">Kembali Ke Menu Utama</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style lang="scss" scoped>

</style>
