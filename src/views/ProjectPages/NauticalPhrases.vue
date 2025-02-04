<script setup>
  import BackButton from '../../components/BackButton.vue';
  import Nautical1 from '../../assets/ProjectImages/Nautical1.png';
  import Nautical2 from '../../assets/ProjectImages/Nautical2.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Nautical Phrases</h1>
    <!-- <img src="/images/nautical-phrases.jpg" alt="Nautical Phrases Project Image" class="project-image" /> -->

    <h2>Overview</h2>
    <p>
      Nautical Phrases is an interactive educational website designed to teach users about different nautical terms by providing a dynamic, 3D visualization of a boat and its components.
    </p>

    <h2>Technology Stack</h2>
    <ul>
      <li><strong>3D Visualization:</strong> Utilized <strong>Three.js</strong> and JavaScript to display and animate the 3D boat model.</li>
      <li><strong>Frontend:</strong> Designed the user interface with <strong>React.js</strong> for a seamless and engaging experience.</li>
      <li><strong>Backend:</strong> Developed using <strong>Node.js</strong> to manage data retrieval and API interactions.</li>
      <li><strong>Database:</strong> Implemented <strong>Kintone</strong> to store definitions and phonetic pronunciations, dynamically fetching information for the website.</li>
    </ul>

    <h2>My Role</h2>
    <ul>
      <li>Designed the UI/UX, including creating the Figma file used for development.</li>
      <li>Developed the <strong>Kintone database</strong> that stores nautical definitions and pronunciations.</li>
      <li>Modeled the <strong>3D boat and its individual parts</strong> using Fusion 360.</li>
      <li>Created the <strong>idle animation</strong> of the boat bobbing up and down to enhance realism.</li>
    </ul>

    <h2>Impact</h2>
    <p>
      This project combines education with interactive technology, making learning nautical terms more engaging and visually appealing.
      By integrating 3D modeling and web development, it offers an immersive experience that enhances user comprehension.
    </p>
    <div class="image-container">
      <img :src="Nautical1" alt="Nautical1" class="project-image" />
      <img :src="Nautical2" alt="Nautical2" class="project-image" />
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
.image-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.project-image {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
