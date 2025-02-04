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

// Enable mouse wheel horizontal scrolling
onMounted(() => {
  if (galleryRef.value) {
    galleryRef.value.addEventListener('wheel', (event) => {
      event.preventDefault(); // Prevent vertical scrolling
      galleryRef.value.scrollBy({ left: event.deltaY, behavior: 'smooth' });
    });
  }
});
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Adaptive Mouse Project</h1>
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

    <!-- Image Gallery with Navigation Buttons -->
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
.project-details {
  text-align: left;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Gallery Container */
.gallery-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
}

/* Image Gallery */
.image-gallery {
  display: flex;
  gap: 10px;
  padding: 10px 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  width: 100%;
  max-width: 800px;
  -webkit-overflow-scrolling: touch;
}

/* Individual Image Styling */
.gallery-image {
  width: 250px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  scroll-snap-align: start;
}

/* Scroll Buttons */
.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.5em;
  border-radius: 5px;
  z-index: 10;
}

.scroll-button.left {
  left: -50px;
}

.scroll-button.right {
  right: -50px;
}

/* Show scrollbar */
.image-gallery::-webkit-scrollbar {
  height: 8px;
}

.image-gallery::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.image-gallery::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.image-gallery::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.image-gallery {
  -ms-overflow-style: auto;
  scrollbar-width: auto;
}

/* Button Hover Effect */
.scroll-button:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>
