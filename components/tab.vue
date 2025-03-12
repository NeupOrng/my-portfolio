<template>
    <div class="tabs">
      <div class="tab-headers background-secondary">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab = index"
          :class="{ 'active': selectedTab === index }"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <slot :name="tabs[selectedTab].slotName"></slot>
      </div>
    </div>
  </template>
  <script setup>
  const props = defineProps({
    tabs: {
      type: Array,
      required: true,
    },
  });
  
  const selectedTab = ref(0);
  provide('selectedTab', selectedTab);
  </script>
  
  <style scoped>
  .tabs {
    overflow: hidden;
  }
  
  .tab-headers {
    display: flex;
  }
  
  .tab-headers button {
    flex: 1;
    padding: 10px;
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .tab-headers button.active {
    background: var(--ui-primary-button-background-color);
    color: var(--ui-primary-button-text-color);
    transition: 500ms ease-in-out;
    font-weight: bold;
  }
  
  .tab-content {
    padding: 20px;
    background: var(--ui-secondary-background-color);
  }
  </style>
  