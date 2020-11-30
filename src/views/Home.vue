<template>
    <terminal page="Home" :input="homeData"/>
</template>

<script>
import Terminal from '@/components/Terminal.vue'

export default {
    name: 'Home',
    components: {
        Terminal
    },
    data: function () {
        return {
            homeData: {
                user: {
                    name: 'Lucas',
                    nickname: 'Korti',
                    age: '23',
                    'profile-picture': { type: 'Click', value: 'images/profile_picture.jpg', image: true, parameter: { image: 'images/profile_picture.jpg', imageAlt: 'Profile picture' }, comment: '👈 Click the file to show the picture' },
                    occupations: {
                        student: {
                            at: 'Johannes Kepler University',
                            since: 'October 2017',
                            what: 'Bachelor of Computer Science'
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
                    'Discord': { type: 'Link', value: 'http://discord.korti.io', comment: 'I know it\'s not https, but it\'s only a redirect link 🤷‍♂️' },
                    showInitial: { value: false, ignore: true}
                }
            }
        }
    }
}
</script>
