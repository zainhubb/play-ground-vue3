<template>
  <div>
    <div class="container flex gap-[10px] flex-wrap w-[320px] mx-auto mt-0 mb-0 p-[10px] box-content ">
      <div
        class="item   w-[100px] h-[100px] flex justify-center items-center bg-shallowblack-300 hover:bg-shallowblack-400 dark:bg-shallowblack-500 dark:hover:bg-shallowblack-600"
        v-for="(item, index) in 9" @click="go(index + 1)">{{ index + 1 }}</div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const go = (e) => {
  router.hasRoute(e + '') && router.push(`/playground/${e}`)
}
</script>

<style  scoped lang="postcss">
.container {
  .item {
  }
}
</style>
