<template>
    <div id="app">
        <terminal-header></terminal-header>
        <router-view class="content"/>
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
        color: white;

        display: flex;
        flex-flow: column;
        height: 100%;
    }

    .content {
        margin-top: 40px;
        flex: 1 1 auto;
    }
</style>
