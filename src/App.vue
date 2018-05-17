<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Header msg="Trello reporting tool v0.2"/>
    <Login />
    <hr>
    <Boards />
 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Boards from './components/Boards.vue'

export default {
  name: 'app',
  components: {
    Header,
    Login,
    Boards
  }, 
  
}

</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
