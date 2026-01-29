<script setup>
import BackButton from '../../components/BackButton.vue';
import JSLogo from '@/assets/logo/javascript-logo.png';
import TwilioLogo from '@/assets/logo/twilio-logo.png';
import GymMate1 from '../../assets/ProjectImages/GymMate1.png';
import GymMate2 from '../../assets/ProjectImages/GymMate2.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>GymMate</h1>
    <p>
      GymMate is an application I created with my friend to enhance the home workout experience. 
      It enables users to input their workout buddies' phone numbers and personal workout goals. 
      Using <strong>computer vision</strong>, GymMate detects when a user completes their workout 
      and sends a <strong>real-time text notification</strong> to their workout buddies via Twilio.
    </p>

    <h2>Inspiration</h2>
    <p>
      We built GymMate to provide a workout environment free from judgment while still fostering 
      a sense of connection with friends and acquaintances. This system helps users stay 
      motivated and hold each other accountable, even when working out remotely.
    </p>

    <h2>My Role</h2>
    <p>
      I designed the <strong>user interface</strong> using Figma and developed the 
      <strong>frontend</strong> with HTML, CSS, and JavaScript. Additionally, I worked on 
      integrating <strong>Twilio</strong> into the backend to enable automated text notifications.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li>Utilizes <strong>computer vision</strong> to detect workout completion.</li>
      <li>Sends <strong>real-time text notifications</strong> to workout buddies via Twilio.</li>
      <li>Provides a <strong>private yet connected</strong> workout experience.</li>
      <li>User-friendly interface designed with <strong>Figma</strong>.</li>
    </ul>

    <!-- Tech Suite Logos -->
    <div class="tech-suite">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" class="tech-logo">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" class="tech-logo">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" class="tech-logo">
      <img :src="TwilioLogo" alt="Twilio Logo" class="tech-logo" />
      <img :src="JSLogo" alt="JavaScript Logo" class="tech-logo" />
    </div>

    <!-- GymMate Images -->
    <div class="image-container">
      <img :src="GymMate1" alt="GymMate Screenshot 1" class="gymmate-image" />
      <img :src="GymMate2" alt="GymMate Screenshot 2" class="gymmate-image" />
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

.gymmate-image {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.gymmate-image:hover {
  transform: scale(1.02);
  border-color: var(--accent-primary);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}
</style>
