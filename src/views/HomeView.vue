<script setup>
import ProjectBlock from '../components/ProjectBlock.vue';
import thumbnail1 from '../assets/thumbnail1.jpg';
import thumbnail2 from '../assets/thumbnail2.png';
import thumbnail3 from '../assets/thumbnail3.png';
import thumbnail4 from '../assets/thumbnail4.jpg';
import thumbnail5 from '../assets/thumbnail5.jpg';
import thumbnail6 from '../assets/thumbnail6.png';
import thumbnail8 from '../assets/thumbnail8.png';
import thumbnail9 from '../assets/thumbnail9.png';
import thumbnail10 from '../assets/thumbnail10.png';
import thumbnail11 from '../assets/thumbnail11.png';
import DriveFree1 from '../assets/driveFree1.jpg';
import RumiPixel from '../assets/RumiPixel.png';
import RumiPic from '../assets/aboutmepic.jpg';
import LeapHandImg from '../assets/panda.jpg';
import homeImage from '../assets/home image.png';
import homeImage2 from '../assets/home image 2.png';
import resumePDF from '../assets/resume/resume.pdf';
import { ref } from 'vue';

const showPow = ref(false);

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
      <router-link to="/projects/leap-hand" class="featured-aside">
        <span class="featured-aside-label">NEW!</span>
        <span class="featured-aside-text">Watch Teleoperation<br />Demo →</span>
      </router-link>
      <div class="hero-aside-images">
        <img :src="homeImage" alt="" class="hero-aside-image hero-aside-image-tilt-left" />
        <img :src="homeImage2" alt="" class="hero-aside-image hero-aside-image-tilt-right" />
      </div>
      <div class="hero-content">
        <div class="hero-title-row">
          <h1 class="comic-title hero-title">
            <span class="wow-burst">HEY!</span>
            <span class="name-text">I'M RUMI!</span>
          </h1>
          <img :src="RumiPixel" alt="Rumi" class="comic-avatar" />
        </div>
        
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
              <div class="school-badges">
                <div class="school-badge cmu">CMU '27</div>
                <div class="school-badge stevens">STEVENS '25</div>
              </div>
            </div>
          </div>
          <div class="about-text-side">
            <h2 class="comic-title">ABOUT ME</h2>
            <div class="speech-bubble-rect">
              <p>I'm a Master's student in Mechanical Engineering at <strong>Carnegie Mellon University</strong>, where my research focuses on <strong>robotic manipulation and control</strong>. I work in the Mechanical and Artificial Intelligence Lab on AI and robotics. Also, yes, I'm a comic book nerd (as you might've guessed from this site). Nightwing, Forge, and Batman are my favorites. Outside of school, I like to rock climb, ski, spray paint murals, and surf.</p>
            </div>
            <div class="about-details">
              <div class="detail-block">
                <h3>Research Focus</h3>
                <p>At CMU's Mechanical and AI Lab, I research diffusion policy for dexterous robotic manipulation. I built a VR teleoperation system to collect demonstration data, and I'm training diffusion models to learn complex hand manipulation behaviors—working toward robots that can handle real-world tasks with human-like dexterity.</p>
              </div>
              <div class="detail-block">
                <h3>Beyond the Lab</h3>
                <p>I like building things that actually ship. I've led a team building a low-cost prosthetic hand, worked on creative tools at TikTok, and prototyped assistive tech for people with disabilities. I'm just as happy writing specs and talking to users as I am finetuning a computer vision model.</p>
              </div>
            </div>
            <div class="tech-pills">
              <div class="pill">PYTHON</div>
              <div class="pill">PYTORCH</div>
              <div class="pill">JS/HTML/CSS</div>
              <div class="pill">C++</div>
              <div class="pill">ROS</div>
              <div class="pill">ISAAC SIM</div>
              <div class="pill">Solidworks & Fusion360</div>
            </div>
          </div>
        </div>
        <div class="resume-section">
          <h2 class="comic-title resume-heading">RESUME</h2>
          <div class="resume-embed-wrap">
            <iframe :src="resumePDF + '#zoom=100&toolbar=1'" class="resume-pdf" title="Rumi's Resume"></iframe>
          </div>
          <a :href="resumePDF" target="_blank" rel="noopener" class="resume-download">Download PDF</a>
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
  overflow: visible;
}

/* Featured aside (NEW! sticker - can sit outside the white box) */
.featured-aside {
  position: absolute;
  left: -50px;
  top: 30%;
  transform: translateY(-50%) rotate(-4deg);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px 24px;
  background: var(--comic-yellow);
  border: 4px solid black;
  box-shadow: 6px 6px 0px black;
  text-decoration: none;
  color: black;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.featured-aside:hover {
  transform: translateY(-50%) rotate(-4deg) translate(-2px, -2px);
  box-shadow: 9px 9px 0px black;
}

.featured-aside-label {
  font-family: 'Bangers', cursive;
  font-size: 1.9rem;
  background: var(--comic-red);
  color: white;
  padding: 6px 20px;
  border: 3px solid black;
}

.featured-aside-text {
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.3;
  max-width: 8em;
}

/* Hero aside images (right side, sticker-style) */
.hero-aside-images {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%) rotate(3deg);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
}

