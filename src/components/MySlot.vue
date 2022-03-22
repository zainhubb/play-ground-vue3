<template>
    <slot name="zain" :info="a"></slot>
</template>

<script setup>
import { ref } from 'vue';
const a = ref({
    name: 'zain'
})
</script>

<style lang="scss" scoped>
</style>