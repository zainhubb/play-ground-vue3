<template>
  <div>
    <p>{{age}}</p>
    <span>{{age}}</span>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref, useAttrs } from 'vue';

const props = defineProps({
  age: {
    type: Number,
    default: 0
  }
})
const colorList = ref(['red','blue','green','yellow','pink','gray','purple','orange'])
const color = computed(()=>{
  return colorList.value[props.age%colorList.value.length]
})
</script>

<style lang="postcss" scoped>
  p{
    color: v-bind('color');
  }
</style>
