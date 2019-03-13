<template>
  <div class='custom-input--container'>
    <span class='custom-input--label'>{{ label }}</span>
    <textarea
      :rows="rows"
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
    rows: {
      type: [Number, String],
      default: 4
    }
  },
  methods: {
    onChangeValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
