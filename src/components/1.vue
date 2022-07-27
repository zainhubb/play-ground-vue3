<script setup>
import { computed, onMounted, ref } from 'vue';
console.log(window.innerWidth)
console.log(window.innerHeight)
const el = ref(null) // canvas element
const ctx = computed(() => el.value.getContext('2d'))
const HEIGHT = window.innerWidth>600?600:window.innerWidth // canvas高度
const WIDTH = HEIGHT  // canvas宽度
let startX = 0 // 起始点横坐标
let startY = 0// 起始点纵坐标
const startBranchLength = 5 // 起始线长度
// const startAngle = startY === 0 ? Math.PI / 2 : startY === HEIGHT ? -Math.PI / 2 : startX == 0 ? 0 : -Math.PI // 起始线角度
const minBranchLength = 5 // 保底深度
const maxBranchLength = 1000 // 最大深度
const branchStep = 0.5 // 产生左分枝和右分枝的概率 注意，如果最大深度比较大，超过0.5可能会变得很卡
const angleRange = 0.25 // 子树叶角度范围
const lengthRange = 0.1 // 子树叶长度范围
// const startPoint = {  // 初始话起始点
//     x: startX, y: startY
// }
// 计算起始点 防止生成在角落
function calculatePoint() {
    startX = Math.random() < 0.5 ? Math.random() < 0.5 ? 0 : WIDTH : WIDTH * Math.random()
    startY = (startX === 0 || startX === WIDTH) ? HEIGHT * Math.random() : Math.random() < 0.5 ? 0 : HEIGHT
}

function init() {
    calculatePoint()
    const branch = {
        startPoint: {
            x:startX,
            y:startY
        },
        length: startBranchLength,
        angle: startY === 0 ? Math.PI / 2 : startY === HEIGHT ? -Math.PI / 2 : startX == 0 ? 0 : -Math.PI
    }
    step(branch)
}

let branchList = []
// 画出每一层的分支，并添加下一层分支
function frame() {
    const arr = [...branchList]
    branchList.length = 0
    arr.forEach(fn => {
        fn()
    })
}

// 执行间隔
let frameCount = 0
function startFrame() {
    requestAnimationFrame(() => {
        frameCount += 1
        if (frameCount % 2 === 0)
            frame()
        startFrame()
    })
}
// 递归执行画分支函数
startFrame()

// 配合 requestAnimationFrame 实现递归
function step(branch, depth = 0) {
    drawBranch(branch)
    if (depth < minBranchLength || Math.random() < branchStep && depth < maxBranchLength) {
        branchList.push(() => step({
            startPoint: getEndPoint(branch),
            length: branch.length + lengthRange * branch.length * (1 - Math.random() * 2),
            angle: branch.angle + angleRange * Math.random()
        }, depth + 1))
    }
    if (depth < minBranchLength || Math.random() < branchStep && depth < maxBranchLength) {
        branchList.push(() => step({
            startPoint: getEndPoint(branch),
            length: branch.length + lengthRange * branch.length * (1 - Math.random() * 2),
            angle: branch.angle - angleRange * Math.random()
        }, depth + 1))
    }
}
// 画分支工具函数
function drawBranch(branch) {
    drawLine(branch.startPoint, getEndPoint(branch))
}
// 画线工具函数
function drawLine(p1, p2) {
    ctx.value.beginPath()
    ctx.value.moveTo(p1.x, p1.y)
    ctx.value.lineTo(p2.x, p2.y)
    ctx.value.strokeStyle = "rgba(0,0,0,0.3)"
    ctx.value.stroke()
}
// 获取线段终点坐标
function getEndPoint(line) {
    return {
        x: line.startPoint.x + line.length * Math.cos(line.angle),
        y: line.startPoint.y + line.length * Math.sin(line.angle)
    }
}
onMounted(() => {
    init()
})
function reDraw() {
    branchList = []
    ctx.value.clearRect(0, 0, WIDTH, HEIGHT)
    init()
}
function download() {
    const link = document.createElement('a')
    link.href = el.value.toDataURL('image/png')
    link.download = new Date().toLocaleString() + '.png'
    link.click()
}
</script>

<template>
    <div class="canvas" :style="{ height: HEIGHT + 'px', width: WIDTH + 'px' }">
        <canvas ref="el" :width="WIDTH" :height="HEIGHT"></canvas>
    </div>
    <div class="botton">
        <button @click="reDraw">redraw</button>
        <button @click="download">download</button>
    </div>
</template>

<style scoped lang="postcss">
.botton {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap:20px;
    & button {
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        background: transparent;
        cursor: none;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        color: black;
        transition: all 0.3s;

        &:hover {
            background: rgba(0, 0, 0, 1);
            color: #fff;
        }
    }
}

.canvas {
    border: 1px solid black;
    margin: 0 auto;
}
</style>
