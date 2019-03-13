const state = {
  isAuthenticated: false
}

const actions = {

}

const mutations = {
  changeAuthState (state, isAuth) {
    state.isAuthenticated = isAuth
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
