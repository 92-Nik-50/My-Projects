<template>
  <div id="app" :class="$style.app">
    <h1>TodoList</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/organisms/TodoList.vue";
export default {
  components: { TodoList },
  name: "App",
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: $padding;
}
.app {
  max-width: $maxWidth;
  max-height: $maxHeight;
  margin: $marginCenter;
  padding: $padding;
  box-shadow: $boxShadow;
  margin-top: $marginTop;

  h1 {
    letter-spacing: $letterSpacing;
    text-align: center;
    color: $colorH1;
    opacity: $opacity;
    font-size: $fontSizeH1;
  }
}
</style>
