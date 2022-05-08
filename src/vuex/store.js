import Vue from "vue";
import Vuex from "vuex";

// 使用vuex插件
Vue.use(Vuex)

// state:用于准备存储数据
const state = {
    sum:0
}
// actions:用于响应组件中的动作
const actions = {
  // 函数的两个参数分别是：上下文参数mini版的$store，一般用里面的commit
  jia(context,value) {
    context.commit('JIA', value)
  }
}
// mutations:用于操作state数据,里面方法需大写
const mutations = {
  JIA(state,value){
    state.sum += value
  }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
})
// 创建并暴露store
export default store