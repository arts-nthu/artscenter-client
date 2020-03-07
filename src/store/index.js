import Vue from 'vue'
import Vuex from 'vuex'
import banners from './modules/banners'
import exhibitions from './modules/exhibitions'
import users from './modules/users'
import medias from './modules/medias'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    banners,
    exhibitions,
    users,
    medias,
  },
  strict: true,
})
