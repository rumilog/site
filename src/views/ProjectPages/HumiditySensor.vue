<script setup>
  import { ref, onMounted } from 'vue';
  import BackButton from '../../components/BackButton.vue';
  import Humidity1 from '../../assets/ProjectImages/Humidity1.jpg';
  import Humidity2 from '../../assets/ProjectImages/Humidity2.jpg';
  import Humidity3 from '../../assets/ProjectImages/Humidity3.jpg';
  import Humidity4 from '../../assets/ProjectImages/Humidity4.png';
  import Humidity5 from '../../assets/ProjectImages/Humidity5.png';

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
    <h1>Humidity & Temperature Sensor</h1>

    <p>
      The <strong>Humidity & Temperature Sensor</strong> is a device that I designed alongside my peers, aimed at monitoring and plotting the surrounding temperature and humidity levels. By utilizing an Arduino, humidity sensor, and temperature sensor, this device scans the environment to provide real-time data on light, temperature, and humidity. The data is then wirelessly transmitted to a personal computer where it is stored and plotted on a graph, offering insights into when the space is hottest or most humid.
    </p>

    <h2>Key Features:</h2>
    <ul>
      <li><strong>Real-time Data:</strong> The sensor continuously monitors the surrounding temperature and humidity levels.</li>
      <li><strong>Wireless Connectivity:</strong> Data is transmitted via Wi-Fi to a personal computer for easy access and storage.</li>
      <li><strong>Graph Plotting:</strong> The data is visualized on a graph, providing insights into environmental changes over time.</li>
      <li><strong>Multiple Sensors:</strong> The system includes sensors to track both temperature and humidity, allowing for comprehensive monitoring of the environment.</li>
    </ul>

    <h2>Design Process:</h2>
    <p>
      Throughout the design process, we experimented with multiple iterations to find the most effective and accessible layout. One of the key considerations was ensuring easy access to the wiring and components inside the device. The Arduino code was written to facilitate the plotting of the sensor data on a graph, and the data was then transmitted wirelessly to a personal computer via Wi-Fi for storage and further analysis. This design allows us to track when the room is at its hottest or most humid, offering valuable insights into the environmental conditions.
    </p>

    <h2>Challenges & Conclusion:</h2>
    <p>
      One of the challenges was ensuring that the device could reliably send data via Wi-Fi to the computer while maintaining a stable connection. Through multiple iterations, we were able to fine-tune the design and make sure that the sensors provided accurate data. This project showcases our ability to integrate sensors with wireless communication, and it highlights the importance of data visualization in understanding environmental changes.
    </p>
    <!-- Image Gallery with Navigation Buttons -->
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <img :src="Humidity1" alt="Humidity1" class="gallery-image">
        <img :src="Humidity2" alt="Humidity2" class="gallery-image">
        <img :src="Humidity3" alt="Humidity3" class="gallery-image">
        <img :src="Humidity4" alt="Humidity4" class="gallery-image">
        <img :src="Humidity5" alt="Humidity5" class="gallery-image">
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

strong {
  font-weight: bold;
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
