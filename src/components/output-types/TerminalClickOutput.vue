<template>
  <span>{{property}}: <a class="value click" v-on:click="onClick">'{{value}}'</a></span>
</template>

<script>
export default {
    props: [ 'property', 'value', 'onClick' ]
}
</script>

<style>
    .click.value {
        cursor: pointer;
    }
</style>