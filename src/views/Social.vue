<template>
    <terminal page="Social" :input="socialData"/>
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
            socialData: {
                home: {
                    command: { value: 'link', route: '/', ignore: true }
                },
                social: {
                    'GitHub': 'https://github.com/korti11',
                    'Twitch': 'https://www.twitch.tv/korti11',
                    'Twitter': 'https://twitter.com/LKorti11',
                    command: { value: 'cat', ignore: true}
                }
            }
        }
    }
}
</script>