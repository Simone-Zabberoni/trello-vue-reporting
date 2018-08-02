<template>
  <div>
    
     <div v-if="$store.state.loggedIn">
        <div class="board-selector">
            <p>
                Selected board:  
                <select v-model="selected" v-on:change="loadLists(selected.value)">
                <option v-for="option in $store.state.boards" :value="option" :key="option.id">
                    {{ option.text }}
                </option>
                </select>
            </p>  
        </div>
        <hr>
       
        <div id="boardContainer" class="board">
          <div v-for="list in $store.state.lists" :key="list.name" class="list">
            <h2>{{ list.name }}</h2>
           
            <div v-for="card in list['cards']" :key="card.name" class="card"> 
                <div class="card-header">
                    <div class="card-name card-header">
                        <h3>{{ card.name }}</h3>
                    </div>
                    
                    <div v-for="label in card['labels']" :key="label.name" class="card-labels card-header">
                        <div v-bind:style="{ 'background-color': $store.state.labelColor[label.color] } " class="card-label-object" >
                            {{ label.name  }}
                        </div>
                    </div>
                </div>

                <div class="card-body"> 
                    <vue-markdown>{{  card.desc  }}</vue-markdown>

                    <div v-if="card.comments[0]" class="card-comment-box">
                        <div v-for="comment in card['comments']" :key="comment.data.text" class="card-comment">
                            {{ comment.date | formatDate }} - {{ comment.memberCreator.fullName }} &#124;  {{ comment.data.text  }}
                        </div>
                    </div>
                </div>
            </div>
     
            <hr>
          </div>
        </div>

    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import moment from 'moment'
Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY hh:mm')
    }
  });


export default {
  name: 'Boards',

  components: {
    VueMarkdown
  },

  data: function () {
    return {
        selected: {}
    }

  }, 
  
  methods: {
    loadLists: function(boardId) {
        console.log('Dispatching loadLists with id: '+ boardId)
        this.$store.dispatch('loadLists', boardId)   
    },

  


  }
}


</script>

