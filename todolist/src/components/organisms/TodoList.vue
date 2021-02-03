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
@import "@/assets/styles/color";

.container {
  margin: 0 auto;
  box-shadow: $box-shadow;
  padding: 0.625rem;
  max-height: 23.125rem;
  overflow-y: scroll;
  width: 95%;
}
</style>
