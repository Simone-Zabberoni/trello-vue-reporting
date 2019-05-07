import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  // change with your gtag UA
  id: 'UA-139852903-1'
})

Vue.config.productionTip = false

require('@/assets/style.css')

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
