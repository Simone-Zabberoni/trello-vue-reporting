<template>
  <div id="app">
    <div class="header">
      <div class="logoTitleWrapper">
        <img id="logo" src="./assets/logo.png" style="height: 20px" />

        <div id="appTitle">
          <h1>Trello reporting tool</h1>
        </div>
      </div>
      <div id="version">
        Simone Zabberoni -
        <a
          class="zabLink"
          href="https://github.com/Simone-Zabberoni"
          target="_blank"
          >https://github.com/Simone-Zabberoni</a
        >
        - v. {{ version }}
      </div>
    </div>

    <div id="headSpacer"></div>

    <Login />

    <MainContainer />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import MainContainer from './components/MainContainer.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: mapState(['loggedIn', 'version']),
  components: {
    Login,
    MainContainer
  }
}
</script>
