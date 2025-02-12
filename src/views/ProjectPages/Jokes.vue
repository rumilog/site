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
    
    <h2>Key Features:</h2>
    <ul>
      <li>Generates a <strong>random joke</strong> via a Joke API every time a user interacts.</li>
      <li>Integrates a <strong>text-to-speech API</strong> to read jokes out loud with variable accents and voices.</li>
      <li>Provides a customizable user interface with options for <strong>voice change</strong> and <strong>accent selection</strong>.</li>
      <li>Simple and intuitive design, perfect for a quick laugh or lifting someone's spirits.</li>
    </ul>

    <h2>Inspiration:</h2>
    <p>
      We created <strong>Jokes A Plenty</strong> to offer people a way to brighten their day by providing quick laughs with a personalized twist, whether they want a funny voice or a specific accent.
    </p>

    <h2>My Role:</h2>
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
      <img :src="MakeMeLaugh1" alt="Joke1" class="joke-image" />
      <img :src="MakeMeLaugh2" alt="Joke2" class="joke-image" />
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
  top: 60px;  /* Adjust the top position to give enough space */
  right: -150px;  /* Logos pushed to the right */
  display: flex;
  flex-direction: column;
  gap: 40px;  /* Adjusted space between logos */
  overflow: visible; /* Ensure logos don't get cut off */
}

.tech-logo {
  width: 60px;  /* Logo size */
  height: auto;
}
.image-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.joke-image {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
