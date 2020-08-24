<template>
    <span>
        <span>{{property}}:</span> [
        <span v-for="(entry, index) in value" :key="entry">
            <span class="value">'{{entry}}'</span>
            <span v-if="index !== (value.length - 1)">, </span>
        </span>
        ]
    </span>
</template>

<script>
export default {
    props: ['property', 'value']
}
</script>

<style>
    .wrapper {
        width: fit-content;
    }
</style>
