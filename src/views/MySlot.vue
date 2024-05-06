<template>
    <slot name="zain" v-bind="info"></slot>
</template>

<script setup>
const info = ref({
    name: 'zain'
})
</script>

<style lang="scss" scoped>
</style>
