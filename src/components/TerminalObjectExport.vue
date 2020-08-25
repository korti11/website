<template>
    <b-row>
        <b-col class="export">
            <span>export</span> = {
        </b-col>
        <b-col class="property" offset="1" cols="11" v-for="(value, name, index) in jsObj" :key="name">
            <terminal-array v-if="value.type === 'Array'" :property="name" :value="value.value"/>
            <terminal-link v-else-if="value.type === 'Link'" :property="name" :link="value.value" :message="value.message ? value.message : value.value" :external="value.external !== undefined ? value.external : true"/>
            <terminal-multi-text v-else-if="value.type === 'MultiText'" :property="name" :value="value.value"/>
            <terminal-click v-else-if="value.type === 'Click'" :property="name" :onClick="value.handler" :value="value.value"/>
            <terminal-text v-else :property="name" :value="value.value" />
            <span v-if="index !== (keyLength - 1)">,</span>
        </b-col>
        <div class="w-100"></div>
        <b-col>
            }
        </b-col>
    </b-row>
</template>

<script>
import TerminalArray from './output-types/TerminalArrayOutput.vue';
import TerminalLink from './output-types/TerminalLinkOutput.vue';
import TerminalText from './output-types/TerminalTextOutput.vue';
import TerminalMultiText from './output-types/TerminalMultiTextOutput.vue';
import TerminalClick from './output-types/TerminalClickOutput.vue'

export default {
    props: ['obj'],
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
            if(type === 'Object') {
                jsObj[name] = value;
            } else {
                jsObj[name] = {
                    type: this.getType(value),
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
            } else if(value !== null && typeof value === 'object') {
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
    .export span {
        color: orangered;
    }
    .property .value {
        color: steelblue;
    }
    .property.offset-1 {
        margin-left: 4.155555%;
    }
</style>