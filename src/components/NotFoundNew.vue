<template>
    <div class="not-found">
      <div class="word-container">
        <div v-for="a in rowsNum" class="word-row">
          <div v-for="b in colsNum" class="word">
            4<span>{{ oandzero[(6 * a + b) % oandzero.length] }}</span
            >4 N<span>{{ oandzero[(6 * a + b + 1) % oandzero.length] }}</span
            >t F<span>{{ oandzero[(6 * a + b + 2) % oandzero.length] }}</span
            >und
          </div>
          <div v-for="b in colsNum" class="word">
            4<span>{{ oandzero[(6 * a + b) % oandzero.length] }}</span
            >4 N<span>{{ oandzero[(6 * a + b + 1) % oandzero.length] }}</span
            >t F<span>{{ oandzero[(6 * a + b + 2) % oandzero.length] }}</span
            >und
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import "@assets/style/rainbow.css";
  import { computed, onBeforeUnmount } from "vue";
  const homePageStyle = ref(null);
  const oandzero = ["⚽️", "🌎", "🌸", "🍩", "🍊", "🐡", "🧶"];
  const updateHomePageStyle = (value) => {
    if (value) {
      if (homePageStyle.value) return;
      homePageStyle.value = document.createElement("style");
      homePageStyle.value.innerHTML = `
      :root {
        animation: rainbow 12s linear infinite;
      }`;
      document.body.appendChild(homePageStyle.value);
    } else {
      if (!homePageStyle.value) return;
  
      homePageStyle.value.remove();
      homePageStyle.value = undefined;
    }
  };
  updateHomePageStyle(true);
  onBeforeUnmount(() => {
    updateHomePageStyle(false);
  });
  const contentHeight = computed(() => {
    return Math.ceil(
      Math.abs(
        Math.hypot(window.innerHeight, window.innerWidth) /
          Math.cos(
            (Math.PI / 180) *
              ((
                (Math.atan2(window.innerWidth, window.innerHeight) * 180) /
                Math.PI
              ).toFixed(2) -
                30)
          )
      )
    );
  });
  const contentWidth = computed(() => {
    return Math.ceil(
      Math.abs(
        Math.hypot(window.innerHeight, window.innerWidth) /
          Math.sin(
            (Math.PI / 180) *
              ((
                (Math.atan2(window.innerWidth, window.innerHeight) * 180) /
                Math.PI
              ).toFixed(2) -
                30)
          )
      )
    );
  });
  const rowsNum = computed(() => {
    return Math.ceil(contentHeight.value / 100);
  });
  const colsNum = computed(() => {
    return Math.ceil(contentWidth.value / 620 / 2);
  });
  const yOffset = computed(() => {
    return (contentHeight.value - window.innerHeight) / 2;
  });
  const xOffset = computed(() => {
    return (contentWidth.value - window.innerWidth) / 2;
  });
  const startFrame = computed(() => {
    return `rotateZ(-30deg) translate(0, -${yOffset.value}px)`;
  });
  const endFrame = computed(() => {
    return `rotateZ(-30deg) translate(-50%, -${yOffset.value}px)`;
  });
  // const startFrame = computed(() => {
  //   return `rotateZ(-30deg) translate(0,  calc(-400dvh * sin(30deg) * cos(30deg)))`;
  // });
  // const endFrame = computed(() => {
  //   return `rotateZ(-30deg) translate(-50%,  calc(-400dvh * sin(30deg) * cos(30deg)))`;
  // });
  </script>
  
  <style lang="postcss" scoped>
  .not-found {
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
    .word-container {
      width: max-content;
      height: max-content;
    }
    .word-row {
      --vp-home-hero-name-background: -webkit-linear-gradient(
        120deg,
        var(--vp-c-brand-1) 30%,
        var(--vp-c-brand-next)
      );
      animation: marquee 20s infinite linear;
      background: var(--vp-home-hero-name-background);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
      .word {
        height: 100px;
        line-height: 100px;
        width: 620px;
        display: inline-block;
        font-size: 60px;
        font-weight: 700;
        text-align: center;
        > span {
          -webkit-text-fill-color: initial;
        }
      }
    }
  }
  @keyframes marquee {
    0% {
      transform: v-bind("startFrame");
    }
  
    100% {
      transform: v-bind("endFrame");
    }
  }
  </style>
  