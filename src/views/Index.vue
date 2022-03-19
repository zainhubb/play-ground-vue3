<template>
  <div>
    <div class="container">
      <div class="item" v-for="(item, index) in 9" @click="go(index + 1)">{{ index + 1 }}</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const go = (e) => {
  router.hasRoute(e + '') && router.push(`/playground/${e}`)
}
</script>

<style  scoped lang="postcss">
.container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 320px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid black;
  box-sizing: content-box;
  & .item {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
}
</style>