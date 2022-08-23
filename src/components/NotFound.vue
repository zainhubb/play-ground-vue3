<template>
    <my-slot>
        <template #zain="info">{{ info.name }}</template>
    </my-slot>
</template>

<script setup>
const router = useRouter()
onMounted(() => {
    const tmp = router.currentRoute.value
})
</script>

<style lang="scss" scoped>
</style>
