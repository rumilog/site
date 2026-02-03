<script setup>
import ProjectBlock from '../components/ProjectBlock.vue';
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
import LeapHandImg from '../assets/panda.jpg';
import githubIcon from '../assets/logo/github.png';
import linkedinIcon from '../assets/logo/linkedin.png'
import resumePDF from '../assets/resume/resume.pdf';
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);
const showPow = ref(false);

onMounted(() => {
  setTimeout(() => isLoaded.value = true, 100);
});

const triggerPow = () => {
  showPow.value = true;
  setTimeout(() => showPow.value = false, 1000);
};

const copyEmail = () => {
  navigator.clipboard.writeText("rumiqlog@gmail.com").then(() => {
    alert("Email copied to clipboard!");
  });
};
</script>

<template>
  <main class="comic-page">
    <!-- Hero Panel -->
    <div class="hero-panel ink-border">
      <div class="hero-content">
        <h1 class="comic-title hero-title">
          <span class="wow-burst">HEY!</span>
          <span class="name-text">I'M RUMI!</span>
          <img :src="RumiPixel" alt="Rumi" class="comic-avatar" />
        </h1>
        
        <div class="speech-bubble">
          <p>I'm a Master's student at <strong>Carnegie Mellon</strong> building AI that actually moves things! 🤖</p>
        </div>

        <div class="hero-actions">
          <a href="#projects" class="comic-btn action-red" @mouseenter="triggerPow">
            <span class="burst-label" v-if="showPow">POW!</span>
            SEE PROJECTS
          </a>
          <a href="#about" class="comic-btn action-blue">BIO!</a>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <span id="projects" class="scroll-anchor"></span>
    <section class="projects-section">
      <div class="section-label stencil-font">EPISODE #1: THE PORTFOLIO</div>
      <div class="projects-grid">
        <ProjectBlock title="LEAP Hand" :imageSrc="LeapHandImg" route="/projects/leap-hand" />
        <ProjectBlock title="TikTok" :imageSrc="thumbnail1" route="/projects/tiktok-work" />
        <ProjectBlock title="Drive-Free" :imageSrc="DriveFree1" route="/projects/drive-free" />
        <ProjectBlock title="Research" :imageSrc="thumbnail4" route="/projects/research-lab" />
        <ProjectBlock title="Booz Allen" :imageSrc="thumbnail5" route="/projects/booz-allen" />
        <ProjectBlock title="Adaptive" :imageSrc="thumbnail2" route="/projects/adaptive-mouse" />
        <ProjectBlock title="Nautical" :imageSrc="thumbnail3" route="/projects/nautical-phrases" />
        <ProjectBlock title="Audio" :imageSrc="thumbnail6" route="/projects/audio" />
        <ProjectBlock title="Jokes" :imageSrc="thumbnail8" route="/projects/jokes" />
        <ProjectBlock title="EcoMaps" :imageSrc="thumbnail9" route="/projects/eco-maps" />
        <ProjectBlock title="Aquarium" :imageSrc="thumbnail10" route="/projects/smart-aquarium" />
        <ProjectBlock title="VHDL Game" :imageSrc="thumbnail11" route="/projects/lateral-leap" />
      </div>
    </section>

    <!-- About Panel -->
    <span id="about" class="scroll-anchor"></span>
    <section class="about-section">
      <div class="about-panel ink-border">
        <div class="about-layout">
          <div class="about-image-side">
            <div class="comic-photo-frame">
              <img :src="RumiPic" alt="Rumi" class="about-photo" />
              <div class="caption">RUMI '27</div>
            </div>
          </div>
          <div class="about-text-side">
            <h2 class="comic-title">THE ORIGIN STORY</h2>
            <div class="speech-bubble-rect">
              <p>I'm a Mechanical Engineer at CMU obsessing over robotics. When I'm not coding AI, I'm spray painting walls, climbing rocks, or hitting the slopes! ⛷️🧗‍♂️</p>
            </div>
            <div class="tech-pills">
              <div class="pill">PYTHON</div>
              <div class="pill">ROS</div>
              <div class="pill">AI/ML</div>
              <div class="pill">3D PRINTING</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Panel -->
    <section class="contact-section">
      <div class="contact-panel ink-border action-yellow">
        <h2 class="comic-title">GET IN TOUCH!</h2>
        <div class="contact-buttons">
          <a href="https://github.com/rumilog" target="_blank" class="comic-btn">GITHUB</a>
          <a href="https://www.linkedin.com/in/rumilog" target="_blank" class="comic-btn">LINKEDIN</a>
          <button class="comic-btn action-red" @click="copyEmail">EMAIL ME!</button>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p class="comic-button-font">TO BE CONTINUED...</p>
    </footer>
  </main>
