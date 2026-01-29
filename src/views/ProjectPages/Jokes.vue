<script setup>
import BackButton from '../../components/BackButton.vue';
import MakeMeLaugh1 from '../../assets/ProjectImages/MakeMeLaugh1.png';
import MakeMeLaugh2 from '../../assets/ProjectImages/MakeMeLaugh2.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Jokes A Plenty - A Random Joke Generator</h1>

    <p>
      <strong>Jokes A Plenty</strong> is a website that delivers a random joke from a Joke-giving API and then reads it aloud using a <strong>text-to-speech API</strong>. Users can also change the accent and voice of the joke teller, creating a more personalized and fun experience.
    </p>
    
    <h2>Key Features</h2>
    <ul>
      <li>Generates a <strong>random joke</strong> via a Joke API every time a user interacts.</li>
      <li>Integrates a <strong>text-to-speech API</strong> to read jokes out loud with variable accents and voices.</li>
      <li>Provides a customizable user interface with options for <strong>voice change</strong> and <strong>accent selection</strong>.</li>
      <li>Simple and intuitive design, perfect for a quick laugh or lifting someone's spirits.</li>
    </ul>

    <h2>Inspiration</h2>
    <p>
      We created <strong>Jokes A Plenty</strong> to offer people a way to brighten their day by providing quick laughs with a personalized twist, whether they want a funny voice or a specific accent.
    </p>

    <h2>My Role</h2>
    <p>
      I worked on <strong>integrating the text-to-speech API</strong> into the website and played a key role in the <strong>UI/UX design</strong>. During this project, I learned a lot about using APIs effectively and optimizing the user experience through design.
    </p>

    <!-- Tech Logos -->
    <div class="tech-suite">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" class="tech-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" class="tech-logo" />
    </div>

    <div class="image-container">
      <img :src="MakeMeLaugh1" alt="Jokes A Plenty Screenshot 1" class="joke-image" />
      <img :src="MakeMeLaugh2" alt="Jokes A Plenty Screenshot 2" class="joke-image" />
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

.joke-image {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.joke-image:hover {
  transform: scale(1.02);
  border-color: var(--accent-primary);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}
</style>
