<template>
  <div :class="$style.container">
    <Input v-model="task" @keyup.enter="addTodo" />
    <List />
    <Panel />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import Input from "@/components/atoms/Input.vue";
import List from "@/components/atoms/List.vue";
import Panel from "@/components/atoms/Panel.vue";
import Footer from "@/components/organisms/Footer.vue";

export default {
  components: { Input, List, Panel, Footer },
  name: "TodoList",
  methods: {
    ...mapMutations(["add"]),
    addTodo() {
      this.add(this.task);
      this.task = "";
    },
  },
  data() {
    return {
      task: "", 
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
.container {
  margin: $marginCenter;
  box-shadow: $boxShadow;
  padding: $padding;
  max-height: $maxHeightC;
  overflow-y: scroll;
  width: $width;
}
</style>
