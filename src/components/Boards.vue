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
       
        <div v-for="list in $store.state.lists" :key="list.name">
            <h3>{{ list.name }}</h3>
            <div v-for="card in list['cards']" :key="card.name">
                <h4>{{ card.name  }} </h4>
                <pre>{{  card.desc  }}</pre>
            </div>
     
            <hr>
        </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Boards',

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

