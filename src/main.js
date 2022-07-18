import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import './main.css'
import './assets/formulate.css'

Vue.config.productionTip = false
Vue.use(VueFormulate)

new Vue({
  render: h => h(App),
}).$mount('#app')

