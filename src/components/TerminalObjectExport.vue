<template>
    <b-row v-if="show">
        <b-col cols="12" lg="6">
            <span v-on:click="showObj = !showObj" class="export">export</span> = {
        </b-col>
        <b-col cols="12" lg="6">
            <span class="export comment">// 👈 You can click me to show and hide the object</span>
        </b-col>
        <b-col v-show="showObj" cols="12">
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
    },
    data: function() {
        let show = true;
        const propertyCount = Object.entries(this.obj).length;
        if(propertyCount === 1 && 'command' in this.obj) {
            show = false;
        }
        return {
            showObj: this.obj.showInitial != undefined ? this.obj.showInitial.value : true,
            show
        }
    }
}
</script>

<style>
    .export {
        color: orangered;
        cursor: pointer;
    }
    .export.comment {
        color: gray;
    }
</style>