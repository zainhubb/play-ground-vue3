<template >
  <template v-if="showCustomPointer">
    <div class="mouse" ref="mouseRef"></div>
    <div class="mouseRange" ref="mouseRangeRef"></div>
  </template>
</template>

<script setup>
const showCustomPointer = computed(() => !isMobile && openCustomPointer)
const { x, y } = useMouse()
const mouseRef = ref(null)
const mouseRangeRef = ref(null)
const updateLocation = () => {
  requestAnimationFrame(() => {
    if (showCustomPointer.value) {
      mouseRef.value.style.left = x.value - 7.5 + 'px'
      mouseRef.value.style.top = y.value - 7.5 + 'px'
      mouseRangeRef.value.style.left = x.value - 17.5 + 'px'
      mouseRangeRef.value.style.top = y.value - 17.5 + 'px'
      updateLocation()
    }
  })
}
onMounted(() => {
  updateLocation()
})
</script>

<style lang="postcss" scoped>
.mouse {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: #fff;
  pointer-events: none;
  mix-blend-mode: exclusion;
  z-index: 9999;
}

.mouseRange {
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: #111;
  pointer-events: none;
  transition: 0.2s ease-out;
  pointer-events: none;
  mix-blend-mode: exclusion;
  z-index: 9999;
}
</style>
