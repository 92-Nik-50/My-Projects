<template>
  <div class="container">
    <input
      type="text"
      class="input"
      placeholder="Добавить задачу..."
      @keyup.enter="addTodo"
      v-model="task"
    />
    <div v-for="(todo, index) in listTodos" :key="index" class="list">
      <div class="strocka">
        <div>
          <input type="checkbox" class="checkbox" />
          {{ todo.text }}
        </div>
        <div class="delete" @click="removeTodo(index)" >&times;</div>
      </div>
    </div>
    <div class="footer">
      <div>
        <label><input type="checkbox" />Отметить всё</label>
      </div>
      <div>Осталось задач: {{ totalTodos }}</div>
    </div>
    <div class="footer">
      <div>
        <Button type="submit">Все</Button>
        <Button type="submit">Aктивные</Button>
        <Button type="submit">Завершенно</Button>
      </div>
      <div>
        <Button type="submit">Очистить отмеченные</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Button from './basic/Button.vue';
export default {
  components: { Button },
  name: "Body",
  computed: mapGetters(["listTodos", "totalTodos"]),
  methods: {
    ...mapMutations(["addTodos", "deleteTodos"]),
    addTodo() {
      this.addTodos(this.task);
      this.task = "";
    },
    removeTodo(index){
      this.$emit("deleteTodos");
      this.deleteTodos(index);
    }
  },
  data() {
    return {
      task: null,
    };
  },
};
</script>

<style lang="scss">
.container {
  box-shadow: 0px 5px 10px 3px #cccccc;
  padding: 0.625rem;
  max-height: 23.125rem;
  overflow-y: scroll;
}
.input {
  width: 97%;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.375rem;
  padding: 0.3125rem;
}
.strocka {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9375rem;
  padding: 0.1875rem;
  font-size: 1.5625rem;
}
.checkbox {
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.25rem;
}
.delete {
  cursor: pointer;
  margin-left: 0.875rem;
  &:hover {
    color: red;
  }
  .list {
    display: flex;
    align-items: center;
  }
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.125rem solid lightgrey;
  padding-top: 0.375rem;
  font-size: 1.25rem;
  margin-top: 0.375rem;
  margin-bottom: 0.875rem;
}
</style>
