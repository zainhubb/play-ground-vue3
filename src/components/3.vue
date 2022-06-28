<template>
    <div>
        <a-button @click="toggle">toggle</a-button>
        <demo :age="age"></demo>
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
}
getUser()
</script>

<style lang="postcss" scoped>
</style>
