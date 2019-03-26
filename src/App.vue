<template>
  <div id="app">
    <div class="header">
      <h1>
        <img src="./assets/logo.png" style="width: 20px" /> Zab's Trello
        reporting tool - v0.0.7
      </h1>

      <Login />
      <Navbar />
    </div>

    <Boards />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Boards from './components/Boards.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Login,
    Boards,
    Navbar
  }
}
</script>
