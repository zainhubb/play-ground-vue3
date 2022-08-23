<template>
  <div>
    <n-button @click="toggle">toggle</n-button>
    <demo :age="age"></demo>
    <h1 class="text-red-300 dark:text-white">123</h1>
  </div>
</template>

<script setup>
const age = ref(0)
const toggle = () => {
  age.value++
  if (localStorage.getItem('theme') == 'dark') {
    document.documentElement.setAttribute('data-mode', 'dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.setAttribute('data-mode', 'light')
    localStorage.setItem('theme', 'dark')
  }
}
getUser()
</script>

<style lang="postcss" scoped>
</style>
