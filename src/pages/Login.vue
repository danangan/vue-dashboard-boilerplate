<i18n>
{
  "en": {
    "title": "Please login to continue",
    "submit": "submit"
  },
  "idn": {
    "title": "Silahkan login untuk masuk",
    "submit": "kirim"
  }
}
</i18n>

<template>
  <div class="card-wrapper">
    <v-card class="card elevation-2">
      <v-card-title class="title">
        <h1 class="display-1 mt-3">Sample</h1>
        <h2 class="subheading mt-3">{{$t('title')}}</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Username"
          v-model="username"
          outline
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          outline
        ></v-text-field>
        <v-btn
          block
          primary
          dark
          large
          @click="login"
          :loading="isLoading"
          class="primary-gradient-bg"
        >
          {{$t('submit')}}
        </v-btn>
        <v-layout justify-center class='mt-3'>
          <LocaleSelector />
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// import axios from 'axios'

// Locale selector components
import LocaleSelector from '@/components/LocaleSelector'

// localization component
import localization from '@/mixins/localization'

export default {
  name: 'Login',
  mixins: [
    localization
  ],
  components: {
    LocaleSelector
  },
  data () {
    return {
      username: 'admin',
      password: 'admin',
      isLoading: false
    }
  },
  methods: {
    ...mapMutations({
      changeAuthState: 'auth/changeAuthState',
      changeShowSnackBar: 'app/changeShowSnackBar',
      changeSnackBarText: 'app/changeSnackBarText'
    }),
    async login () {
      this.isLoading = true

      try {
        setTimeout(() => {
          this.changeSnackBarText('Login berhasil')
          this.changeShowSnackBar(true)
          this.changeAuthState(true)
          this.$router.push('/')

          setTimeout(function () {
            this.changeShowSnackBar(false)
          }, 2000)
        }, 800)
      } catch (error) {
        this.changeSnackBarText('Error while logging in')
        this.changeShowSnackBar(true)
      }
    },
    async get () {

    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  // max-height: 400px;
  width: 40%;
  max-width: 400px;
}

.logo {
  max-height: 60px;
  display: block;
}

.title {
  flex-direction: column;
}
</style>
