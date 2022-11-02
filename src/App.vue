<template>
  <div id="app">
    <WithoutVuex />
    <WithVuex />
  </div>
</template>

<script>
import WithVuex from './components/WithVuex.vue'
import WithoutVuex from './components/WithoutVuex.vue'

export default {
  name: 'App',
  components: {
    WithoutVuex,
    WithVuex
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
