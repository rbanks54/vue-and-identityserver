import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const globalData = {
  isAuthenticated: false,
  token: ''
}

const globalMethods = {
  async authenticate(returnPath) {
    console.log('yet to be implemented');
  }
}

new Vue({
  router,
  data: globalData,
  methods: globalMethods,
  render: h => h(App),
}).$mount('#app')
