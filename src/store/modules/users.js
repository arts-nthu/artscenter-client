

// initial state
const state = {
  token: null,
  user: null,
  isUserLoggedIn: false,
}

// getters
const getters = {
  fetchToken: state => {
    return state.token
  }

}

// actions
const actions = {
  setToken({commit},token) {
    commit('setToken',token)
  },
  setUser({commit},user) {
      commit('setUser',user)
  },
}

// mutations
const mutations = {
    setToken (state, token) {
        state.token = token
        if(token){
            state.isUserLoggedIn = true
        } else {
            state.isUserLoggedIn = false
        }
    },
    setUser (state, user) {
        state.user = user
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
