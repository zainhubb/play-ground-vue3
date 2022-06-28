<template>
  <div class="main">
    <common-header></common-header>
    <a-config-provider :locale="zhCN">
      <router-view></router-view>
    </a-config-provider>
    <div class="mouse" v-if="!isMobile"></div>
  </div>
</template>

<script setup>
import useMouse from './hooks/useMouse';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { onMounted, watchEffect, ref, computed } from 'vue';
const { x, y } = useMouse()
const xa = computed(()=>x.value+"px")
const ya = computed(()=>y.value+"px")
const isMobile = computed(()=>navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
</script>

<style scoped lang="postcss">
.main {
  width: 100vw;
  height: 100vh;
  cursor: none;

  & .mouse {
    position: absolute;
    left: v-bind('xa');
    top: v-bind('ya');
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: black;
    pointer-events: none;
  }
}
</style>
