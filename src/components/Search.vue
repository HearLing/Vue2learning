<template>
  <div>
    <h2>Search Github Users</h2>
    <input
      type="text"
      placeholder="enter the name your search"
      onfocus="this.placeholder=''"
      v-model="inputValue"
    />
    <button class="SearchBtn" @click="searchUsers">Search</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      inputValue: "",// 用户输入搜索的内容
    };
  },
  methods: {
    searchUsers() {
      // 请求前，更新list数据
      this.$bus.$emit("getListData",{isFirst:false,isLoading:true,errMsg:'',users:[]})
      // `...`是模板字符串,意思就是字符串里面有模板,这样就能识别里面的模板
      axios.get(`http://api.github.com/search/users?q=${this.inputValue}`).then(
        (response) => {
          // 得到数据，触发自定义事件
          this.$bus.$emit('getListData',{isLoading:false,errMsg:'',users:response.data.items})
        },
        (error) => {
          // 请求后更新list数据
          this.$bus.$emit("getListData",{isLoading:false,errMsg:error.message,users:[]})
        }
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SearchBtn {
  margin-left: 5px;
}
</style>