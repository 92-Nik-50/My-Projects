<template>
  <div id="app" class="app">
    <h1>TodoList</h1>
    <Body/>
  </div>
</template>

<script>
import Body from './components/Body.vue'
export default {
  components: { Body },
  name: 'App',
}
</script>

<style lang="scss">
#app {
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0.625rem;
}
.app{
  max-width: 31.25rem;
  max-height: 33.125rem;
  margin: 0 auto ;
  padding: 0.625rem;
  box-shadow: 0px 5px 10px 3px #cccccc;
  margin-top: 3.75rem;
}
h1{
  letter-spacing: 0.25rem;
  text-align: center;
  color: #cd6829;
  opacity: 0.6;
  font-size: 2.5rem;
}
</style>
