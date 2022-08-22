<template>
    <div>
        <a-button @click="toggle">toggle</a-button>
        <demo :age="age"></demo>
        <h1 class="text-red-300 dark:text-white">123</h1>
    </div>
</template>

<script setup>
import demo from './demo.vue'
import { getUser } from '../network/api.js'
import { Modal } from 'ant-design-vue';
import { ref } from 'vue';

const age = ref(0)
const toggle = () => {
     age.value++
    // Modal.confirm({
    //     title: '标题',
    //     content: '内容',
    //     onOk: () => new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve();
    //         }, 2000);
    //     })
    // })
      if(localStorage.getItem('theme')=='dark'){
        document.documentElement.setAttribute('data-mode','dark')
        localStorage.setItem('theme','light')
      }else{
        document.documentElement.setAttribute('data-mode','light')
        localStorage.setItem('theme','dark')
      }
}
getUser()
</script>

<style lang="postcss" scoped>
</style>
