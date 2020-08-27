<template>
    <b-row>
        <b-col cols="12" v-if="property">{{ property }}: {</b-col>
        <b-col class="property" offset="1" cols="11" v-for="(value, name, index) in jsObj" :key="name">
            <b-row v-if="value.comment">
                <b-col cols="12" lg="6">
                    <terminal-array v-if="value.type === 'Array'" :property="name" :value="value.value"/>
                    <terminal-object v-else-if="value.type === 'Object'" :property="name" :obj="value.value"/>
                    <terminal-link v-else-if="value.type === 'Link'" :property="name" :link="value.value" :message="value.message ? value.message : value.value" :external="value.external !== undefined ? value.external : true"/>
                    <terminal-multi-text v-else-if="value.type === 'MultiText'" :property="name" :value="value.value"/>
                    <terminal-click v-else-if="value.type === 'Click'" :property="name" :onClick="value.handler" :value="value.value"/>
                    <terminal-text v-else :property="name" :value="value.value"/>
                    <span v-if="value.type === 'Object'">}</span>
                    <span v-if="index !== (keyLength - 1)">,</span>
                </b-col>
                <b-col>
                    <span class="comment">// {{value.comment}}</span>
                </b-col>
            </b-row>
            <b-row v-else>
                <b-col>
                    <terminal-array v-if="value.type === 'Array'" :property="name" :value="value.value"/>
                    <terminal-object v-else-if="value.type === 'Object'" :property="name" :obj="value.value"/>
                    <terminal-link v-else-if="value.type === 'Link'" :property="name" :link="value.value" :message="value.message ? value.message : value.value" :external="value.external !== undefined ? value.external : true" :commment="value.comment"/>
                    <terminal-multi-text v-else-if="value.type === 'MultiText'" :property="name" :value="value.value"/>
                    <terminal-click v-else-if="value.type === 'Click'" :property="name" :onClick="value.handler" :value="value.value"/>
                    <terminal-text v-else :property="name" :value="value.value"/>
                    <span v-if="value.type === 'Object'">}</span>
                    <span v-if="index !== (keyLength - 1)">,</span>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import TerminalArray from './TerminalArrayOutput.vue';
import TerminalLink from './TerminalLinkOutput.vue';
import TerminalText from './TerminalTextOutput.vue';
import TerminalMultiText from './TerminalMultiTextOutput.vue';
import TerminalClick from './TerminalClickOutput.vue'

export default {
    props: ['obj', 'property'],
    name: 'terminal-object',
    components: {
        TerminalArray,
        TerminalLink,
        TerminalText,
        TerminalMultiText,
        TerminalClick
    },
    data: function() {
        const jsObj = { };
        for(let name in this.obj) {
            const value = this.obj[name];
            const type = this.getType(value);
            if(type === 'Custom') {
                jsObj[name] = value;
            } else {
                jsObj[name] = {
                    type,
                    value
                }
            }
        }
        return {
            jsObj,
            keyLength: Object.keys(this.obj).length
        }
    },
    methods: {
        getType: function(value) {
            const urlRegex = new RegExp(/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i);
            const multiValueRegex = new RegExp(/('(\w|\d)*' \| )+'(\w|\d)*'/i);

            if(Array.isArray(value)) {
                return 'Array';
            } else if(value !== undefined && value.type !== undefined && typeof value === 'object') {
                return 'Custom';
            } else if(typeof value === 'object') {
                return 'Object';
            } else if(urlRegex.test(value)) {
                return 'Link';
            } else if (multiValueRegex.test(value)) {
                return 'MultiText'
            } else {
                return 'Text';
            }
        }
    }
}
</script>

<style>
    .property .value {
        color: steelblue;
    }
    .property.offset-1 {
        margin-left: 4.155555%;
    }
    .property .comment {
        color: gray;
    }
</style>