<template>
  <v-img
    :src="src"
    :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
    aspect-ratio="1"
    class="grey lighten-2"
    :style="{ 'height': imageHeight, 'width': imageWidth, ...customStyle} "
  >
    <v-layout
      slot="placeholder"
      fill-height
      align-center
      justify-center
      ma-0
    >
      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  props: {
    src: String,
    height: [Number, String],
    width: [Number, String],
    customStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    imageHeight () {
      return typeof this.height === 'number' ? this.height + 'px' : this.height
    },
    imageWidth () {
      return typeof this.width === 'number' ? this.width + 'px' : this.width
    }
  }
}
</script>
