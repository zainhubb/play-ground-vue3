<template>
  <div>
    <n-button @click="toggle">toggle</n-button>
    <demo :age="age"></demo>
    <div class="flex bg-yellow-50 text-red-800 hover:text-blue hover:underline">
      31
    </div>
  </div>
</template>

<script setup>
const age = ref(0)
const toggle = () => {
  age.value++
  
}
getUser()
</script>

<style lang="postcss" scoped>

</style>
