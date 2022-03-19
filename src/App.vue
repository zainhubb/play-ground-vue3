<template>
  <common-header></common-header>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  // window.addEventListener('scroll',()=>{
  //   console.log(document.documentElement.scrollTop);
  // })
  
});
</script>

<style lang="scss" scoped>
</style>