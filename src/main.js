import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/tailwind.css'

Vue.use(Vuex)

import storeConfigs from './store'
const store = new Vuex.Store(storeConfigs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
