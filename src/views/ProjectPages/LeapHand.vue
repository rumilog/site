<script setup>
import { ref, onMounted } from 'vue';
import BackButton from '../../components/BackButton.vue';

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
    <h1>Robotic LEAP Hand Control</h1>
    <div class="project-info">
      <p><strong>Role:</strong> Graduate Researcher</p>
      <p><strong>Lab:</strong> Mechanical and AI Laboratory, Carnegie Mellon University</p>
      <p><strong>Tools:</strong> Python, VR Motion Tracking, Diffusion Policy, ROS</p>
    </div>

    <h2>Overview</h2>
    <p>
      As part of my graduate research at CMU's Mechanical and AI Laboratory, I'm working on advancing robotic dexterity through diffusion policy-based control systems. The project focuses on enabling a multi-jointed robotic hand and arm to perform complex, dexterous manipulation tasks—bringing AI/ML techniques into real-world robotic applications.
    </p>

    <h2>VR Teleoperation System</h2>
    <p>
      I developed a teleoperation system leveraging VR motion tracking to enable intuitive, real-time robot control. This system is used to collect high-quality demonstration data for training diffusion policies. By streamlining the data collection pipeline, I reduced the time required to gather training data by half, significantly accelerating the research iteration cycle.
    </p>

    <h2>Diffusion Policy Research</h2>
    <p>
      The core of this project involves researching and implementing diffusion policy techniques for robotic control. Diffusion models, originally popularized in generative AI, are being adapted here to learn complex manipulation behaviors from demonstration data. The goal is to create a robust system capable of generalizing across a variety of dexterous tasks—moving closer to human-level hand manipulation in robots.
    </p>

    <h2>Impact & Future Directions</h2>
    <p>
      This research sits at the intersection of machine learning and physical robotics, directly aligned with my goal of bringing AI into the real world. The techniques developed here have potential applications in prosthetics, manufacturing automation, and assistive robotics—anywhere precise, adaptive hand manipulation is needed.
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
