<template>
  <div>
    <h3>当前求和为：{{$store.state.sum}}</h3>
    <select v-model.number="chooseVal">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等等再加</button>
  </div>
</template>

<script>
export default {
  name: "CountC",
  data() {
    return {
      chooseVal: 1, // 用户选择的数字
      // sum:0
    };
  },
  methods: {
    increment(){
      // this.sum += this.chooseVal
      /**
       * 这里面调用dipatch，把选中的值用'jia'函数的参数传过去，
       * this.$store.dispatch('jia', this.chooseVal)
       * 传到action里通过commit传到mutation，
       *    jia(context,value) {
       *      context.commit('JIA', value)
       *    }
       * 到了mutation,可以直接操作数据，一般函数名用大写
       *    JIA(state,value){
       *      state.sum += value
       *    }
       */
      this.$store.dispatch('jia', this.chooseVal)
    },
    decrement(){
      // this.sum -= this.chooseVal
    },
    incrementOdd(){
      // if(this.sum % 2){
      //   this.sum += this.chooseVal
      // }
    },
    incrementWait(){
      setTimeout(()=>{
        // this.sum += this.chooseVal
      },2000)
    },
  },
};
</script>

<style scoped>

</style>>