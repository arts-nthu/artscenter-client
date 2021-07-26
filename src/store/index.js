import Vue from 'vue'
import Vuex from 'vuex'
import banners from './modules/banners'
import exhibitions from './modules/exhibitions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    banners,
    exhibitions,
  },
  strict: true,
})
