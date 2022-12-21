<template>
    <terminal page="User" :input="userData"/>
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
            userData: {
                home: {
                    command: { value: 'link', route: '/', ignore: true }
                },
                about: {
                    name: 'Lucas',
                    nickname: 'Korti',
                    age: '25',
                    'profile-picture': { type: 'Click', value: 'images/profile_picture.jpg', image: true, parameter: { image: 'images/profile_picture.jpg', imageAlt: 'Profile picture' }, comment: '👈 Click the file to show the picture' },
                    occupations: {
                        student: {
                            type: 'Array',
                            value: [
                                {
                                    at: 'Johannes Kepler University',
                                    from: 'October 2017',
                                    to: 'July 2021',
                                    what: 'Computer Science',
                                    degree: 'BSc'
                                }
                            ]
                        },
                        'java-software-engineer': {
                            at: 'Dynatrace',
                            since: 'October 2020'
                        }
                    },
                    pronouns: '\'he\' | \'him\'',
                    country: 'Austria 🇦🇹',
                    code: [ 'Java', 'Kotlin', 'JavaScript', 'SQL' ],
                    tools: { type: 'Array', value: [ 'Docker', 'git', 'IntelliJ', 'VS Code' ] },
                    languages: [ 'German', 'English' ],
                    command: { value: 'cat', ignore: true }
                }
            }
        }
    }
}
</script>