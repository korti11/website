<template>
    <b-container fluid>
        <b-row class="h-100">
            <b-col class="terminal-output" cols=9>
                <terminal-command command="page ."/>
                <b-row>
                    <b-col>
                        <h1>Home</h1>
                    </b-col>
                </b-row>
                <terminal-command command="cat user.js"/>
                <terminal-object-export :obj="user"/>
                <terminal-command command="cat social.js"/>
                <terminal-object-export :obj="social"/>
            </b-col>
            <b-col>
                <terminal-image-preview :image="`${publicPath}images/profile_picture.jpg`" alt="Profile picture"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import TerminalCommand from './TerminalCommand.vue'
import TerminalObjectExport from './TerminalObjectExport.vue'
import TerminalImagePreview from './TerminalImagePreview.vue'

export default {
    components: {
        TerminalCommand,
        TerminalObjectExport,
        TerminalImagePreview
    },
    data: function() {
        return {
            user: {
                name: 'Lucas',
                nickname: 'Korti',
                age: '23',
                pronouns: '\'he\' | \'him\'',
                country: 'Austria 🇦🇹',
                code: [ 'Java', 'Kotlin', 'JavaScript', 'SQL' ],
                tools: [ 'Node', 'Angular', 'Vue /* In learning */', 'Docker' ],
                languages: [ 'German', 'English' ]
            },
            social: {
                'GitHub': 'https://github.com/korti11',
                'Twitch': 'https://www.twitch.tv/korti11',
                'Twitter': 'https://twitter.com/LKorti11'
            },
            publicPath: process.env.BASE_URL
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