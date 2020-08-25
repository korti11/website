<template>
    <b-row class="preview-wrapper">
        <b-col class="my-auto">
            <b-row class="text-center">
                <b-col>
                    <h3>Image preview</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-img-lazy thumbnail fluid :src="image" :alt="alt"/>
                </b-col>
            </b-row>
            <b-row class="text-center">
                <b-col><span>{{imageName}}</span></b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: ['image', 'alt'],
    data: function() {
        const index = this.image.lastIndexOf('/');
        const imageName = this.image.substring(index + 1);
        return {
            imageName
        }
    }
}
</script>

<style>
    .preview-wrapper {
        background-color: rgba(119, 136, 153, 0.3);
        height: 100%;
    }
</style>