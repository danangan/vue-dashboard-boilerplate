<template>
  <div class='custom-input--container'>
    <span class='custom-input--label'>{{ label }}</span>
    <div
      class='custom-input--field'
    >
      <select
        ref="selectInput"
        :value="value"
        class="select-input"
        @input="onChangeValue"
      >
        <option v-for="(item, idx) in items" :key="idx" :value="item">
          {{item}}
        </option>
      </select>
      <v-icon
        class='icon'
        size='20'
      >
        arrow_drop_down
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onChangeValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-input--field {
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
}

.select-input {
  padding: 10px 15px;
  outline: none;
  flex: 1 1 auto;
}

.icon {
  line-height: 33px;
  width: 25px;
  position: absolute;
  right: 0;
}
</style>
