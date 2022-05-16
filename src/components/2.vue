<template>
    <div class="container" ref="canvas" @click="f.addBox"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Matter from 'matter-js'
const { Bodies, Composite, Runner, Render, Engine } = Matter
const canvas = ref(null)
const engine = ref(null)
const bodyStyle = {
    fillStyle: 'transparent',
    strokeStyle: 'black',
    lineWidth: 1,
}
engine.value = Engine.create();
const f = {
    addBox: null
}

onMounted(async () => {

    var render = Render.create({
        element: canvas.value,
        engine: engine.value,
        options: {
            height: 600, width: 600,
            background: '#ffffff',
            wireframes: false,
        }
    });
    // 中心点x,y,宽度,高度
    var ground = Bodies.rectangle(550, 300, 500, 80, {
        isStatic: true, render: bodyStyle
    });

    // add all of the bodies to the world
    Composite.add(engine.value.world, [ground]);
    f.addBox = () => {
        var tmpBox = Bodies.rectangle(300, -40, 80, 80, {
            render: bodyStyle
        });
        Composite.add(engine.value.world, tmpBox);
    }
    f.addBox()
    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine.value);
})
</script>

<style lang="postcss" scoped>
.container {
    width: 600px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid black;
    box-sizing: content-box;
}
</style>
