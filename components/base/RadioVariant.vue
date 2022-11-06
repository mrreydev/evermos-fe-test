<template>
  <label class="radio-variant mr-3">
    <input
      type="radio"
      :disabled="disabled"
      name="product"
      class="radio-variant__input"
      :checked="isChecked"
      :value="value"
      @change="$emit('change', $event.target.value)"
    >
    <div class="radio-variant--background">
      <div class="radio-variant__info">
        {{ label }}
      </div>
    </div>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: undefined
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isChecked () {
      return this.modelValue === this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-variant {
    // width: 100%;

    &__input {
        display: none;

        & ~ .radio-variant--background {
          border: solid 1px $black-04;
        }
        &:checked ~ .radio-variant--background {
          border: solid 1px $primary;
          opacity: 1 !important;

         .radio-variant__check {
           &::before {
            background: $primary;
           }
         }

        }
        &:disabled ~ .radio-variant--background {
          cursor: not-allowed;
          opacity: 0.5;
        }
    }

    &--background {
        //margin: 10px;
        padding: 8px;
        border-radius: 8px;
        margin: 4px;
    }

    &--background:hover {
        cursor: pointer;
    }

    &__info {
      font-size: $fs-sm;
    }

    &__check {
      text-align: center;
      width: 24px;
      height: 24px;
      border: 1px solid #c6c6c6;
      border-radius: 50%;
      cursor: pointer;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border-radius: 32px;
        width: 16px;
        height: 16px;
        background: transparent;
      }
    }
}

</style>
