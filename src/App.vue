<template>
  <div class="main">
    <common-header></common-header>
    <router-view></router-view>
    <common-mouse></common-mouse>
  </div>
</template>

<script setup>
const cursorStyle = computed(()=>openCustomPointer ? 'none':'normal')
</script>

<style scoped lang="postcss">
.main {
  width: 100vw;
  height: 100vh;
  cursor: v-bind(cursorStyle);
}
</style>
