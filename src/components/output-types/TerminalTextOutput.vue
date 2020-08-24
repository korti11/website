<template>
    <span>{{property}}: <span class="value">'{{value}}'</span></span>
</template>

<script>
export default {
    props: ['property', 'value']
}
</script>