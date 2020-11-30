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
                    age: '23',
                    'profile-picture': { type: 'Click', value: 'images/profile_picture.jpg', image: true, parameter: { image: 'images/profile_picture.jpg', imageAlt: 'Profile picture' }, comment: '👈 Click the file to show the picture' },
                    occupations: {
                        student: {
                            type: 'Array',
                            value: [
                                {
                                    at: 'Johannes Kepler University',
                                    since: 'October 2017',
                                    what: 'Bachelor for Computer Science'
                                },
                                {
                                    at: 'Johannes Kepler University',
                                    since: 'October 2020',
                                    what: 'Master for Artificial Intelligence'
                                }
                            ]
                        },
                        'software-engineer': {
                            at: 'Dynatrace',
                            since: 'October 2020'
                        }
                    },
                    pronouns: '\'he\' | \'him\'',
                    country: 'Austria 🇦🇹',
                    code: [ 'Java', 'Kotlin', 'JavaScript', 'SQL' ],
                    tools: { type: 'Array', value: [ 'Node', 'Angular', 'Vue', 'Docker' ], comment: 'I\'m still learning Vue, this here is my first project with it 👨‍💻' },
                    languages: [ 'German', 'English' ],
                    command: { value: 'cat', ignore: true }
                }
            }
        }
    }
}
</script>