<template>
  <div class="person-list">
    <!-- 展示用户列表 -->
    <div class="person-item" v-show="info.users.length" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <!-- img标签自适应响应式，图片的宽度不能超过图片所在空间的宽度 -->
        <img :src="user.avatar_url" alt="用户头像" style="max-width: 100%" />
      </a>
      <div>{{ user.login }}</div>
    </div>
    <!-- 欢迎页 -->
    <h3 v-show="info.isFirst">welcome</h3>
    <!-- loading -->
    <div v-show="info.isLoading">Loading...</div>
    <!-- 错误页 -->
    <div v-show="info.errMsg">请求出错了，错误信息：{{info.errMsg}}</div>
  </div>
</template>

<script>
export default {
  name: "PersonList",
  data() {
    return {
      info: {
        users: [], // 用户列表
        isFirst: true, // 是否初次展示，初次展示欢迎页
        isLoading: false, // 痴线列表前加载中
        errMsg: "", // 错误信息
      },
    };
  },
  mounted() {
    /**
     * 通过事件总线拿到search组件请求来的数据
     * 前提是App.js里面安装了事件总线
     */
    this.$bus.$on("getListData", (dataObj) => {
      // ...this.info 是把info里面所有属性都放在这，要是重名以后面的为主
      this.info = {...this.info,...dataObj};
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-list {
  display: flex;
  /* 子元素超出父元素换行 */
  flex-wrap: wrap;
}
.person-item {
  width: 25%;
  border: 1px solid grey;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 15px;
}

</style>