<template>
  <div id="app">
    <Search /> 
    <PersonsList/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import PersonsList from './components/PersonsList'

export default {
  name: 'App',
  components: {
    Search,
    PersonsList
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