<template>
    <div>
        <b-navbar class="header" sticky>
            <b-container fluid>
                <b-row class="text-center nav-row">
                    <b-col cols="1">
                        <b-button-group>
                                <b-button class="round" size="sm" variant="danger" v-on:click="close()"><b-icon-x/></b-button>
                                <b-button class="round" size="sm" variant="warning"><b-icon-dash/></b-button>
                                <b-button class="round" size="sm" variant="success" v-on:click="fullscreen()">
                                    <b-icon-arrows-angle-expand v-show="!isFullscreen"/>
                                    <b-icon-arrows-angle-contract v-show="isFullscreen"/>
                                </b-button>
                            </b-button-group> 
                    </b-col>
                    <b-col cols=10>
                        bash - korti.io
                    </b-col>
                </b-row>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isFullscreen: document.fullscreenElement !== null
        }
    },
    methods: {
        close: function() {
            window.close();
        },
        fullscreen: function() {
            const elem = document.documentElement;
            if(!this.isFullscreen) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) { /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE/Edge */
                    elem.msRequestFullscreen();
                }
                this.isFullscreen = true;
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    document.msExitFullscreen();
                }
                this.isFullscreen = false;
            }
        }
    }
}
</script>

<style>
    .header {
        background-color: #242424;
    }
    .header .navbar-text {
        color: whitesmoke;
    }
    .header .round {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        padding: 0;
        border-radius: 50% !important;
        font-size: 0.6rem;
        margin-right: 0.7rem;
    }
    .nav-row {
        width: 100%;
    }
</style>