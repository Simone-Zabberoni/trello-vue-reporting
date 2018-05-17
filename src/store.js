import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: 0,
        publicName: 'Default Name',
        member: {},
        boards: [],
        lists: [],
        listIndex: []
      },
      
      mutations: {
        changeLoginStatus (state, loginStatus) {
          state.loggedIn = loginStatus;
        },
        setMemberData (state, memberData) {
          state.member = memberData;
        },
        setBoardData (state, board ) {
          console.log(board.name + ' - ' + board.id);
          state.boards.push({'value': board.id, 'text': board.name });
        },

        resetListData (state) {
          state.lists = [];
        },

        resetListIndex (state) {
          state.listIndex = [];
        },


        setListData (state, list ) {
          console.log('Inside setListData...');
          
          
          var listIdx = state.lists.push( {'name': list.name, 
                            'id': list.id, 
                            'cards': [] } 
          );
        
          state.listIndex[list.id] = listIdx-1;
          
        },

        addCardToList (state, card ) {
          console.log('Adding card ' + card.name + ' to list' + card.idList);
          var listIdx = state.listIndex[card.idList]

          state.lists[listIdx]['cards'].push(card);
        }

      },

      actions: {
        loadBoardData ({ commit }, boardId) {
          window.Trello.get('/boards/' + boardId, 
            function(board) {
              commit('setBoardData', board ); 
            });

        },

        loadListCards ({ commit }, listId) {
          window.Trello.get('/lists/' + listId  + '/cards', 
            function(cards) {
              console.log('Inside locaListCards...');
                            
              cards.forEach( function(card) {
                commit('addCardToList', card);
              });
            });

        },

        loadLists ({ commit, dispatch }, boardId) {
          commit('resetListData');
          commit('resetListIndex');
          
          window.Trello.get('/boards/' + boardId + '/lists', 
            function(lists) {
              console.log('Inside loadLists...');
              
              lists.forEach( function(list) {
                commit('setListData', list) 
                dispatch('loadListCards', list.id) 
              });
            });

        },

        loadMemberData ({ commit, dispatch }) {
          window.Trello.get('/members/me',
            // handle success  
            function (member) { 
              console.log('Success callback!!!');
              commit('setMemberData', member) 

              member.idBoards.forEach( function(boardId) {
                dispatch('loadBoardData', boardId) 
              });
            }, 
            
            // handle failure
            () => console.log('Cannot load member data')
          )
        }


      }
  })
  