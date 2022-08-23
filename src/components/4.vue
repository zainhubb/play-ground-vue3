<template>
  <div class="container">
    <!-- <Renderer ref="renderer" v-bind="option">
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer> -->
  </div>
</template>

<script setup>
const renderer = ref(null)
const box = ref(null)
const option = reactive({
  orbitCtrl: true,
  width: 500,
  height: 500
})
onMounted(() => {
  // renderer.value.onBeforeRender(() => {
  //   box.value.mesh.rotation.x += 0.01;
  // });
})

</script>

<style lang="postcss" scoped>
.container {
  width: 500px;
  height: 500px;
  margin: 100px auto;
  border: 1px solid #000;
}
</style>
