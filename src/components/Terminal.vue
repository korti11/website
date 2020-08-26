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
                <terminal-image-preview :image="image" :alt="imageAlt" v-show="imagePreviewVisability"/>
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
                'profile-picture': { type: 'Click', value: 'images/profile_picture.webp', handler: this.profileClick },
                occupations: {
                    student: {
                        at: 'Johannes Kepler University',
                        since: 'October 2017',
                        what: 'Bachelor of Computer Since'
                    },
                    developer: {
                        at: 'Dynatrace',
                        since: 'October 2020'
                    }
                },
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
            publicPath: process.env.BASE_URL,
            imagePreviewVisability: false,
            image: '',
            imageAlt: ''
        }
    },
    methods: {
        profileClick: function() {
            this.imagePreviewVisability = !this.imagePreviewVisability;
            this.image = `${this.publicPath}images/profile_picture.webp`;
            this.imageAlt = 'Profile picture'
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