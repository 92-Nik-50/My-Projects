import Vue from 'vue'
// import { filter } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    state: {
        todos: []
    },
    mutations: {
        add(state, text) {
            if (text == "") {
                return
            }
            state.todos.push({
                checked: false,
                text: text,
                id: Date.now()
            })
        },
        delete(state, index) {
            state.todos.splice(index, 1)
        },
        completed(state, tasckId) {
            state.todos.map(t => {
                if (parseInt(t.id) === parseInt(tasckId)) {
                    t.checked = !t.checked
                }
                else { return t }
            })
        },
        allcompleted(state, allTasckId) {
            state.todos.forEach(h => {
                h.checked = allTasckId.checked
            })
        }

    },
    getters: {
        list(state) {
            return state.todos
        },
        total(state) {
            return state.todos.length
        },
        filterTodos(state){
            return state.todos.filter(todo=> todo.length > 3) 
        }
    },

    modules: {}
})