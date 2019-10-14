<template>
  <div v-if="loggedIn" class="mainContainer">
    <div id="toolbox">
      <Navbar />
    </div>
    <div id="boardbox">
      <Boards />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Boards from './Boards.vue'
import Navbar from './Navbar.vue'

export default {
  name: 'MainContainer',
  // mapstate with spread operator!

  computed: mapState(['loggedIn']),

  components: {
    Boards,
    Navbar
  }
}
</script>
