<script>
  export default {
    data () {
      return {
        menus: [
          {
            id: 1,
            link: '/sneakers',
            text: 'Sneakers'
          },
          {
            id: 2,
            link: '/jerseys',
            text: 'Jerseys'
          },
          {
            id: 3,
            link: '/accessories',
            text: 'Accessories'
          }
        ],
        open: false
      }
    },
    methods: {
      changeOpen() {
        this.open = !this.open
      }
    }
  }
</script>

<template>
  <div class="navbar" :class="{'open': open}">
    <div class="navbar-container">
      <div class="navbar-item navbar-brand">
        Hoops Essentials
      </div>
      <div class="navbar-item__wrapper">
        <NuxtLink v-for="(menu, index) in menus" :key="index" :to="menu.link" class="navbar-item">
          {{ menu.text }}
        </NuxtLink>
      </div>
      <button class="navbar-ham" @click="changeOpen">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
