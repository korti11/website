<template>
  <div id="app">
    <terminal-header></terminal-header>
  </div>
</template>

<script>
import TerminalHeader from './components/TerminalHeader'

export default {
  name: 'App',
  components: {
    TerminalHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
