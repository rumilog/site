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
    <h1>Wearable Robotic Systems Laboratory (WRSL)</h1>
    <!-- <img src="/images/wrsl-lab.jpg" alt="WRSL Lab Image" class="project-image" /> -->

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
    <!-- Image Gallery with Navigation Buttons -->
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <img :src="wrsl1" alt="wrsl 1" class="gallery-image">
        <img :src="wrsl2" alt="wrsl 2" class="gallery-image">
        <img :src="wrsl3" alt="wrsl 3" class="gallery-image">
        <img :src="wrsl4" alt="wrsl 4" class="gallery-image">
        <img :src="wrsl5" alt="wrsl 5" class="gallery-image">
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

.project-image {
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  object-fit: cover;
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
