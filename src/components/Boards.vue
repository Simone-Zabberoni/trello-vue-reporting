<template>
  <div v-if="loggedIn">
    <div id="boardContainer" class="board">
      <div v-for="list in lists" :key="list.name" class="list">
        <h2>{{ list.name }}</h2>

        <div v-for="card in list['cards']" :key="card.name" class="card">
          <div class="card-header">
            <div class="card-name card-header">
              <a v-bind:href="card.url" target="_blank">
                <h3>{{ card.name }}</h3>
              </a>
            </div>

            <div
              v-if="showLabels"
              v-for="label in card['labels']"
              :key="label.name"
              class="card-labels card-header"
            >
              <div
                v-bind:style="{
                  'background-color': labelColor[label.color]
                }"
                class="card-label-object"
              >
                {{ label.name }}
              </div>
            </div>
          </div>

          <div class="card-body">
            <vue-markdown>{{ card.desc }}</vue-markdown>

            <div
              v-if="showComments && card.comments[0]"
              class="card-comment-box"
            >
              <div
                v-for="comment in card['comments']"
                :key="comment.data.text"
                class="card-comment"
              >
                {{ comment.date | formatDate }} -
                {{ comment.memberCreator.fullName }} &#124;
                {{ comment.data.text }}
              </div>
            </div>
          </div>
          <br />
        </div>

        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import moment from 'moment'
import { mapState } from 'vuex'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
})

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

export default {
  name: 'Boards',
  computed: mapState([
    'loggedIn',
    'lists',
    'showLabels',
    'labelColor',
    'showComments'
  ]),
  components: {
    VueMarkdown
  }
}
</script>