</template>

<style scoped>
.comic-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Panel */
.hero-panel {
  background: white;
  padding: 60px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
}

.hero-panel::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: radial-gradient(var(--comic-blue) 10%, transparent 11%);
  background-size: 20px 20px;
  opacity: 0.05;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.wow-burst {
  background: var(--comic-red);
  color: white;
  padding: 10px 30px;
  clip-path: polygon(0% 20%, 20% 20%, 15% 0%, 40% 15%, 50% 0%, 65% 15%, 85% 0%, 80% 20%, 100% 20%, 90% 45%, 100% 70%, 80% 75%, 85% 100%, 65% 85%, 55% 100%, 40% 85%, 15% 100%, 20% 75%, 0% 75%, 10% 45%);
  font-size: 0.5em;
  transform: rotate(-10deg) translateX(-50px);
}

.comic-avatar {
  width: 100px;
  filter: drop-shadow(5px 5px 0px black);
}

/* Speech Bubbles */
.speech-bubble {
  position: relative;
  background: white;
  border: 4px solid black;
  border-radius: 50px;
  padding: 20px 40px;
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto 40px;
  box-shadow: 10px 10px 0px rgba(0,0,0,0.1);
}

.speech-bubble::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  border-width: 30px 20px 0;
  border-style: solid;
  border-color: black transparent transparent;
  transform: translateX(-50%);
}

/* Buttons */
.comic-btn {
  display: inline-block;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.5rem;
  padding: 15px 40px;
  border: 4px solid black;
  box-shadow: 6px 6px 0px black;
  text-decoration: none;
  color: black;
  background: white;
  margin: 10px;
  transition: 0.1s;
  cursor: pointer;
}

.comic-btn:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0px black;
}

.action-red { background: var(--comic-red); color: white; }
.action-blue { background: var(--comic-blue); color: white; }
.action-yellow { background: var(--comic-yellow); }

.burst-label {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--comic-yellow);
  -webkit-text-stroke: 2px black;
  font-size: 2rem;
  animation: shake 0.5s infinite;
}

/* Projects */
.projects-section {
  padding: 60px 0;
}

.section-label {
  font-family: 'Bangers', cursive;
  background: black;
  color: white;
  padding: 5px 20px;
  font-size: 1.5rem;
  display: inline-block;
  margin-bottom: 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
}

/* About Panel */
.about-panel {
  background: white;
  padding: 40px;
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  align-items: center;
}

.comic-photo-frame {
  background: #eee;
  padding: 10px;
  border: 4px solid black;
  transform: rotate(-2deg);
}

.about-photo {
  width: 100%;
  display: block;
  border: 2px solid black;
}

.caption {
  font-family: 'Bangers', cursive;
  text-align: center;
  padding-top: 10px;
  font-size: 1.5rem;
}

.speech-bubble-rect {
  background: #fff;
  border: 4px solid black;
  padding: 20px;
  position: relative;
  margin: 20px 0;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  background: var(--comic-yellow);
  border: 2px solid black;
  padding: 5px 15px;
  font-family: 'Luckiest Guy', cursive;
}

/* Contact */
.contact-section {
  margin: 60px 0;
}

.contact-panel {
  padding: 60px;
  text-align: center;
}

.footer {
  text-align: center;
  padding: 40px;
  font-size: 2rem;
}

/* Anchors */
.scroll-anchor {
  display: block;
  height: 80px;
  margin-top: -80px;
  visibility: hidden;
}

@media (max-width: 768px) {
  .about-layout { grid-template-columns: 1fr; }
  .hero-panel { padding: 30px; }
}
</style>
