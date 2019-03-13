<template>
  <div class="card-wrapper">
    <v-card class="card">
      <v-card-text>
        <h1 class="mb-3 text-xs-center">Error 404</h1>
        <span class="mb-3 d-block text-xs-center">Page not found</span>
        <router-link tag='div' to='/'>
          <v-btn dark block>Bring me back</v-btn>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  max-height: 400px;
  width: 40%;
  max-width: 400px;
}
</style>
