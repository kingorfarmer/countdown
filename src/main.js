import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import './assets/tailwind.css'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     }
//   }
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
