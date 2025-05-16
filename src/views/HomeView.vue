<script setup>
import ProjectBlock from '../components/ProjectBlock.vue'; // Import ProjectBlock
import thumbnail1 from '../assets/thumbnail1.jpg';
import thumbnail2 from '../assets/thumbnail2.png';
import thumbnail3 from '../assets/thumbnail3.png';
import thumbnail4 from '../assets/thumbnail4.jpg';
import thumbnail5 from '../assets/thumbnail5.jpg';
import thumbnail6 from '../assets/thumbnail6.png';
import thumbnail7 from '../assets/thumbnail7.png';
import thumbnail8 from '../assets/thumbnail8.png';
import thumbnail9 from '../assets/thumbnail9.png';
import thumbnail10 from '../assets/thumbnail10.png';
import thumbnail11 from '../assets/thumbnail11.png';
import thumbnail12 from '../assets/thumbnail12.png';
import DriveFree1 from '../assets/driveFree1.jpg';
import RumiPixel from '../assets/RumiPixel.png';
import RumiPic from '../assets/aboutmepic.jpg';
import githubIcon from '../assets/logo/github.png';
import linkedinIcon from '../assets/logo/linkedin.png'
import resumePDF from '../assets/resume/resume.pdf';
import { ref } from 'vue';

const showResume = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText("rumiqlog@gmail.com").then(() => {
    alert("Email copied to clipboard!");
  });
};

const toggleResume = () => {
  showResume.value = !showResume.value;
};

</script>

<template>
  <main class="main-container">
    <!-- Welcome Section -->
    <section class="welcome">
      <h1>Welcome to my website, I'm Rumi! <img :src="RumiPixel" alt="Rumi Pixel" class="pixel-image" /></h1>
    </section>

    <!-- Intro Section (projects section) -->
    <section class="intro">
      <p>Here are some of the projects I've worked on:</p>
    </section>

    <!-- Grid Layout for 12 boxes -->
    <div class="projects-container">
      <!-- Project Blocks -->
      <ProjectBlock
        title="Drive-Free Hand"
        :imageSrc="DriveFree1"
        route="/projects/drive-free"
      />
      <ProjectBlock
        title="Research Lab"
        :imageSrc="thumbnail4"
        route="/projects/research-lab"
      />
      <ProjectBlock
        title="TikTok Work"
        :imageSrc="thumbnail1"
        route="/projects/tiktok-work"
      />
      <ProjectBlock
        title="Booz Allen Project"
        :imageSrc="thumbnail5"
        route="/projects/booz-allen"
      />
      <ProjectBlock
        title="Adaptive Mouse"
        :imageSrc="thumbnail2" 
        route="/projects/adaptive-mouse"
      />
      <ProjectBlock
        title="Nautical Phases"
        :imageSrc="thumbnail3" 
        route="/projects/nautical-phrases"
      />
      <ProjectBlock
        title="Audio Visualizer"
        :imageSrc="thumbnail6"
        route="/projects/audio"
      />
      <ProjectBlock
        title="Jokes a Plenty"
        :imageSrc="thumbnail8"
        route="/projects/jokes"
      />
      <ProjectBlock
        title="EcoMaps"
        :imageSrc="thumbnail9"
        route="/projects/eco-maps"
      />
      <ProjectBlock
        title="Smart Aquarium"
        :imageSrc="thumbnail10"
        route="/projects/smart-aquarium"
      />
      <ProjectBlock
        title="Lateral Leap VHDL"
        :imageSrc="thumbnail11"
        route="/projects/lateral-leap"
      />
      <ProjectBlock
        title="Humidity Sensor"
        :imageSrc="thumbnail12"
        route="/projects/humidity-sensor"
      />
    </div>
    
    <!-- About Me Section (on the right side) -->
    <section class="about-me">
      <div class="about-me-text">
        <h1>About Me</h1>
        <p>
          Hi, I'm Rumi! I'm a computer engineer with a passion for creating innovative technology that improves lives. From developing wearable robotics to designing assistive devices for those with unique challenges, I love working on projects that make a meaningful impact. I also have a strong background in full-stack development and have collaborated with cross-functional teams to deliver solutions in diverse industries. In my free time, I enjoy exploring new ideas and continuously learning to stay at the forefront of technology.
        </p>
      </div>
      <img :src="RumiPic" alt="Rumi" class="rumi-pic" />
    </section>
    <!-- Buttons for GitHub, LinkedIn, and Copy Email -->
    <div class="buttons-container">
        <a href="https://github.com/rumilog" target="_blank" class="social-button">
          <img :src="githubIcon" alt="GitHub" class="button-icon"> GitHub
        </a>
        <a href="https://www.linkedin.com/in/rumilog" target="_blank" class="social-button">
          <img :src="linkedinIcon" alt="LinkedIn" class="button-icon"> LinkedIn
        </a>
        <button class="copy-button" @click="copyEmail">Email Me :)</button>
        <a href="https://github.com/rumilog/site" target="_blank" class="social-button site-repo">
          <img :src="githubIcon" alt="GitHub" class="button-icon"> View Site Code
        </a>
    </div>

    <!-- Resume Section -->
    <div class="resume-section">
      <h2 class="resume-title">Resume</h2>
      <div class="resume-container">
        <iframe :src="resumePDF" class="resume-iframe"></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Container for centering the entire page content */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 1vw;
  padding-top: 15vh;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  position: relative;
  overflow: hidden;
}

