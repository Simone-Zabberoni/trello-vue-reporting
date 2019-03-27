<template>
  <div v-if="loggedIn" class="navbar">
    <ul>
      <li>
        <p>Logged in as</p>
        <b>{{ member.fullName }}</b>
      </li>
      <li>
        <p>Board</p>
        <select
          v-model="selected"
          v-on:change="loadLists(selected.value)"
          class="boardSelector"
        >
          <option
            v-for="option in boards"
            :value="option"
            :key="option.id"
            class="boardSelectorBox"
            >{{ option.text }}</option
          >
        </select>
      </li>
      <li>
        <p>Labels</p>
        <toggle-button
          v-model="showLabels"
          color="lightskyblue"
          labels="true"
        />
      </li>
      <li>
        <p>Comments</p>
        <toggle-button
          v-model="showComments"
          color="lightskyblue"
          labels="true"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',

  computed: mapState([
    'loggedIn',
    'boards',
    'showLabels',
    'member',
    'showComments'
  ]),

  methods: {
    loadLists: function(boardId) {
      console.log('Dispatching loadLists with id: ' + boardId)
      this.$store.dispatch('loadLists', boardId)
    }
  },
  data: function() {
    return {
      selected: {}
    }
  }
}
</script>
