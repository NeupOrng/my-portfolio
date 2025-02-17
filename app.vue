<template>
  <div :class="theme.theme" class="w-full min-h-screen">
    <div class="absolute top-0 right-0 flex justify-end items-center p-3">
      <button class="primary-button" @click="theme.changeMode">
        <span v-if="theme.isDarkMode">🌞</span>
        <span v-else>🌙</span>
      </button>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const theme = useThemeStore();
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
