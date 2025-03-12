<template>
  <div class="w-full">
    <div class="w-screen fixed h-screen block z-30 ease-in-out duration-300" :class="theme.loadingClass">
      <div class="w-full h-full block background-primary opacity-80"></div>
      <div>
        <loading />
      </div>
    </div>
    <div class="fixed top-0 left-0 w-full background-primary py-3 z-10">
      <div class="w-full max-w-[1440px] mx-auto flex justify-between">
        <section class="w-full px-2 font-mono">
          <h1 class="font-bold text-2xl"><span class="text-[#C8F31D]">O</span>RNG</h1>
        </section>
        <section class="relative gap-4 w-full flex justify-end items-center mx-auto max-w-[1440px] px-2 z-10">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <!-- <button class="secondary-button" @click="theme.changeMode">
            <div class="relative size-[18px] overflow-hidden">
              <span :class="theme.theme === 'dark' ? 'animate-rise' : 'animate-shine'" :hidden="theme.theme === 'dark'"
                class="absolute block size-[18px] flex items-center justify-center opacity-0">
                <Icon name="material-symbols:light-mode-outline-rounded" size="16"
                  color="var(--ui-secondary-button-text-color)" />
              </span>
              <span :class="theme.theme === '' ? 'animate-rise' : 'animate-shine'" :hidden="theme.theme === 'dark'"
                class="absolute block size-[18px] flex items-center justify-center opacity-0">
                <Icon name="material-symbols:light-mode-rounded" size="16" />
              </span>
            </div>
          </button> -->
        </section>
      </div>
    </div>
    <div class="w-full min-h-screen relative z-0">
      <slot />
    </div>
    <footer class="background-secondary py-6 mt-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">&copy; 2024 Orng NEUP. All rights reserved.</p>
          
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/NeupOrng" 
              target="_blank"
              class="text-gray-400 hover:text-white transition">
              <Icon name="uil:github" size="24" />
            </a>
            <a href="https://www.linkedin.com/in/orng-neup-91ab14230/" 
              target="_blank"
              class="text-gray-400 hover:text-white transition">
              <Icon name="uil:linkedin" size="24" />
            </a>
            <a href="https://web.facebook.com/neup.orng" 
              target="_blank"
              class="text-gray-400 hover:text-white transition">
              <Icon name="uil:facebook" size="24" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
const theme = useThemeStore();
const router = useRouter();

router.beforeEach(() => {
  theme.setIsRouteChanging(true)
});
router.afterEach(() => {
  setTimeout(() => (theme.setIsRouteChanging(false)), 500);
});
</script>
<style scoped>
@keyframes rise {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  50% {
    transform: translateY(-3px);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
  }
}

.animate-rise {
  animation: rise 0.3s ease-in-out;
  opacity: 1;
}

@keyframes linkActive {
  0% {
    width: 0;
    opacity: 0;
    ;
  }

  100% {
    width: 100%;
    opacity: 1;
  }
}

.router-link-active {
  color: var(--ui-secondary-button-background-color);
  transition: 500ms ease-in-out;
}

.router-link-active::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--ui-secondary-button-background-color);
  transition: 0.5s;
  animation: linkActive 0.5s ease-in-out;
}
</style>
