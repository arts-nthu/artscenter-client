// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import $ from 'jquery'

import { sync } from 'vuex-router-sync'
import store from './store'

import VueI18n from 'vue-i18n'

sync(store, router)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueI18n)

//i18n
import en from '../static/i18n/en.json'
import ch from '../static/i18n/ch.json'

import "fullcalendar/dist/fullcalendar.min.css";

const locale = 'ch'
const messages = {
  en,
  ch
}
const i18n = new VueI18n({
  locale,
  messages
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
