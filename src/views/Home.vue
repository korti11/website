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
                about: {
                    name: 'Lucas',
                    nickname: 'Korti',
                    age: '23',
                    'profile-picture': { type: 'Click', value: 'images/profile_picture.jpg', image: true, parameter: { image: 'images/profile_picture.jpg', imageAlt: 'Profile picture' }, comment: '👈 Click the file to show the picture' },
                    pronouns: '\'he\' | \'him\'',
                    country: 'Austria 🇦🇹',
                    languages: [ 'German', 'English' ],
                    command: { value: 'cat', route: 'about', ignore: true }
                },
                social: {
                    'GitHub': 'https://github.com/korti11',
                    'Twitch': 'https://www.twitch.tv/korti11',
                    'Twitter': 'https://twitter.com/LKorti11',
                    'Discord': { type: 'Link', value: 'http://discord.korti.io', comment: 'I know it\'s not https, but it\'s only a redirect link 🤷‍♂️' },
                    showInitial: { value: false, ignore: true},
                    command: { value: 'cat', route: 'social', ignore: true }
                }
            }
        }
    }
}
</script>
