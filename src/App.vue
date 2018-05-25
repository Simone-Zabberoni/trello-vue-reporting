<template>
  <div id="app">
    <div>
        <img src="./assets/logo.png">
        <h1>Trello reporting tool v0.0.3</h1>
        <p>VueJS Version</p>
    </div>
    <Login />
    <hr>
    <Boards />
 
  </div>
</template>

<script>

import Login from './components/Login.vue'
import Boards from './components/Boards.vue'

export default {
  name: 'app',
  components: {
    Login,
    Boards
  }, 
  
}

</script>



<style>
#app {
  font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
    text-decoration: underline;
    font-style: italic;

    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

h3 {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

.board {
   /* border-color: red; 
    border-style: solid;  */
    
}

.list {
    /*border-color: green; 
    border-style: solid;*/
}

.card {
    /*border-color: purple; 
    border-style: solid; */
    background-color: WhiteSmoke;
    margin: 5px;
    padding: 2px;
}

.card-headder {
    float: left;
}

.card-name {
    float: left;
    text-align: left; 
}

.card-labels {
    float: left;
}

.card-label-object {
    color: white;
    font-variant: small-caps;
    font-style: italic;
    font-size: small;

    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
    border-radius: 5px;
    float: left;
}

.card-body {
    text-align: left; 
    clear: both; 
    float: none;
    
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}


</style>
