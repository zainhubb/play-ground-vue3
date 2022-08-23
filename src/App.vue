<template>
  <div class="main h-screen bg-bgcolor-light dark:bg-bgcolor-dark transition-colors	duration-300 ease-in-out">
    <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
      <com-header></com-header>
      <router-view></router-view>
      <com-mouse></com-mouse>
      <n-global-style />
    </n-config-provider>
  </div>
</template>

<script setup>
const cursorStyle = computed(() => openCustomPointer ? 'none' : 'normal')
const dark = computed(() => darkTheme)
const store = useStore()
const theme = computed(() => {
  return store.theme == 'dark' ? dark.value : ({})
})
const themeOverrides = {
  common: {
    fontFamily: "cinzel"
  },
}
</script>

<style scoped lang="postcss">
.main {
  cursor: v-bind(cursorStyle);
}
</style>