.main-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, transparent 70%);
  pointer-events: none;
}

/* Welcome Section */
.welcome {
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.welcome h1 {
  font-size: 3.5vw;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  color: #3f3f3f;
  transition: transform 0.3s ease;
}

.welcome h1:hover {
  transform: scale(1.02);
}

.pixel-image {
  width: 4vw;
  height: 4vw;
  margin-left: 15px;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
  transition: transform 0.3s ease;
}

.pixel-image:hover {
  transform: rotate(5deg);
}

/* Styling for the intro section */
.intro {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.intro p {
  font-size: 1.5vw;
  font-weight: 800;
  color: #5c5c5c;
  text-transform: uppercase;
  border-bottom: 2px solid #5c5c5c;
  padding-bottom: 0.5rem;
}

/* Projects Container */
.projects-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
  width: 100%;
  max-width: 100vw;
  padding: 2vw;
  box-sizing: border-box;
  margin-bottom: 3rem;
}

/* Make the project boxes responsive with a minimum size */
.projects-container > * {
  height: 30vh;
  max-width: 22vw;
  margin: 0 auto;
}

/* Adjust the boxes for smaller screens */
@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-container > * {
    height: 35vh;
    max-width: 40vw;
  }
}

/* About Me Section */
.about-me {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8vh auto;
  text-align: left;
  width: 85%;
  background: rgba(255, 255, 255, 0.9);
  padding: 3vw;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-me:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.about-me-text {
  width: 60%;
  padding-right: 3rem;
}

.about-me h1 {
  font-size: 2.5vw;
  font-weight: 700;
  color: #2d3436;
  border-bottom: 3px solid #6c5ce7;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.about-me p {
  font-size: 1.2vw;
  color: #2d3436;
  line-height: 1.8;
  letter-spacing: 0.3px;
}

.rumi-pic {
  width: 25vw;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.rumi-pic:hover {
  transform: scale(1.02);
}

/* Social Buttons */
.buttons-container {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10vh;
}

.social-button, .copy-button {
  background-color: white;
  color: rgb(46, 46, 46);
  font-size: 1.2vw;
  font-weight: 600;
  padding: 0.8vw 2vw;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.social-button:hover, .copy-button:hover {
  background-color: #e7e7e7;
  color: #2c3e50;
  transform: translateY(-2px);
}

.button-icon {
  width: 1.5vw;
  height: 1.5vw;
  margin-right: 0.5vw;
}

.copy-button {
  background-color: #53bd45;
  border: none;
}

.copy-button:hover {
  background-color: white;
  color: #377a2e;
  border: none;
}

.site-repo {
  background-color: #2c3e50;
  color: white;
}

.site-repo:hover {
  background-color: white;
  color: #2c3e50;
}

.site-repo .button-icon {
  filter: brightness(0) invert(1);
}

.site-repo:hover .button-icon {
  filter: none;
}

/* Responsive icon sizes */
@media (max-width: 768px) {
  .button-icon {
    width: 3vw;
    height: 3vw;
    margin-right: 1vw;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-me {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .about-me-text {
    width: 100%;
    padding-right: 0;
    margin-bottom: 2rem;
  }

  .rumi-pic {
    width: 80%;
    margin: 0 auto;
  }

  .welcome h1 {
    font-size: 2rem;
  }

  .about-me h1 {
    font-size: 1.8rem;
  }

  .about-me p {
    font-size: 1rem;
  }
}

/* Resume Section */
.resume-section {
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #f5f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e4e8eb;
}

.resume-title {
  font-size: 2vw;
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 1.5rem;
  text-align: center;
}

.resume-container {
  width: 100%;
  height: 150vh;
  position: relative;
}

.resume-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .resume-section {
    width: 95%;
    padding: 1rem;
    margin: 2rem auto;
  }

  .resume-title {
    font-size: 1.5rem;
  }

  .resume-container {
    height: 60vh;
  }
}
</style>
