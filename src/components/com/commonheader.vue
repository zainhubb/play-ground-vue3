<template>
  <div
    :class="[
      'header flex sticky top-0 mb-[20px] pl-[20px] pr-[20px] items-center h-[60px] justify-between',
      { scrolled: scrolled },
    ]"
  >
    <div :class="{ text: true, isIndex }" @click="go">
      {{ isIndex ? "👋" : "back" }}
    </div>
    <n-icon v-if="showMenu" @click="toggleDrawer">
      <ic-baseline-apps />
    </n-icon>
    <n-switch
      v-else
      @click="changeTheme"
      :value="store.themeGetters"
      size="medium"
      checked-value="dark"
      unchecked-value="light"
    >
      <template #icon>
        <ic-baseline-light-mode />
      </template>
      <template #checked-icon>
        <n-icon>
          <ic-baseline-dark-mode />
        </n-icon>
      </template>
    </n-switch>
    <n-drawer v-model:show="active" placement="right">
      <n-drawer-content title="menu">
        <n-switch
          :value="theme"
          size="medium"
          checked-value="dark"
          unchecked-value="light"
          @click="changeTheme"
        >
          <template #icon>
            <ic-baseline-light-mode />
          </template>
          <template #checked-icon>
            <n-icon>
              <ic-baseline-dark-mode />
            </n-icon>
          </template>
        </n-switch>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup>
import { setTheme } from "@utils";
const showMenu = computed(() => isMobile);
const router = useRouter();
const store = useStore();
const isIndex = computed(() => router.currentRoute.value.path === "/");
const go = () => {
  router.push("/");
};
const active = ref(false);
const toggleDrawer = () => {
  active.value = !active.value;
};

const changeTheme = (mouseEvent) => {
  store.themeGetters == "dark"
    ? store.setTheme("light")
    : store.setTheme("dark");
  setTheme(store.themeGetters, mouseEvent);
};
const scrolled = ref(false);
window.addEventListener("scroll", () => {
  scrolled.value = document.documentElement.scrollTop > 0;
});
</script>

<style scoped lang="postcss">
@keyframes shakehand {
  0% {
    transform: rotateZ(0deg);
  }

  82% {
    transform: rotateZ(0deg);
  }
  91%{
    transform: rotateZ(25deg);
  }
  100% {
    transform: rotateZ(0);
  }
}
.header {
  z-index: 999;
  /* background-image: radial-gradient(var(--magic-bg) 1px,transparent 1px); */
  background-size: 3px 3px;

  .text {
    text-shadow: 0 5px 5px var(--magic-textshadow);
  }
  .isIndex {
    animation: shakehand 4s infinite ease-in-out;
  }
  .n-switch {
    :deep() .n-switch__rail {
      cursor: none;
    }
  }
}

.scrolled {
  box-shadow: 1px 0 10px var(--magic-boxshadow);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
