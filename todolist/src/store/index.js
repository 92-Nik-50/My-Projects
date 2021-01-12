import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    state: {
        todos:[]
    },
    mutations: {
        addTodos(state, text){
            if(text == ""){
                return
            }
            state.todos.push({
                isCompete: false,
                text: text
            })
        },
        deleteTodos(state, index){
            state.todos.splice(index, 1)
        }
    },
    getters: {
        listTodos(state){
            return state.todos
        },
        totalTodos(state){
            return state.todos.length
        }
    }
 })