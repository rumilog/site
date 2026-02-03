<template>
  <button @click="goBack" class="comic-back-btn">
    <div class="arrow">⬅</div>
    <span>BACK!</span>
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
.comic-back-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.5rem;
  padding: 10px 20px;
  background: var(--comic-yellow);
  border: 4px solid black;
  box-shadow: 6px 6px 0px black;
  color: black;
  cursor: pointer;
  z-index: 100;
  transition: 0.1s;
}

.comic-back-btn:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0px var(--comic-red);
}

.arrow {
  font-size: 1.8rem;
}
</style>
