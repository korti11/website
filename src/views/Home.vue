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
                    age: '25',
                    'profile-picture': { type: 'Click', value: 'images/profile_picture.jpg', image: true, parameter: { image: 'images/profile_picture.jpg', imageAlt: 'Profile picture' }, comment: '👈 Click the file to show the picture' },
                    pronouns: '\'he\' | \'him\'',
                    country: 'Austria 🇦🇹',
                    languages: [ 'German', 'English' ],
                    command: { value: 'cat', route: 'about', ignore: true }
                },
                projects: {
                    'advent-of-code-2019': 'https://github.com/korti11/advent-of-code-2019',
                    'advent-of-code-2020': 'https://github.com/korti11/advent-of-code-2020',
                    'advent-of-code-2021': 'https://github.com/korti11/advent-of-code-2021',
                    'advent-of-code-2022': 'https://github.com/korti11/advent-of-code-2022',
                    'bettermuffling': 'https://github.com/korti11/bettermuffling',
                    'commit-issue-labeler': 'https://github.com/korti11/commit-issue-labeler',
                    'git-crypt-unlock': 'https://github.com/korti11/git-crypt-unlock',
                    'invi-me': 'https://github.com/korti11/invi-me-bot',
                    'muffle': 'https://github.com/korti11/muffle',
                    command: { value: 'cat', route: 'projects', ignore: true }
                },
                social: {
                    'GitHub': 'https://github.com/korti11',
                    'Twitch': 'https://www.twitch.tv/korti11',
                    'Twitter': 'https://twitter.com/LKorti11',
                    command: { value: 'cat', route: 'social', ignore: true }
                }
            }
        }
    }
}
</script>
