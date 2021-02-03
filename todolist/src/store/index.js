import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    state: {
        todos: [{
            checked: false,
            text: "1",
            id: 0
        },
        {
            checked: false,
            text: "2",
            id: 1
        },
        {
            checked: false,
            text: "3",
            id: 2
        }],
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
        allCompleted(state) {
            state.todos.forEach(h => {
                h.checked = !h.checked; 
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
        allListButton(state){
            return state.todos;
        },


    },

    modules: {}
})