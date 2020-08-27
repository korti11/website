<template>
  <b-modal id="preview-modal" ref="modal" size="sm" :centered="true" hide-header hide-footer title="Image Preview">
      <div class="d-block text-center">
          <h4>Image Preview</h4>
      </div>
      <b-img-lazy thumbnail fluid :src="image" :alt="alt"/>
      <div class="d-block text-center">
          {{imageName}}
      </div>
  </b-modal>
</template>

<script>
import { BModal, BImgLazy } from 'bootstrap-vue';

export default {
    components: {
        BModal,
        BImgLazy
    },
    props: [ 'image', 'alt' ],
    computed: {
        imageName: function() {
            const index = this.image.lastIndexOf('/');
            return this.image.substring(index + 1);
        }
    },
    methods: {
        show: function() {
            this.$refs['modal'].show();
        }
    }
}
</script>

<style>
    #preview-modal .modal-content {
        background-color: rgba(119, 136, 153, 0.8);
        color: white;
    }
</style>