<template>
  <div class="main">
    <common-header></common-header>
    <a-config-provider :locale="zhCN">
      <router-view></router-view>
    </a-config-provider>
    <template v-if="!isMobile">
      <div class="mouse" ref="mouseRef"></div>
      <div class="mouseRange" ref="mouseRangeRef"></div>
    </template>

  </div>
</template>

<script setup>
import useMouse from './hooks/useMouse';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { onMounted, watchEffect, ref, computed } from 'vue';
const { x, y } = useMouse()
const mouseRef = ref(null)
const mouseRangeRef = ref(null)
const updateLocation = () => {
  requestAnimationFrame(() => {
    mouseRef.value.style.left = x.value - 5 + 'px'
    mouseRef.value.style.top = y.value - 5 + 'px'
    mouseRangeRef.value.style.left = x.value - 15 + 'px'
    mouseRangeRef.value.style.top = y.value - 15 + 'px'
    updateLocation()
  })
}
onMounted(() => {
  updateLocation()
})
const isMobile = computed(() => navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
</script>

<style scoped lang="postcss">
.main {
  width: 100vw;
  height: 100vh;
  cursor: none;

  & .mouse {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #fff;
    pointer-events: none;
    mix-blend-mode: exclusion
  }

  & .mouseRange {
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    background-color: #111;
    pointer-events: none;
    transition: 0.2s ease-out;
    pointer-events: none;
    mix-blend-mode: exclusion
  }
}
</style>
