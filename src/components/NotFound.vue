<template>
  <div class="not-found">
    <div class="sb">
      <div v-for="a in 17">
        <div v-for="b in 6" class="word">404 Not Found</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "@assets/style/rainbow.css";
import { onBeforeUnmount } from "vue";
const homePageStyle = ref(null);
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
  font-size: 60px;
  overflow: hidden;
  .sb {
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
    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
  }
  .word {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
