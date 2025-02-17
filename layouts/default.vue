<template>
  <div>
    <div class="fixed top-0 left-0 w-full background-primary py-3 z-10">
      <section class="relative flex justify-end items-center mx-auto max-w-[1440px] px-2 z-10">
        <button class="secondary-button" @click="theme.changeMode">
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
        </button>
      </section>
    </div>
    <div class="w-full min-h-screen relative z-0">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const theme = useThemeStore();
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
</style>
