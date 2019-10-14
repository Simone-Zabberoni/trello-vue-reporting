<template>
  <div id="loginBox" v-if="!loggedIn">
    <h3>Small disclaimer!</h3>
    <p>
      This is my report utility for
      <a href="https://www.trello.com">Trello</a> written in
      <a href="https://vuejs.org/">VueJS</a>, feel free to use it and report me
      any bug/issues/desiderata.
    </p>
    <p>
      The utility is client side only, all the data flows from your browser to
      Trello's servers: it doesn't capture/intercept/analyze your data, the only
      tracking in place is Google Analytics.
    </p>
    <p>
      No worries about changing or deleting your cards, the utility only calls
      read APIs to make the report
    </p>

    <hr />

    <p>
      Simone Zabberoni -
      <a
        href="https://github.com/Simone-Zabberoni"
        title="My Github profile"
        target="_blank"
      >
        <img src="../assets/Octocat.jpg" style="height: 30px" />
      </a>
      <a
        href="https://www.linkedin.com/in/simonezabberoni/"
        target="_blank"
        title="My Linkedin profile"
      >
        <img src="../assets/linkedin.png" style="height: 30px" />
      </a>
      <a
        href="https://www.facciocose.eu/"
        title="My personal site"
        target="_blank"
      >
        <img src="../assets/facciocose.jpg" style="height: 30px" />
      </a>
    </p>

    <hr />
    <p>
      <button v-on:click="loginTrello">Login to Trello</button>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',

  computed: mapState(['loggedIn']),

  methods: {
    authenticationSuccess: function() {
      console.log('Authenticated!')
      this.$store.commit('changeLoginStatus', 1)
      this.$store.dispatch('loadMemberData')
    },

    authenticationFailure: function() {
      console.log('Authentication error!')
      this.$store.commit('changeLoginStatus', 0)
    },

    loginTrello: function() {
      window.Trello.authorize({
        type: 'popup',
        name: 'Trello reporting tool',
        scope: {
          read: 'true',
          write: 'true'
        },
        expiration: 'never',
        success: this.authenticationSuccess,
        error: this.authenticationFailure
      })
    }
  }
}
</script>
