<template>
  <b-container class="terminal-output" fluid>
      <terminal-command command="cat user.js"/>
      <terminal-object-export :obj="user"/>
      <terminal-command command="cat social.js"/>
      <terminal-object-export :obj="social"/>
  </b-container>
</template>

<script>
import TerminalCommand from './TerminalCommand.vue'
import TerminalObjectExport from './TerminalObjectExport.vue'

export default {
    components: {
        TerminalCommand,
        TerminalObjectExport
    },
    data: function() {
        return {
            user: {
                name: 'Lucas',
                nickname: 'Korti',
                age: '23',
                country: 'Austria 🇦🇹'
            },
            social: {
                'GitHub': 'https://github.com/korti11',
                'Twitch': 'https://www.twitch.tv/korti11',
                'Twitter': 'https://twitter.com/LKorti11'
            }
        }
    }
}
</script>

<style>
    .terminal-output {
        margin-top: 1rem;
        font-family: 'Roboto Mono';
        font-size: 1.2rem;
    }
</style>