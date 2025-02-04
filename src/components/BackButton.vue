<template>
    <button @click="goBack" class="back-button">← Back</button>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goBack = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .back-button {
    position: fixed;
    top: 20px; /* Adjust as needed to align with the title */
    left: 20px; /* Fixed position at the left side */
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10; /* Ensure it is above other content */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .back-button:hover {
    background-color: #dfdfdf;
  }
  </style>
  