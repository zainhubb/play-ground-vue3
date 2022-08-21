<template>
  <div class="main">
    <common-header></common-header>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
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
const isMobile = computed(() => navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
</script>

<style scoped lang="postcss">
.main {
  width: 100vw;
  height: 100vh;
  cursor: none;

  & .mouse {
    position: absolute;
    left: v-bind("x+'px'");
    top: v-bind("y+'px'");
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--magic-color);
    pointer-events: none;
  }
}
</style>
