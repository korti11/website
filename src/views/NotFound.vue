<template>
    <b-container fluid>
        <b-row class="h-100">
            <b-col id="output" class="terminal-output" cols=9>
                <terminal-command command="page ."/>
                <b-row>
                    <b-col>
                        <h1>Page not found.</h1>
                    </b-col>
                </b-row>
                <terminal-command command="cat notfound.js"/>
                <terminal-object-export :obj="notfound"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import TerminalCommand from '../components/TerminalCommand.vue'
import TerminalObjectExport from '../components/TerminalObjectExport.vue'

export default {
    components: {
        TerminalCommand,
        TerminalObjectExport
    },
    data: function() {
        return {
            notfound: {
                code: 404,
                message: 'The page you were looking for was eaten by bugs. Try to get back to the homepage by clicking on "Home".',
                homepage: { type: 'Link', value: '/', message: 'Home', external: false }
            }
        }
    }
}
</script>

<style>
    .terminal-output {
        font-family: 'Roboto Mono';
        font-size: 1.2rem;

        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }
    .terminal-output #output {
        margin-top: 0.7rem;
        margin-bottom: 0.2rem;
    }
</style>