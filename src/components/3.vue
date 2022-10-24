<template>
  <div>
    <n-button @click="toggle">toggle</n-button>
    <demo :age="age"></demo>
    <n-button @click="tryRequest">try</n-button>
  </div>
</template>

<script setup>
import { reject } from 'lodash';

const age = ref(0)
const toggle = () => {
  age.value++
}

const tryRequest = () => {
  getUser()
}
</script>

<style lang="postcss" scoped>

</style>
