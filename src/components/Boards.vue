<template>
  <div>
    <div v-if="$store.state.loggedIn">
      <div class="board-header">
        <div class="board-selector">
          <p>
            Selected board:
            <select v-model="selected" v-on:change="loadLists(selected.value)">
              <option
                v-for="option in $store.state.boards"
                :value="option"
                :key="option.id"
                >{{ option.text }}</option
              >
            </select>
          </p>
        </div>

        <div class="board-toggler">
          <p><toggle-button v-model="showLabels" />Labels</p>
          <p><toggle-button v-model="showComments" />Comments</p>
        </div>

        <div class="board-buttons">
          <button v-on:click="createPDF">Export to PDF</button>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div id="boardContainer" class="board">
        <div v-for="list in $store.state.lists" :key="list.name" class="list">
          <h2>{{ list.name }}</h2>

          <div v-for="card in list['cards']" :key="card.name" class="card">
            <div class="card-header">
              <div class="card-name card-header">
                <h3>{{ card.name }}</h3>
              </div>

              <div
                v-if="showLabels"
                v-for="label in card['labels']"
                :key="label.name"
                class="card-labels card-header"
              >
                <div
                  v-bind:style="{
                    'background-color': $store.state.labelColor[label.color]
                  }"
                  class="card-label-object"
                >
                  {{ label.name }}
                </div>
              </div>
            </div>

            <div class="card-body">
              <vue-markdown>{{ card.desc }}</vue-markdown>

              <div v-if="showComments">
                <div v-if="card.comments[0]" class="card-comment-box">
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
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import moment from 'moment'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
})

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

export default {
  name: 'Boards',

  components: {
    VueMarkdown
  },

  data: function() {
    return {
      selected: {},
      showLabels: true,
      showComments: true
    }
  },

  methods: {
    loadLists: function(boardId) {
      console.log('Dispatching loadLists with id: ' + boardId)
      this.$store.dispatch('loadLists', boardId)
    },

    createPDF() {
      var somename = this.$store.state.member.fullName

      html2canvas(document.getElementById('boardContainer')).then(function(
        canvas
      ) {
        var imgWidth = 210
        var pageHeight = 295
        var imgHeight = (canvas.height * imgWidth) / canvas.width
        var heightLeft = imgHeight
        var doc = new jsPDF('p', 'mm')
        var position = 0

        var imgData = canvas.toDataURL('image/png')

        doc.text(somename)
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          doc.addPage()
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }
        doc.save('file.pdf')
      })
    } //createPDF
  }
}
</script>
