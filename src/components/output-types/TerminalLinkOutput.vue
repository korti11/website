<template>
  <span>{{property}}: <a class="value" :href="link" target="_blank">'{{link}}'</a></span>
</template>

<script>
export default {
    props: ['property', 'link']
}
</script>