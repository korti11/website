<template>
    <b-container fluid>
        <b-row class="h-100">
            <b-col class="terminal-output" cols="12" :md="imagePreviewVisibility ? 9 : 12">
                <vuescroll :ops="ops">
                    <div id="output">
                        <terminal-command command="page ."/>
                        <b-row>
                            <b-col>
                                <h1>{{page}}</h1>
                            </b-col>
                        </b-row>
                        <div v-for="(value, name) in input" :key="name">
                            <terminal-command :command="`cat ${name}.js`"/>
                            <terminal-object-export :obj="value"/>
                        </div>
                    </div>
                </vuescroll>
            </b-col>
            <b-col>
                <terminal-image-preview :image="image" :alt="imageAlt" v-show="imagePreviewVisibility"/>
            </b-col>
        </b-row>
        <terminal-image-modal ref="image-modal" :image="image" :alt="imageAlt"/>
    </b-container>
</template>

<script>
import TerminalCommand from './TerminalCommand.vue';
import TerminalObjectExport from './TerminalObjectExport.vue';
import TerminalImagePreview from './TerminalImagePreview.vue';
import TerminalImageModal from './TerminalImageModal.vue';
import Vuescroll from 'vuescroll/dist/vuescroll-native';

export default {
    components: {
        TerminalCommand,
        TerminalObjectExport,
        TerminalImagePreview,
        TerminalImageModal,
        Vuescroll
    },
    props: ['page', 'input'],
    data: function() {
        this.addImageHandler(this.input);
        return {
            publicPath: process.env.BASE_URL,
            imagePreviewVisibility: false,
            image: '',
            imageAlt: '',
            ops: {
                scrollPanel: {
                    scrollingX: false
                },
                bar: {
                    onlyShowBarOnScroll: false,
                    background: '#5e5e5e'
                }
            }
        }
    },
    methods: {
        imageClick: function(imageObj) {
            this.image = `${this.publicPath}${imageObj.image}`;
            this.imageAlt = imageObj.image;
            this.imagePreviewVisibility = !this.imagePreviewVisibility;
            if(window.innerWidth < 768) {
                this.$refs['image-modal'].show();
            }
        },
        addImageHandler: function(obj) {
            for(let prop in obj) {
                const value = obj[prop];
                if(typeof value === 'object') {
                    if('image' in value) {
                        value.handler = this.imageClick
                    } else {
                        this.addImageHandler(value);
                    }
                }
            }
        }
    },
    mounted: function() {
        this.$root.$on('bv::modal::hidden', (bvEvent, modalId) => {
            if(modalId === 'preview-modal') {
                this.imagePreviewVisibility = false;
            }
        })
    }
}
</script>

<style>
    .terminal-output {
        font-family: 'Roboto Mono';
        font-size: 1.2rem;

        max-height: calc(100vh - 40px);
        overflow-y: auto;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }
    .terminal-output #output {
        margin-top: 0.7rem;
        margin-bottom: 0.2rem;
    }
</style>