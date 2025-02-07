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
      It enables users to input their workout buddies’ phone numbers and personal workout goals. 
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

    <h2>Key Features:</h2>
    <ul>
      <li>Utilizes <strong>computer vision</strong> to detect workout completion.</li>
      <li>Sends <strong>real-time text notifications</strong> to workout buddies via Twilio.</li>
      <li>Provides a <strong>private yet connected</strong> workout experience.</li>
      <li>User-friendly interface designed with <strong>Figma</strong>.</li>
    </ul>

    <!-- Tech Suite Logos -->
    <div class="tech-suite">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo">
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
strong {
  font-weight: bold;
}

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

p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

/* Tech Logos Section */
.tech-suite {
  position: absolute;
  top: 50px;
  right: -150px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.tech-logo {
  width: 80px;
  height: auto;
}

/* GymMate Images Styling */
.image-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.gymmate-image {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
