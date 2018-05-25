<template>
  <div>
    
     <div v-if="$store.state.loggedIn">
        <p>Boards:  </p>  
        <select v-model="selected" v-on:change="loadLists(selected.value)">
        
        <option v-for="option in $store.state.boards" :value="option" :key="option.id">
            {{ option.text }}
        </option>
        </select>
        <hr>
       
        <div class="board">
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
                </div>
            </div>
     
            <hr>
          </div>
        </div>

    </div>

  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown'

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

