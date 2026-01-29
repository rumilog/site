<script setup>
import BackButton from '../../components/BackButton.vue';
import Nautical1 from '../../assets/ProjectImages/Nautical1.png';
import Nautical2 from '../../assets/ProjectImages/Nautical2.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Nautical Phrases</h1>

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
      <img :src="Nautical1" alt="Nautical Phrases Screenshot 1" class="project-image" />
      <img :src="Nautical2" alt="Nautical Phrases Screenshot 2" class="project-image" />
    </div>
  </div>
</template>

<style scoped>
/* Page-specific styles */
.image-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.project-image {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.project-image:hover {
  transform: scale(1.02);
  border-color: var(--accent-primary);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}
</style>
