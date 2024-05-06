<template>
  <div class="not-found">
    <div class="word-container">
      <div v-for="a in 17">
        <div v-for="b in 6" class="word">4<span>{{oandzero[(6*a+b)%oandzero.length]}}</span>4 N<span>{{oandzero[(6*a+b+1)%oandzero.length]}}</span>t F<span>{{oandzero[(6*a+b+2)%oandzero.length]}}</span>und</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "@assets/style/rainbow.css";
import { onBeforeUnmount } from "vue";
const homePageStyle = ref(null);
const oandzero = ['⚽️','🌎','🌸','🍩','🍊','🐡','🧶']
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
</script>

<style lang="postcss" scoped>
.not-found {
  width: 100dvw;
  height: 100dvh;
  font-size: 65px;
  overflow: hidden;
  .word-container {
    --vp-home-hero-name-background: -webkit-linear-gradient(
      120deg,
      var(--vp-c-brand-1) 30%,
      var(--vp-c-brand-next)
    );
    width: 200dvw;
    height: 200dvh;
    background: var(--vp-home-hero-name-background);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: rotateZ(-25deg) translate(-10dvw, -80dvh);
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
  }
  .word {
    display: inline-block;
    margin: 0 15px;
    >span{
      -webkit-text-fill-color: initial;
    }
  }
}
</style>
