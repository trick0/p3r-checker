import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = require('./store')

new Vue({
  router,
  store: store.default,
  render: function (h) { return h(App) }
}).$mount('#app')
