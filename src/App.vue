<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-snackbar
      v-model="showSnackBar"
      bottom
    >
      {{ snackBarText }}
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  computed: mapState({
    showSnackBar: state => state.app.showSnackBar,
    snackBarText: state => state.app.snackBarText
  })
}
</script>
