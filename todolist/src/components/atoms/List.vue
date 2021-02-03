<template>
  <div>
    <div v-for="(todo, index) in list" :key="index" :class="$style.list">
      <div :class="$style.strocka">
        <div class="item">
          <input
            type="checkbox"
            :id="todo.id"
            :checked="todo.checked"
            :class="$style.checkBox"
            @change="check($event.completed)"
          />
          <span class="textItem">{{ todo.text }}</span>
        </div>
        <div :class="$style.delete" @click="removeTodo(index)">&times;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "List",
  computed: mapGetters(["list"]),
  methods: {
    ...mapMutations(["delete", "completed"]),
    removeTodo(index) {
      this.delete(index);
    },
    check() {
      this.completed(event.target.id);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
@import "@/assets/styles/color";

.strocka {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9375rem;
  padding: 0.1875rem;
  font-size: 1.5625rem;
  .delete {
    cursor: pointer;
    margin-left: 0.875rem;
    &:hover {
      color: $red;
    }
    .list {
      display: flex;
      align-items: center;
    }
  }
  .checkBox {
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.25rem;
  }
}
input[type="checkbox"]:checked ~ span {
  text-decoration: line-through;
  color: $darkGray;
}
</style>