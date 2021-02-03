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
@import "@/assets/styles/color";



#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0.625rem;
}
.app {
  max-width: 31.25rem;
  max-height: 33.125rem;
  margin: 0 auto;
  padding: 0.625rem;
  box-shadow: $box-shadow;
  margin-top: 3.75rem;

  h1 {
    letter-spacing: 0.25rem;
    text-align: center;
    color:  $orange;
    opacity: 0.6;
    font-size: 2.5rem;
  }
}
</style>
