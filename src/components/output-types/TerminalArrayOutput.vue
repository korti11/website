<template>
    <span>
        <span>{{property}}:</span> [
        <span v-for="(entry, index) in value" :key="index">
            <b-row v-if="typeof entry === 'object'">
                <b-col class="object-entry" cols="11" offset="1">
                    {
                    <terminal-object :obj="entry"/>
                    <span v-if="index !== (value.length - 1)">}, </span>
                    <span v-else>}</span>
                </b-col>
            </b-row>
            <span v-else>
                <span class="value">'{{entry}}'</span>
                <span v-if="index !== (value.length - 1)">, </span>
            </span>
        </span>
        ]
    </span>
</template>

<script>
export default {
    components: {
        TerminalObject: () => import('./TerminalObjectOutput.vue')
    },
    props: ['property', 'value']
}
</script>

<style>
    .object-entry.offset-1 {
        margin-left: 2%;
    }
</style>