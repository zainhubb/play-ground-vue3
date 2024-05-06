<template>
  <div>
    <n-button @click="toggle">toggle</n-button>
    <demo :age="age"></demo>
    <n-button @click="tryRequest">try</n-button>
  </div>
</template>

<script setup>
import { reject } from 'lodash';
import { getUser } from '../network/api';
import demo from '../views/demo.vue'
const age = ref(0)
const toggle = () => {
  age.value++
}

const tryRequest = () => {
  // getUser()
  postUser({
    userId: 59,
    id: 13333,
    body: "sssss"
  })
  postUser({
    userId: 12,
    id: 5,
    body: "aaaa"
  })
}
</script>

<style lang="postcss" scoped>

</style>
