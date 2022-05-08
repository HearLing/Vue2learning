import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
   // 全局安装事件总线
   beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
