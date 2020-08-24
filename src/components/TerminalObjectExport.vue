<template>
    <b-row>
        <b-col class="export">
            <span>export</span> = {
        </b-col>
        <b-col class="property" offset="1" cols="11" v-for="(value, name, index) in jsObj" :key="name">
            {{name}}: <span>'{{ value }}'</span>
            <span v-if="index !== (keyLength - 1)">,</span>
        </b-col>
        <div class="w-100"></div>
        <b-col>
            }
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: ['obj'],
    data: function() {
        return {
            jsObj: this.obj,
            keyLength: Object.keys(this.obj).length
        }
    }
}
</script>

<style>
    .export span {
        color: orangered;
    }
    .property span {
        color: steelblue;
    }

</style>