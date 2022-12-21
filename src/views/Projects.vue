<template>
    <terminal page="Projects" :input="projectData"/>
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
            projectData: {
                home: {
                    command: { value: 'link', route: '/', ignore: true }
                },
                projects: {
                    'advent-of-code-2019': {
                        url: 'https://github.com/korti11/advent-of-code-2019',
                        adventofcode: "https://adventofcode.com/2019",
                        descripton: 'My solutions for "Advent of Code 2019". At least for the days 1 through 9, 11 and 12 😂'
                    },
                    'advent-of-code-2020': {
                        url: 'https://github.com/korti11/advent-of-code-2020',
                        adventofcode: "https://adventofcode.com/2020",
                        descripton: 'A new year, a new set of advent of code challenges. "Advent of Code 2020" solutions, this year in JavaScript 👀'
                    },
                    'advent-of-code-2021': {
                        url: 'https://github.com/korti11/advent-of-code-2021',
                        adventofcode: "https://adventofcode.com/2021",
                        descripton: 'The third try at solving all advent of code challenges. New year, new langue so let\'s give us Go a try 💻'
                    },
                    'advent-of-code-2022': {
                        url: 'https://github.com/korti11/advent-of-code-2022',
                        adventofcode: "https://adventofcode.com/2022",
                        descripton: 'The forth year and it\'s not looking good so far at solving the challenges. I heard about this new language Rust so why don\'t try it out for AoC 🦀'
                    },
                    'bettermuffling': {
                        url: 'https://github.com/korti11/bettermuffling',
                        descripton: 'Better Muffling is a Minecraft mod a started working on the end of 2017. It adds two blocks to muffle sounds for a given range and sound level. It currently is supported for Minecraft 1.12, 1.14, 1.15 and 1.16.'
                    },
                    'commit-issue-labeler': {
                        url: 'https://github.com/korti11/commit-issue-labeler',
                        descripton: '"commit-issue-labeler" is a GitHub Action to add labels to an issue based on a trigger word in the commit message.'
                    },
                    'git-crypt-unlock': {
                        url: 'https://github.com/korti11/git-crypt-unlock',
                        descripton: '"git-crypt-unlock" is a GitHub Action to unlock files that are encrypted/locked with git-crypt in a repo and needed for the build process.'
                    },
                    'invi-me': {
                        url: 'https://github.com/korti11/invi-me-bot',
                        descripton: 'Invi Me is Discord and Twitch bot that allows to create one time discord invites from within Twitch chat.'
                    },
                    'muffle': {
                        url: 'https://github.com/korti11/muffle',
                        descripton: 'Muffle was a University project and is an Android app to controlle the smartphones volume based on GPS locations.'
                    },
                    command: { value: 'cat', ignore: true }
                }
            }
        }
    }
}
</script>