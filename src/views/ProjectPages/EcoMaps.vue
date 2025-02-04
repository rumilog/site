<script setup>
  import BackButton from '../../components/BackButton.vue';
  import EcoMaps from '../../assets/ProjectImages/EcoMaps.png';

</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>EcoMaps - Eco-Friendly Navigation</h1>

    <p>
      <strong>EcoMaps</strong> is a navigation website that helps users find the most eco-friendly way to travel between their origin and destination points. By utilizing the <strong>Google Maps API</strong> to display the map, our platform uses an innovative algorithm to calculate the least carbon-emitting routes for transportation.
    </p>
    
    <h2>Key Features:</h2>
    <ul>
      <li>Finds the most <strong>eco-friendly routes</strong> for users using our custom algorithm.</li>
      <li>Integrates the <strong>Google Maps API</strong> for seamless map display and navigation.</li>
      <li>Helps users reduce their <strong>carbon emissions</strong> while traveling.</li>
      <li>Simple and intuitive user interface for easy navigation and interaction.</li>
    </ul>

    <h2>Inspiration:</h2>
    <p>
      We created <strong>EcoMaps</strong> to encourage individuals to be more conscious of their environmental impact, especially regarding transportation. In the U.S., many individuals often overlook the carbon emissions produced by their daily commutes. EcoMaps aims to raise awareness and provide users with better ways to travel while being mindful of the environment.
    </p>

    <h2>My Role:</h2>
    <p>
      I was responsible for designing the <strong>user interface</strong> and implementing the overall <strong>frontend</strong> of the website. I utilized tools like <strong>Figma</strong>, along with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, to create an intuitive and user-friendly experience.
    </p>

    <!-- Tech Logos -->
    <div class="tech-suite">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" class="tech-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" class="tech-logo" />
    </div>

    <!-- EcoMaps Image -->
    <div class="image-container">
      <img :src="EcoMaps" alt="EcoMaps Preview" class="eco-image" />
    </div>
  </div>
</template>

<style scoped>
.project-details {
  text-align: left;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
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

/* Tech Logos Section */
.tech-suite {
  position: absolute;
  top: 60px;  
  right: -150px;  
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.tech-logo {
  width: 60px;
  height: auto;
}

/* EcoMaps Image Styling */
.image-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.eco-image {
  width: 100%;
  max-width: 600px; /* Prevents image from getting too large */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>

