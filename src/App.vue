<template>
  <div id="app">
    <WithoutVuex />
  </div>
</template>

<script>
import WithoutVuex from './components/WithoutVuex.vue'

export default {
  name: 'App',
  components: {
    WithoutVuex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
