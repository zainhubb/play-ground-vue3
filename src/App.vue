<template>
  <div class="main h-screen bg-bgcolor-light dark:bg-bgcolor-dark transition-colors	duration-300 ease-in-out">
    <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
      <commonheader></commonheader>
      <router-view></router-view>
      <commonmouse></commonmouse>
      <n-global-style />
    </n-config-provider>
    <Teleport to="body">
      <div class="mask" v-show="requesting">
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const cursorStyle = computed(() => openCustomPointer ? 'none' : 'normal')
const dark = computed(() => darkTheme)
const store = useStore()
const theme = computed(() => {
  return store.theme == 'dark' ? dark.value : ({})
})
const requesting = computed(()=>store.requesting)
const themeOverrides = {
  common: {
    fontFamily: "cinzel"
  },
}
</script>

<style scoped lang="postcss">
.mask {
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: none;

  & .spinner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & .rect1,
    & .rect2,
    & .rect3,
    & .rect4 {
      width: 5px;
      background-color: rgb(21, 183, 48);
      margin-right: 3px;
      animation: grow 1.2s infinite ease-in-out;
    }

    & .rect2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }

    & .rect3 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }

    & .rect4 {
      margin-right: 0;
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

  }
}

@keyframes grow {
  0% {
    height: 0;
  }

  50% {
    height: 30px;
  }

  100% {
    height: 0;
  }
}

.main {
  cursor: v-bind(cursorStyle);
}
</style>
