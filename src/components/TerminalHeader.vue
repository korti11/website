<template>
    <div>
        <b-navbar class="header" sticky>
            <b-container fluid>
                <b-row class="text-center">
                    <b-col cols="1">
                        <b-button-group>
                                <b-button class="round" size="sm" variant="danger"><b-icon-x/></b-button>
                                <b-button class="round" size="sm" variant="warning"><b-icon-dash/></b-button>
                                <b-button class="round" size="sm" variant="success"><b-icon-arrows-angle-expand/></b-button>
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
    .row {
        width: 100%;
    }
</style>