<template>
  <div class="w-full min-h-screen">
    <div class="absolute top-0 right-0 flex justify-end items-center p-3">
      <button class="primary-button" @click="changeColor">{{ changeColorButtonText }}</button>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode();
  colorMode.preference = 'light';;


  // methods
  const changeColor = () => {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
  }

  // computed
  const changeColorButtonText = computed(() => colorMode.preference === 'light' ? 'dark' : 'light')
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
