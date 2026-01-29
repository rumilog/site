<script setup>
import { ref, onMounted } from 'vue';
import BackButton from '../../components/BackButton.vue';
import AdaptiveMouse1 from '../../assets/ProjectImages/AdaptiveMouse1.jpg';
import AdaptiveMouse2 from '../../assets/ProjectImages/AdaptiveMouse2.png';
import AdaptiveMouse3 from '../../assets/ProjectImages/AdaptiveMouse3.png';
import AdaptiveMouse4 from '../../assets/ProjectImages/AdaptiveMouse4.png';
import AdaptiveMouse5 from '../../assets/ProjectImages/AdaptiveMouse5.jpg';
import AdaptiveMouse6 from '../../assets/ProjectImages/AdaptiveMouse6.jpg';
import AdaptiveMouse7 from '../../assets/ProjectImages/AdaptiveMouse7.png';
import AdaptiveMouse8 from '../../assets/ProjectImages/AdaptiveMouse8.png';

const galleryRef = ref(null);

const scrollLeft = () => {
  if (galleryRef.value) {
    galleryRef.value.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (galleryRef.value) {
    galleryRef.value.scrollBy({ left: 300, behavior: 'smooth' });
  }
};

onMounted(() => {
  if (galleryRef.value) {
    galleryRef.value.addEventListener('wheel', (event) => {
      event.preventDefault();
      galleryRef.value.scrollBy({ left: event.deltaY, behavior: 'smooth' });
    });
  }
});
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Adaptive Mouse Project</h1>
    <div class="project-info">
      <p><strong>Role:</strong> Lead Designer, Hardware Engineer</p>
      <p><strong>Tools:</strong> Fusion 360, 3D Printing, Arduino, Pressure Sensors</p>
    </div>
    <p>
      This project focuses on designing a custom adaptive mouse for individuals with ectrodactyly.
      The goal was to create an ergonomic, accessible input device that improves comfort and usability for people with limb differences.
    </p>

    <h2>Design and Development</h2>
    <ul>
      <li>Conducted user research and interviews to understand specific needs and challenges faced by individuals with ectrodactyly.</li>
      <li>Created multiple iterations of 3D-printed prototypes, refining the ergonomic design based on feedback.</li>
      <li>Integrated customizable button mapping and pressure-sensitive controls to enhance usability.</li>
      <li>Utilized CAD software to develop a modular structure, allowing for future adaptability and modifications.</li>
    </ul>

    <h2>Impact</h2>
    <p>
      The adaptive mouse provides a more intuitive and comfortable experience for users with limb differences, enabling better control in daily computing and gaming.
      This project highlights the importance of user-centered design and assistive technology in improving accessibility.
    </p>

    <!-- Image Gallery -->
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <img :src="AdaptiveMouse1" alt="Adaptive Mouse 1" class="gallery-image">
        <img :src="AdaptiveMouse2" alt="Adaptive Mouse 2" class="gallery-image">
        <img :src="AdaptiveMouse3" alt="Adaptive Mouse 3" class="gallery-image">
        <img :src="AdaptiveMouse4" alt="Adaptive Mouse 4" class="gallery-image">
        <img :src="AdaptiveMouse5" alt="Adaptive Mouse 5" class="gallery-image">
        <img :src="AdaptiveMouse6" alt="Adaptive Mouse 6" class="gallery-image">
        <img :src="AdaptiveMouse7" alt="Adaptive Mouse 7" class="gallery-image">
        <img :src="AdaptiveMouse8" alt="Adaptive Mouse 8" class="gallery-image">
      </div>
      <button @click="scrollRight" class="scroll-button right">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
