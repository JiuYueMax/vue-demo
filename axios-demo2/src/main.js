import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import axios from "axios"
// 第一个axios可以当做全局的访问前缀
Vue.prototype.axios=axios

new Vue({
  render: h => h(App),
}).$mount('#app')

