import Vue from 'vue'
import App from './App.vue'
// 产品发布的时候需要提示信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// mount=el