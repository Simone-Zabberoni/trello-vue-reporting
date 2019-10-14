<template>
  <div v-if="loggedIn" class="navbar">
    <div class="bottomLine">
      <p class="center">
        Logged in as:
        <b>{{ member.fullName }}</b>
      </p>
    </div>

    <div class="bottomLine">
      <p class="center">Current Board</p>
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
    </div>

    <div class="toggleSelectors bottomLine">
      <div class="flexCenter">
        <div>
          <toggle-button
            class="toggleButton"
            v-model="$store.state.showLabels"
            :labels="true"
            color="darkgreen"
          />
        </div>
        <div>
          <p>Show Labels</p>
        </div>
      </div>

      <div class="flexCenter">
        <div>
          <toggle-button
            class="toggleButton"
            v-model="$store.state.showComments"
            :labels="true"
            color="darkgreen"
          />
        </div>
        <div>
          <p>Show Comments</p>
        </div>
      </div>
    </div>

    <div class="bottomLine">
      <p class="center">Lists</p>
      <div v-if="loggedIn">
        <div
          v-for="(list, i) in $store.state.lists"
          :key="list.name"
          class="flexCenter"
        >
          <toggle-button
            class="toggleButton"
            v-model="$store.state.lists[i].visible"
            :labels="true"
            color="darkgreen"
          />
          <div>
            <p>{{ list.name }}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
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
