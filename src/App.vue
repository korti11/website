<template>
  <div id="app">
    <terminal-header></terminal-header>
    <terminal class="content"></terminal>
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

  display: flex;
  flex-flow: column;
  height: 100%;
}

.content {
  flex: 1 1 auto;
}
</style>
