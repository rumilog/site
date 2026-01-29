<template>
  <button @click="goBack" class="back-button">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    <span>Back</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.back-button {
  position: fixed;
  top: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 20px;
  background: rgba(20, 20, 30, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
  transform: translateX(-4px);
}

.back-button svg {
  transition: transform 0.3s ease;
}

.back-button:hover svg {
  transform: translateX(-4px);
}
</style>
