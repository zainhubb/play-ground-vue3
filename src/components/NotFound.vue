<template>
    <a-result status="404" title="404"></a-result>
    <!-- <my-slot>
        <template #zain="info">{{ info.name }}</template>
    </my-slot> -->
</template>

<script setup>import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(() => {
    const tmp = router.currentRoute.value
    console.log(tmp);
})
</script>

<style lang="scss" scoped>
</style>
