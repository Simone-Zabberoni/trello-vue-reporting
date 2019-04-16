<template>
  <div v-if="$store.state.loggedIn" class="navbar">
    <ul>
      <li>
        <p>Logged in as</p>
        <b>{{ $store.state.member.fullName }}</b>
      </li>
      <li>
        <p>Board</p>
        <select
          v-model="selected"
          v-on:change="loadLists(selected.value)"
          class="boardSelector"
        >
          <option
            v-for="option in $store.state.boards"
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

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
