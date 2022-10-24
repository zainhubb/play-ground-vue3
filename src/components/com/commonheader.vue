<template>
    <div
        :class="['header flex sticky top-0 mb-[20px] pl-[20px] pr-[20px] items-center h-[60px] justify-between', { 'scrolled': scrolled }]">
        <div class=" text " @click="go">{{ isIndex ? 'zain' : 'back' }}</div>
        <n-icon v-if="showMenu" @click="toggleDrawer">
            <Apps></Apps>
        </n-icon>
        <n-switch v-else v-model:value="theme" size="medium" checked-value="dark" unchecked-value="light"
            @click="changeTheme">
            <template #icon>
                <Sunny></Sunny>
            </template>
            <template #checked-icon>
                <n-icon>
                    <Moon></Moon>
                </n-icon>
            </template>
        </n-switch>
        <n-drawer v-model:show="active" placement="right">
            <n-drawer-content title="menu">
                <n-switch v-model:value="theme" size="medium" checked-value="dark" unchecked-value="light"
                    @click="changeTheme">
                    <template #icon>
                        <Sunny></Sunny>
                    </template>
                    <template #checked-icon>
                        <n-icon>
                            <Moon></Moon>
                        </n-icon>
                    </template>
                </n-switch>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script setup>
import { Apps, Moon, Sunny } from "@vicons/ionicons5";
const showMenu = computed(() => isMobile)
const router = useRouter()
const store = useStore()
const isIndex = computed(() => router.currentRoute.value.path === '/')
const go = () => {
    router.push('/')
}
const active = ref(false)
const toggleDrawer = () => {
    active.value = !active.value
}
const theme = ref('light')
const changeTheme = () => {
    if (theme.value == 'light') {
        document.documentElement.setAttribute('data-mode', 'light')
        store.theme = 'light'
    } else {
        document.documentElement.setAttribute('data-mode', 'dark')
        store.theme = 'dark'
    }
}
onMounted(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.value = 'dark'
        changeTheme()
    }
})
const scrolled = ref(false)
window.addEventListener('scroll', () => {
    scrolled.value = document.documentElement.scrollTop > 0
})
</script>

<style scoped lang="postcss">
.header {
    background-image: radial-gradient(transparent 1px, var(--magic-bg) 1px);
    background-size: 3px 3px;

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
