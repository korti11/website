<template>
    <b-container fluid>
        <b-row>
            <b-col class="terminal-output" cols="12" :md="imagePreviewVisability ? 9 : 12">
                <vuescroll :ops="ops">
                    <div id="output">
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
                    </div>
                </vuescroll>
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
import Vuescroll from 'vuescroll';

export default {
    components: {
        TerminalCommand,
        TerminalObjectExport,
        TerminalImagePreview,
        Vuescroll
    },
    data: function() {
        return {
            user: {
                name: 'Lucas',
                nickname: 'Korti',
                age: '23',
                'profile-picture': { type: 'Click', value: 'images/profile_picture.webp', handler: this.profileClick, comment: '👈 Click the file to show the picture' },
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
                tools: { type: 'Array', value: [ 'Node', 'Angular', 'Vue', 'Docker' ], comment: 'I\'m still learning Vue, this here is my first project with it 👨‍💻' },
                languages: [ 'German', 'English' ]
            },
            social: {
                'GitHub': 'https://github.com/korti11',
                'Twitch': 'https://www.twitch.tv/korti11',
                'Twitter': 'https://twitter.com/LKorti11',
                'Discord': { type: 'Link', value: 'http://discord.korti.io', comment: 'I know it\'s not https, but it\'s only a redirect link 🤷‍♂️' }
            },
            publicPath: process.env.BASE_URL,
            imagePreviewVisability: false,
            image: '',
            imageAlt: '',
            ops: {
                scrollPanel: {
                    scrollingX: false
                },
                bar: {
                    onlyShowBarOnScroll: false,
                    background: '#5e5e5e'
                }
            }
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
        font-family: 'Roboto Mono';
        font-size: 1.2rem;

        max-height: calc(100vh - 40px);
        overflow-y: auto;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }
    .terminal-output #output {
        margin-top: 0.7rem;
        margin-bottom: 0.2rem;
    }
</style>