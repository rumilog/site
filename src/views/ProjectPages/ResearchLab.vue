<script setup>
import { ref, onMounted } from 'vue';
import BackButton from '../../components/BackButton.vue';
import wrsl1 from '../../assets/ProjectImages/wrsl1.jpg';
import wrsl2 from '../../assets/ProjectImages/wrsl2.jpg';
import wrsl3 from '../../assets/ProjectImages/wrsl3.jpg';
import wrsl4 from '../../assets/ProjectImages/wrsl4.jpg';
import wrsl5 from '../../assets/ProjectImages/wrsl5.jpg';

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
    <h1>Wearable Robotic Systems Laboratory (WRSL)</h1>
    <div class="project-info">
      <p><strong>Role:</strong> Research Assistant, Hardware Engineer</p>
      <p><strong>Tools:</strong> SolidWorks, Fusion 360, Python, MATLAB, C++, Motion Capture Systems</p>
    </div>

    <h2>Overview</h2>
    <p>
      The <strong>Wearable Robotics and Systems Lab (WRSL)</strong> is dedicated to developing assistive devices that enhance mobility and rehabilitation for individuals with neuromuscular impairments.  
      Our work combines <strong>biomechanics, mechatronics, control systems, and human-centered design</strong> to create wearable robotic solutions for real-world applications.
    </p>

    <h2>My Contributions</h2>
    <ul>
      <li><strong>Development of an Ankle-Actuating Device:</strong> Worked on designing and optimizing a wearable robotic device aimed at assisting stroke patients in regaining mobility.</li>
      <li><strong>Software and Control Systems:</strong> Developed control algorithms to fine-tune movement assistance, ensuring smooth and natural gait patterns.</li>
      <li><strong>Biomechanical Analysis:</strong> Conducted research on human motion to understand gait patterns and integrate effective assistive strategies.</li>
      <li><strong>3D Modeling & Hardware Design:</strong> Designed and prototyped mechanical components to improve device functionality.</li>
      <li><strong>Human Testing & Data Collection:</strong> Assisted in setting up experiments, collecting motion data, and analyzing results to refine device performance.</li>
    </ul>

    <h2>Technologies & Tools</h2>
    <ul>
      <li><strong>Embedded Systems:</strong> Microcontrollers and real-time control implementation.</li>
      <li><strong>3D CAD Modeling:</strong> Designed mechanical components using software like SolidWorks and Fusion 360.</li>
      <li><strong>Biomechanics Analysis:</strong> Used motion capture data and force plate readings to refine device function.</li>
      <li><strong>Programming:</strong> Implemented algorithms in Python, MATLAB, and C++ for motion control and data processing.</li>
    </ul>

    <h2>Impact & Future Directions</h2>
    <p>
      The ankle-actuating device developed at WRSL aims to enhance rehabilitation outcomes for stroke survivors, enabling more effective recovery and independent mobility.
      This research not only contributes to the field of <strong>biomechatronics</strong> but also has the potential to expand into other assistive technologies, improving lives through innovative wearable robotics.
    </p>

    <!-- Image Gallery -->
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <img :src="wrsl1" alt="WRSL Lab 1" class="gallery-image">
        <img :src="wrsl2" alt="WRSL Lab 2" class="gallery-image">
        <img :src="wrsl3" alt="WRSL Lab 3" class="gallery-image">
        <img :src="wrsl4" alt="WRSL Lab 4" class="gallery-image">
        <img :src="wrsl5" alt="WRSL Lab 5" class="gallery-image">
      </div>
      <button @click="scrollRight" class="scroll-button right">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
