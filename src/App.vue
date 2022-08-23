<template>
  <div class="main">
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
  width: 100vw;
  height: 100vh;
  cursor: v-bind(cursorStyle);
}
</style>
