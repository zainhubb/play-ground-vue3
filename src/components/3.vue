<template>
    <div>
        <a-button @click="toggle">toggle</a-button>
    </div>
</template>

<script setup>
import { getUser } from '../network/api.js'
import { Modal } from 'ant-design-vue';
const toggle = () => {
    Modal.confirm({
        title: '标题',
        content: '内容',
        onOk: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        })
    })
}
getUser()
</script>

<style lang="scss" scoped>
</style>