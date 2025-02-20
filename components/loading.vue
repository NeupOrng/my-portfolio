<template>
    <div class="loading-overlay">
      <div class="dots-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .dots-container {
    display: flex;
    justify-content: space-between;
    width: 60px;
  }
  
  .dot {
    width: 15px;
    height: 15px;
    background-color: #3498db;
    border-radius: 50%;
    animation: bounce 1.5s infinite ease-in-out;
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
  }
  </style>
  