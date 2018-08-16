<template>
  <div id="app">
    <div class="header">
        <div class="header">
            <h1> <img src="./assets/logo.png" style="width: 20px"> Trello reporting tool v0.0.5</h1>
            <p>VueJS Version - Simone Zabberoni </p>
        </div>
    </div>
    
    <div class="status">
        <hr>
        <Login />              
    </div>
        
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
  margin-top: 5px;
}

p {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

div  {
    clear: both; 
    float: none;
}

h1 {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

h2 {
    text-align: left;
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
    clear: both; 
    float: none;
}

.board-header {
    text-align: left;  
    border-style:  
}

.board-toggler {
    float: left;
    clear: none;   
}

.board-selector {
    clear: none;
    float: left;
}

.board-buttons {
    clear: none;
    float: left;
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

.card-header {
    float: left;
}

.card-name {
    float: left;
    text-align: left; 
}

.card-labels {
    float: left;
    clear: none;
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
    clear: none;
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


.card-comment-box {
    background-color: White;  
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 2px; 
}

.card-comment {
    font-style: italic;
    font-size: small;
    padding-left: 4px;
}

.header {
    float: left;
    clear: none;
}

.status {
    
}

.loginHeader {
    padding-top: 5px;
    text-align: left;
}

.loginHeader p {
    font-style: italic;
    font-size: small;
}

.board-selector {
    padding-top: 10px;
    text-align: left;
}

.board-selector p {
    font-style: italic;
    font-size: small;
}


</style>
