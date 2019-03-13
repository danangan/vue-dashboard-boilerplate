<template>
  <div class="loader-bg">
    <v-progress-circular
      indeterminate
      color="tertiary"
      class="loader mb-4"
    ></v-progress-circular>
  </div>
</template>

<style lang="scss" scoped>
.loader-bg {
  background-color: rgba($color: #000000, $alpha: 0.2);
  z-index: 99999999;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
