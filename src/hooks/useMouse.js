export default  function () {
  const x = ref(0)
  const y = ref(0)
  const event = (e) => {
    x.value = e.clientX
    y.value = e.clientY
  }
  onMounted(() => {
    document.addEventListener('mousemove', event)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', event)
  })
  return { x, y }
}

