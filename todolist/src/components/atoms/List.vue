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
.strocka {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $marginBotton;
  padding: $paddingS;
  font-size: $fontSizeC;
  .delete {
    cursor: $cursor;
    margin-left: $marginLeft;
    &:hover {
      color: $colorH;
    }
    .list {
      display: flex;
      align-items: center;
    }
  }
  .checkBox {
    cursor: $cursor;
    width: $fontSizeP;
    height: $fontSizeP;
    margin: $letterSpacing;
  }
}
input[type="checkbox"]:checked ~ span {
  text-decoration: line-through;
  color: #808080;
}
</style>