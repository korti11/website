<template>
  <span>{{property}}: <a class="value click" v-on:click="onClick(parameter)">'{{value}}'</a></span>
</template>

<script>
export default {
    props: [ 'property', 'value', 'onClick', 'parameter' ]
}
</script>

<style>
    .click.value {
        cursor: pointer;
    }
</style>