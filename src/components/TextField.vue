<template>
  <div class='custom-input--container'>
    <span class='custom-input--label'>{{ label }}</span>
    <input
      :autofocus="autofocus"
      :value="value"
      class='custom-input--field'
      type='text'
      @input="onChangeValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    autofocus: {
      type: Boolean,
      default: false
    },
    inputWidth: {
      type: Number
    }
  },
  methods: {
    onChangeValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.custom-input--container {
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;
}

.custom-input--label {
  margin-bottom: 3px;
  font-weight: normal;
}

.custom-input--field {
  flex: 1 1 auto;
  border: 1px solid rgba($color: #000000, $alpha: 0.3);
  outline: none;
  border-radius: 5px;
  padding:10px 15px;
  &:focus {
    border: 1px solid var(--v-primary-base);
    caret-color: var(--v-primary-base);
  }
}
</style>