.hero-aside-image {
  max-height: 260px;
  width: auto;
  border: 4px solid black;
  box-shadow: 6px 6px 0px black;
  object-fit: contain;
}

.hero-aside-image-tilt-left {
  transform: rotate(-6deg);
}

.hero-aside-image-tilt-right {
  transform: rotate(5deg);
}

.hero-panel::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: radial-gradient(var(--comic-blue) 10%, transparent 11%);
  background-size: 20px 20px;
  opacity: 0.05;
}

.hero-title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.wow-burst {
  background: var(--comic-red);
  color: white;
  padding: 10px 30px;
  clip-path: polygon(0% 20%, 20% 20%, 15% 0%, 40% 15%, 50% 0%, 65% 15%, 85% 0%, 80% 20%, 100% 20%, 90% 45%, 100% 70%, 80% 75%, 85% 100%, 65% 85%, 55% 100%, 40% 85%, 15% 100%, 20% 75%, 0% 75%, 10% 45%);
  font-size: 0.5em;
  transform: rotate(-10deg);
}

.comic-avatar {
  width: 170px;
  height: 170px;
  flex-shrink: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
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

.speech-bubble::before {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  border-width: 30px 20px 0;
  border-style: solid;
  border-color: black transparent transparent;
  transform: translateX(-50%);
}

.speech-bubble::after {
  content: "";
  position: absolute;
  bottom: -22px;
  left: 50%;
  border-width: 24px 16px 0;
  border-style: solid;
  border-color: white transparent transparent;
  transform: translateX(-50%);
}

/* Buttons */
.comic-btn {
  display: inline-block;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.8rem;
  padding: 18px 50px;
  border: 5px solid black;
  box-shadow: 8px 8px 0px black;
  text-decoration: none;
  color: black;
  background: white;
  transition: all 0.15s ease;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.comic-btn:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0px black;
}

.comic-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px black;
}

.action-red { 
  background: #ff0000; 
  color: white; 
}
.action-blue { 
  background: #03a9f4; 
  color: white; 
}
.action-yellow { 
  background: #ffde03; 
  color: black;
}

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

.school-badges {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 10px;
}

.school-badge {
  font-family: 'Bangers', cursive;
  font-size: 0.9rem;
  padding: 5px 12px;
  border: 3px solid black;
  transform: skewX(-5deg);
  box-shadow: 3px 3px 0px black;
}

.school-badge.stevens {
  background: #4a4a4a;
  color: white;
}

.school-badge.cmu {
  background: #c41230;
  color: white;
}

.speech-bubble-rect {
  background: #fff;
  border: 4px solid black;
  padding: 20px;
  position: relative;
  margin: 20px 0;
}

.about-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.detail-block {
  background: #f9f9f9;
  border: 3px solid black;
  padding: 15px;
}

.detail-block h3 {
  font-family: 'Bangers', cursive;
  font-size: 1.3rem;
  color: var(--comic-red);
  margin-bottom: 10px;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
}

.detail-block p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.resume-section {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 4px dashed black;
  text-align: center;
}

.resume-heading {
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.resume-embed-wrap {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 16px;
  border: 4px solid black;
  box-shadow: 8px 8px 0px black;
  background: #f5f5f5;
  overflow: hidden;
}

.resume-pdf {
  width: 100%;
  height: 85vh;
  min-height: 700px;
  display: block;
  border: none;
}

.resume-download {
  display: inline-block;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.1rem;
  color: var(--comic-blue);
  text-decoration: none;
  border-bottom: 2px solid var(--comic-blue);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}

.resume-download:hover {
  color: var(--comic-red);
  border-color: var(--comic-red);
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

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
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
  .comic-page {
    padding: 20px 15px;
  }

  .hero-panel {
    padding: 30px 20px;
  }

  .featured-aside {
    display: none;
  }

  .hero-aside-images {
    display: none;
  }
  
  .about-layout { 
    grid-template-columns: 1fr; 
  }
  
  .about-details {
    grid-template-columns: 1fr;
  }
  
  .hero-title-row {
    flex-direction: column;
    gap: 20px;
  }
  
  .hero-title {
    align-items: center;
    font-size: clamp(2.5rem, 10vw, 4rem);
  }
  
  .comic-avatar {
    width: 80px;
    height: 80px;
  }
  
  .speech-bubble {
    padding: 15px 25px;
    font-size: 1.2rem;
    border-radius: 30px;
  }
  
  .comic-btn {
    font-size: 1.4rem;
    padding: 14px 30px;
  }
  
  .about-panel {
    padding: 25px;
  }
  
  .resume-embed-wrap {
    box-shadow: 5px 5px 0px black;
  }
  
  .resume-pdf {
    height: 60vh;
    min-height: 400px;
  }
  
  .contact-panel {
    padding: 40px 20px;
  }
  
  .contact-buttons {
    gap: 15px;
  }
  
  .projects-grid {
    gap: 25px;
  }
  
  .section-label {
    font-size: 1.2rem;
  }
  
  .footer {
    padding: 30px 20px;
    font-size: 1.5rem;
  }
}
</style>
