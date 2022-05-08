<template>
  <div id="app">
    <Count /> 
  </div>
</template>

<script>
import Count from './components/Count.vue'

export default {
  name: 'App',
  components: {
    Count,
  }
}
</script>

<style>
#app {
  width: 70%;
  color: #2c3e50;
  border: 1px solid gray;
  text-align: center;
  margin: 50px auto;
  padding: 20px;
}
</style>