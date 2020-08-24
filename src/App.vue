<template>
  <div id="app">
    <terminal-header></terminal-header>
    <terminal></terminal>
  </div>
</template>

<script>
import TerminalHeader from './components/TerminalHeader'
import Terminal from './components/Terminal'

export default {
  name: 'App',
  components: {
    TerminalHeader,
    Terminal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
