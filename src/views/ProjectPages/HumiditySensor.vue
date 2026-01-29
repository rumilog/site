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
    <h1>Humidity & Temperature Sensor</h1>

    <p>
      The <strong>Humidity & Temperature Sensor</strong> is a device that I designed alongside my peers, aimed at monitoring and plotting the surrounding temperature and humidity levels. By utilizing an Arduino, humidity sensor, and temperature sensor, this device scans the environment to provide real-time data on light, temperature, and humidity. The data is then wirelessly transmitted to a personal computer where it is stored and plotted on a graph, offering insights into when the space is hottest or most humid.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li><strong>Real-time Data:</strong> The sensor continuously monitors the surrounding temperature and humidity levels.</li>
      <li><strong>Wireless Connectivity:</strong> Data is transmitted via Wi-Fi to a personal computer for easy access and storage.</li>
      <li><strong>Graph Plotting:</strong> The data is visualized on a graph, providing insights into environmental changes over time.</li>
      <li><strong>Multiple Sensors:</strong> The system includes sensors to track both temperature and humidity, allowing for comprehensive monitoring of the environment.</li>
    </ul>

    <h2>Design Process</h2>
    <p>
      Throughout the design process, we experimented with multiple iterations to find the most effective and accessible layout. One of the key considerations was ensuring easy access to the wiring and components inside the device. The Arduino code was written to facilitate the plotting of the sensor data on a graph, and the data was then transmitted wirelessly to a personal computer via Wi-Fi for storage and further analysis. This design allows us to track when the room is at its hottest or most humid, offering valuable insights into the environmental conditions.
    </p>

    <h2>Challenges & Conclusion</h2>
    <p>
      One of the challenges was ensuring that the device could reliably send data via Wi-Fi to the computer while maintaining a stable connection. Through multiple iterations, we were able to fine-tune the design and make sure that the sensors provided accurate data. This project showcases our ability to integrate sensors with wireless communication, and it highlights the importance of data visualization in understanding environmental changes.
    </p>

    <!-- Image Gallery -->
    <div class="gallery-container">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <div ref="galleryRef" class="image-gallery">
        <img :src="Humidity1" alt="Humidity Sensor 1" class="gallery-image">
        <img :src="Humidity2" alt="Humidity Sensor 2" class="gallery-image">
        <img :src="Humidity3" alt="Humidity Sensor 3" class="gallery-image">
        <img :src="Humidity4" alt="Humidity Sensor 4" class="gallery-image">
        <img :src="Humidity5" alt="Humidity Sensor 5" class="gallery-image">
      </div>
      <button @click="scrollRight" class="scroll-button right">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
