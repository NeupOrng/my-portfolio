<template>
  <div>
    <div class="fixed top-0 left-0 w-screen background-primary py-3">
      <section class="relative flex justify-end items-center mx-auto w-[95%]">
        <button class="primary-button" @click="theme.changeMode">
          <span v-if="theme.isDarkMode">🌞</span>
          <span v-else>🌙</span>
        </button>
      </section>
    </div>
    <div class="flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const theme = useThemeStore();
</script>
