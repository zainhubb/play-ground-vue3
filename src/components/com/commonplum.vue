<script setup>
const el = ref(null); // canvas element
const ctx = computed(() => el.value.getContext("2d"));
const HEIGHT = window.innerHeight; // canvas高度
const WIDTH = window.innerWidth; // canvas宽度
let startX = 0; // 起始点横坐标
let startY = 0; // 起始点纵坐标
const startBranchLength = 5; // 起始线长度
// const startAngle = startY === 0 ? Math.PI / 2 : startY === HEIGHT ? -Math.PI / 2 : startX == 0 ? 0 : -Math.PI // 起始线角度
const minBranchLength = 5; // 保底深度
const maxBranchLength = 100; // 最大深度
const branchStep = 0.5; // 产生左分枝和右分枝的概率 注意，如果最大深度比较大，超过0.5可能会变得很卡
const angleRange = 0.15; // 子树叶角度范围
const lengthRange = 0.1; // 子树叶长度范围
// const startPoint = {  // 初始话起始点
//     x: startX, y: startY
// }
// 计算起始点 防止生成在角落
function calculatePoint() {
  startX =  WIDTH * 0.3 * Math.random()
  // startX =
  //   Math.random() < 0.5
  //     ? Math.random() < 0.5
  //       ? 0
  //       : WIDTH
  //     : WIDTH * Math.random();
  // startY =
  //   startX === 0 || startX === WIDTH
  //     ? HEIGHT * Math.random()
  //     : Math.random() < 0.5
  //     ? 0
  //     : HEIGHT;
}

function init() {
  calculatePoint();
  const branch = {
    startPoint: {
      x: startX,
      y: startY,
    },
    length: startBranchLength,
    angle:
      startY === 0
        ? Math.PI / 2
        : startY === HEIGHT
        ? -Math.PI / 2
        : startX == 0
        ? 0
        : -Math.PI,
  };
  step(branch);
}

let branchList = [];
// 画出每一层的分支，并添加下一层分支
function frame() {
  const arr = [...branchList];
  branchList.length = 0;
  arr.forEach((fn) => {
    fn();
  });
}

// 执行间隔
let frameCount = 0;
function startFrame() {
  requestAnimationFrame(() => {
    frameCount += 1;
    if (frameCount % 2 === 0) frame();
    startFrame();
  });
}
// 递归执行画分支函数
startFrame();

// 配合 requestAnimationFrame 实现递归
function step(branch, depth = 0) {
  drawBranch(branch);
  if (
    depth < minBranchLength ||
    (Math.random() < branchStep && depth < maxBranchLength)
  ) {
    branchList.push(() =>
      step(
        {
          startPoint: getEndPoint(branch),
          length:
            branch.length +
            lengthRange * branch.length * (1 - Math.random() * 2),
          angle: branch.angle + angleRange * Math.random(),
        },
        depth + 1
      )
    );
  }
  if (
    depth < minBranchLength ||
    (Math.random() < branchStep && depth < maxBranchLength)
  ) {
    branchList.push(() =>
      step(
        {
          startPoint: getEndPoint(branch),
          length:
            branch.length +
            lengthRange * branch.length * (1 - Math.random() * 2),
          angle: branch.angle - angleRange * Math.random(),
        },
        depth + 1
      )
    );
  }
}
// 画分支工具函数
function drawBranch(branch) {
  drawLine(branch.startPoint, getEndPoint(branch));
}
// 画线工具函数
function drawLine(p1, p2) {
  ctx.value.beginPath();
  ctx.value.moveTo(p1.x, p1.y);
  ctx.value.lineTo(p2.x, p2.y);
  ctx.value.strokeStyle = "rgba(0,0,0,0.17)";
  ctx.value.stroke();
}
// 获取线段终点坐标
function getEndPoint(line) {
  return {
    x: line.startPoint.x + line.length * Math.cos(line.angle),
    y: line.startPoint.y + line.length * Math.sin(line.angle),
  };
}
onMounted(() => {
  init();
});
</script>

<template>
  <canvas ref="el" :width="WIDTH" :height="HEIGHT" class="canvas"></canvas>
</template>

<style scoped lang="postcss">
.canvas {
  position: absolute;
  pointer-events: none;
}
</style>
