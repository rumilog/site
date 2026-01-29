<script setup>
import { ref, onMounted } from 'vue';
import BackButton from '../../components/BackButton.vue';
import SmartAquarium1 from '../../assets/ProjectImages/SmartAquarium1.png';
import SmartAquarium2 from '../../assets/ProjectImages/SmartAquarium2.jpg';
import SmartAquarium3 from '../../assets/ProjectImages/SmartAquarium3.jpg';

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
    <h1>Smart Aquarium Project</h1>
    
    <p>
      This is a <strong>custom-built smart aquarium</strong> that I designed and created from scratch. I utilized <strong>3D CAD modeling</strong> in <strong>Fusion 360</strong> to calculate the precise amount of wood required to support the tank, which weighs over <strong>250 pounds</strong>. Using <strong>stress tests</strong> in Fusion 360, I ensured that the structure could handle the weight without risk of collapse. A critical design feature was adding <strong>diagonal beams</strong> to prevent swaying, ensuring the stability of the entire setup.
    </p>
    
    <h2>Design Process</h2>
    <p>
      The initial step in creating this aquarium was developing a <strong>detailed 3D CAD model</strong>. This helped me determine the right amount of materials and the necessary cutting angles for the wood pieces. One of the most challenging aspects was designing the structure to be both <strong>strong</strong> and <strong>visually appealing</strong>, especially when creating the open-front design to display the 10-gallon fish tank on the bottom. Through careful modifications to the design, I ensured that the structure could bear the weight while maintaining an aesthetic that showcases the tanks.
    </p>
    
    <h2>Lighting System</h2>
    <p>
      The lighting for the aquarium is another key feature. I crafted a <strong>custom holder</strong> using spare thin planks of wood to mount LED lights, which were then <strong>soldered</strong> to ensure they could illuminate both the top and bottom tanks. These lights are controlled through a <strong>mobile app</strong> and a <strong>Google Home integration</strong>, allowing me to adjust the color and toggle the lights on/off remotely. The entire system is powered through an <strong>outlet bank</strong> built into the aquarium platform for seamless operation.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li><strong>Fusion 360 Design:</strong> Accurate 3D modeling to ensure precise cuts and structural stability.</li>
      <li><strong>Waterproof Coating:</strong> The wood is coated with waterproof paint to prevent warping from water evaporation.</li>
      <li><strong>Structural Integrity:</strong> Diagonal beams added for added strength and stability.</li>
      <li><strong>Mobile-Controlled Lighting:</strong> Lights that can be controlled remotely through a mobile app or Google Home.</li>
    </ul>

    <!-- Image Gallery -->
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <img :src="SmartAquarium1" alt="Smart Aquarium 1" class="gallery-image">
        <img :src="SmartAquarium2" alt="Smart Aquarium 2" class="gallery-image">
        <img :src="SmartAquarium3" alt="Smart Aquarium 3" class="gallery-image">
      </div>
      <button @click="scrollRight" class="scroll-button right">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
