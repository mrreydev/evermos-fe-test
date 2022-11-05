<script>
  export default {
    data() {
      return {
        images: [
          '/carousel/1.jpg',
          '/carousel/2.jpg',
          '/carousel/3.jpg',
          '/carousel/4.jpg'
        ],
        timer: null,
        currentIndex: 0,
        imageHeight: '600px'
      }
    },
    computed: {
      currentImg() {
        const index = Math.abs(this.currentIndex) % this.images.length
        return this.images[index]
      }
    },
    mounted() {
      // this.startSlide()
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize)
      })
      this.onResize()
    },
    methods: {
      startSlide() {
        this.timer = setInterval(this.next, 4000);
      },
      next() {
        this.currentIndex += 1
      },
      prev() {
        this.currentIndex -= 1
      },
      onResize () {
        if (process.client && this.$refs.imgPreview) {
          const img = this.$refs.imgPreview[0]
          const height = img.offsetHeight || 0
          this.imageHeight = height === 0 ? '600px' : `${img.offsetHeight}px`
        }
      }
    }
  }
</script>

<template>
  <div class="container carousel">
    <transition-group name="fade" tag="div" class="carousel-wrapper" :style="`height: ${imageHeight};`">
      <div v-for="i in [currentIndex]" :key="i">
        <img ref="imgPreview" :src="currentImg" style="width: 100%;"/>
      </div>
    </transition-group>
    <a class="prev" href="#" @click="prev">&#10094;</a>
    <a class="next" href="#" @click="next">&#10095;</a>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;

  @media screen and (min-width: $display-md) {
    padding-top: 24px;
  }

  &-wrapper {
    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 100px;
    text-decoration: none;
    user-select: none;
    background-color: $black-03;

    &:hover {
      background-color: $black-01;
    }
  }

  .next {
    right: 24px;
  }

  .prev {
    left: 24px;
  }
}
</style>
