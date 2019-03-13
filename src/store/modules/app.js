const state = {
  showSnackBar: false,
  snackBarText: '',
  locale: 'en'
}

const actions = {

}

const mutations = {
  changeShowSnackBar (state, show) {
    state.showSnackBar = show
  },
  changeSnackBarText (state, text) {
    state.snackBarText = text
  },
  changeLocale (state, newLocale) {
    state.locale = newLocale
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
