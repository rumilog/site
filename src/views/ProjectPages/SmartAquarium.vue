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
    <h1>Smart Aquarium Project</h1>
    
    <p>
      This is a <strong>custom-built smart aquarium</strong> that I designed and created from scratch. I utilized <strong>3D CAD modeling</strong> in <strong>Fusion 360</strong> to calculate the precise amount of wood required to support the tank, which weighs over <strong>250 pounds</strong>. Using <strong>stress tests</strong> in Fusion 360, I ensured that the structure could handle the weight without risk of collapse. A critical design feature was adding <strong>diagonal beams</strong> to prevent swaying, ensuring the stability of the entire setup.
    </p>
    
    <h2>Design Process:</h2>
    <p>
      The initial step in creating this aquarium was developing a <strong>detailed 3D CAD model</strong>. This helped me determine the right amount of materials and the necessary cutting angles for the wood pieces. One of the most challenging aspects was designing the structure to be both <strong>strong</strong> and <strong>visually appealing</strong>, especially when creating the open-front design to display the 10-gallon fish tank on the bottom. Through careful modifications to the design, I ensured that the structure could bear the weight while maintaining an aesthetic that showcases the tanks.
    </p>
    
    <h2>Lighting System:</h2>
    <p>
      The lighting for the aquarium is another key feature. I crafted a <strong>custom holder</strong> using spare thin planks of wood to mount LED lights, which were then <strong>soldered</strong> to ensure they could illuminate both the top and bottom tanks. These lights are controlled through a <strong>mobile app</strong> and a <strong>Google Home integration</strong>, allowing me to adjust the color and toggle the lights on/off remotely. The entire system is powered through an <strong>outlet bank</strong> built into the aquarium platform for seamless operation.
    </p>

    <h2>Key Features:</h2>
    <ul>
      <li><strong>Fusion 360 Design:</strong> Accurate 3D modeling to ensure precise cuts and structural stability.</li>
      <li><strong>Waterproof Coating:</strong> The wood is coated with waterproof paint to prevent warping from water evaporation.</li>
      <li><strong>Structural Integrity:</strong> Diagonal beams added for added strength and stability.</li>
      <li><strong>Mobile-Controlled Lighting:</strong> Lights that can be controlled remotely through a mobile app or Google Home.</li>
    </ul>
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <img :src="SmartAquarium1" alt="Smart Aquarium" class="gallery-image">
        <img :src="SmartAquarium2" alt="Smart Aquarium" class="gallery-image">
        <img :src="SmartAquarium3" alt="Smart Aquarium" class="gallery-image">
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

p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  font-size: 1.1em;
  line-height: 1.5;
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
  overflow-x: auto; /* Allows horizontal scrolling */
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  width: 100%;
  max-width: 800px;
  -webkit-overflow-scrolling: touch;
}

/* Individual Image Styling */
.gallery-image {
  width: auto;  /* Ensure the images maintain their original aspect ratio */
  height: auto; /* Remove fixed height */
  max-width: 100%; /* Ensure images fit within the container */
  max-height: 500px; /* Limit the height to avoid oversized images */
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

