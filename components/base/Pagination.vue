<template>
  <div class="pagination">
    <button v-for="(page, i) in pages" :key="i" class="pagination-item btn btn-primary mr-8" @click="toUrl(page.url)">
      {{ page.label }}
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      paginateObj: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      pages() {
        if (this.paginateObj && Object.keys(this.paginateObj).length) {
          const pages = []
          for (const [key, value] of Object.entries(this.paginateObj)) {
            pages.push({
              label: key,
              url: value
            })
          }

          return pages
        }
        return []
      }
    },
    methods: {
      toUrl(url) {
        const pageIdx = url.indexOf('_page=')
        const firstAnd = url.indexOf('&')
        const page = Number(url.substring(pageIdx + 1, firstAnd + 1).replace(/\D+/g, ""))
        this.$emit('change-page', page)
      }
    }
  }
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;

  &-item {
    text-transform: uppercase;
  }
}
</style>
