<script setup>
import BackButton from '../../components/BackButton.vue';
import VueLogo from '@/assets/logo/vue-logo.svg';
import P5Logo from '@/assets/logo/p5js.svg';
import JSLogo from '@/assets/logo/javascript-logo.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Interactive Music Visualization & Scrubbing UI</h1>
    <p>
      This project is an interactive music visualization tool built with p5.js and Vue.js. It features dynamic audio-driven visuals, an intuitive scrubbing interface, and a seamless user experience designed to enhance the way users engage with music playback.
    </p>
    
    <h2>Key Features</h2>
    <ul>
      <li>Developed a real-time music visualizer using p5.js, mapping audio frequencies to animated waveforms and particle effects.</li>
      <li>Implemented a custom scrubber UI that allows users to navigate through the track without disrupting playback.</li>
      <li>Ensured that scrubbing interactions do not interfere with play/pause functionality by detecting mouse activity over the scrubber.</li>
      <li>Designed a dynamic color-changing scrubber that adapts based on the song's position for better visibility.</li>
      <li>Disabled page scrolling to create a more immersive full-screen experience.</li>
    </ul>
    
    <h2>Impact</h2>
    <p>
      This project enhances the experience of listening to and interacting with music by combining engaging visuals with a user-friendly interface. The scrubber improvement ensures that users can navigate tracks smoothly without accidental interruptions, while the dynamic visualization adds a compelling visual element to music playback.
    </p>
    <p>
      The combination of real-time audio analysis and intuitive controls makes this a powerful tool for both casual listeners and those looking to explore creative ways to experience sound.
    </p>
    
    <div class="tech-suite">
      <img :src="VueLogo" alt="Vue.js Logo" class="tech-logo" />
      <img :src="P5Logo" alt="p5.js Logo" class="tech-logo" />
      <img :src="JSLogo" alt="JavaScript Logo" class="tech-logo" />
    </div>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
