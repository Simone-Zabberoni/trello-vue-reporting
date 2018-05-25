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
       
        <div v-bind:style="{ 'border-color': 'red', 'border-style':'solid' }">
          <div v-for="list in $store.state.lists" :key="list.name"  v-bind:style="{ 'border-color': 'blue', 'border-style':'solid' }">
            <h3>{{ list.name }}</h3>
            <div v-for="card in list['cards']" :key="card.name" v-bind:style="{ 'border-color': 'purple', 'border-style':'solid' }"> 
                <div v-bind:style="{ 'float': 'left', 'border-style':'solid' }">
                    <div v-bind:style="{ 'float': 'left' }"><h4>{{ card.name  }}</h4></div>
                    <div v-bind:style="{ 'float': 'left' }" v-for="label in card['labels']" :key="label.name" >
                        
                        <div v-bind:style="{ 'background-color': $store.state.labelColor[label.color], 'color': 'white', 'padding': '4px', 
                            'margin': '2px', 'border-radius': '5px','float': 'left' } " >{{ label.name  }} </div>
                    </div>
                </div>
                <div v-bind:style="{ 'text-align': 'left', 'clear':'both','float':'none' }"> <pre>{{  card.desc  }}</pre> </div>
            </div>
     
            <hr>
          </div>
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

