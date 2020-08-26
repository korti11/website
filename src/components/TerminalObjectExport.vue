<template>
    <b-row>
        <b-col cols="12">
            <span class="export">export</span> = {
        </b-col>
        <b-col cols="12">
            <terminal-object :obj="obj"/>
        </b-col>
        <b-col>
            }
        </b-col>
    </b-row>
</template>

<script>
import TerminalObject from './output-types/TerminalObjectOutput.vue';

export default {
    props: ['obj'],
    components: {
        TerminalObject
    }
}
</script>

<style>
    .export {
        color: orangered;
    }
</style>