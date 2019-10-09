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
          v-model="$store.state.showLabels"
          color="lightskyblue"
          :labels="true"
        />
      </li>
      <li>
        <p>Comments</p>
        <toggle-button
          v-model="$store.state.showComments"
          color="lightskyblue"
          :labels="true"
        />
      </li>
      <li>
        <p>Lists</p>
        <div v-if="loggedIn" class="listbox">
          <div v-for="(list, i) in $store.state.lists" :key="list.name">
            <toggle-button
              v-model="$store.state.lists[i].visible"
              color="lightskyblue"
              :labels="true"
            />
            {{ list.name }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',

  computed: mapState(['loggedIn', 'boards', 'member']),

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
