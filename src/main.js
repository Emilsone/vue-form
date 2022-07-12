import Vue from 'vue'
import ShoppingList from './ShoppingList.vue'
import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(ShoppingList),
}).$mount('#app')
