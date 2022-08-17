<template>
    <div :class="['header', { 'scrolled': scrolled }]">
        <div class="text" @click="go">{{ isIndex ? 'zain' : 'back' }}</div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const isIndex = computed(() => router.currentRoute.value.path === '/')
const go = () => {
    router.push('/')
}
const scrolled = ref(false)
window.addEventListener('scroll', () => {
    scrolled.value = document.documentElement.scrollTop > 0
})
</script>

<style scoped lang="postcss">
.header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
    position: sticky;
    top: 0;
    background-image: radial-gradient(transparent 1px,var(--magic-bg) 1px);
    background-size: 3px 3px;
    color: var(--magic-color);
    & .text {
        text-shadow: 0 5px 5px var(--magic-textshadow);
    }
}

.scrolled {
    background-color: transparent;
    box-shadow: 1px 0 10px var(--magic-boxshadow);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
</style>
