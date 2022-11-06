<template>
  <input type="text" class="base-input" :placeholder="placeholder || 'Masukan Teks'" @input="handleInput">
</template>

<script>
  export default {
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      placeholder: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleInput (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.base-input {
  outline: none;
  padding: 8px 16px;
  border: solid 1px $black-04;
  border-radius: 4px;

  &:focus {
    border: solid 1px $primary;
  }
}
</style>
