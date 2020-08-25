<template>
    <span>{{property}}:
        <a v-if="external" class="value" :href="link" target="_blank">'{{link}}'</a>
        <a v-else :href="link" class="value">'{{message}}'</a>
    </span>
</template>

<script>
export default {
    props: ['property', 'link', 'message', 'external']
}
</script>