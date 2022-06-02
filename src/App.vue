<template>
  <common-header></common-header>
  <a-config-provider :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { onMounted } from 'vue';
onMounted(() => {
  // window.addEventListener('scroll',()=>{
  //   console.log(document.documentElement.scrollTop);
  // })

});
</script>

<style lang="scss" scoped>
</style>
