<script setup>
import { ref, onMounted } from 'vue';
import BackButton from '../../components/BackButton.vue';
import driveFreeVideo from '../../assets/ProjectVideos/IMG_8731 (2).MOV';

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
    <h1>Drive-Free Hand</h1>
    
    <!-- Video Player -->
    <div class="video-container">
      <video 
        controls 
        class="project-video"
        :src="driveFreeVideo"
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="project-info">
      <p><strong>Role:</strong> Lead Engineer, Myoelectric Integration</p>
      <p><strong>Tools:</strong> Arduino, Adafruit Motor Shield, MyoWare 2.0 Sensor, Fusion 360, 3D Printing</p>
    </div>
    <p>
      Myoelectric-controlled prosthetic prototype using real-time EMG signal processing. Drive-Free is a low-cost, Arduino-based prosthetic hand designed for driving. As part of a five-person engineering team at Stevens, I led the development of the control system and muscle-signal interface. The goal was to create an intuitive, low-cost assistive device that could restore hand functionality for individuals with limb differences—specifically enabling safe vehicle operation.
    </p>

    <h2>Technical Implementation</h2>
    <p>
      The system uses the MyoWare 2.0 EMG sensor to capture surface muscle signals from the forearm. I developed real-time signal processing logic on the Arduino Uno, comparing ENV signal values to a calibrated REF baseline to detect muscle activation. These signals control four individual DC motors via the Adafruit Motor Shield v2, each driving a finger through a 3D-printed pulley and fishing wire system designed to mimic tendon movement.
    </p>

    <h2>Development Process</h2>
    <p>
      Our team collaborated on the mechanical structure, enclosure design in Fusion 360, and iterative hardware testing. I focused on tuning motor response, reducing EMG signal noise, and creating a modular control scheme for testing different hand gestures. The prototype emphasizes affordability, modularity, and manufacturability—key priorities for future deployment in underserved communities.
    </p>

    <h2>Future Impact</h2>
    <p>
      This work lays the groundwork for future implementation of proportional control, multi-channel sensing, and closed-loop feedback, bringing us closer to accessible, user-driven prosthetic technology.
    </p>

    <!-- Image Gallery with Navigation Buttons -->
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <!-- Images will be added here later -->
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

/* Video Container */
.video-container {
  width: 100%;
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
  background: #000;
}

.project-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* Project Info */
.project-info {
  margin-bottom: 20px;
}

.project-info p {
  margin: 5px 0;
  font-size: 1.2em;
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