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
import { ref, onMounted, onUnmounted } from 'vue';

const isLoaded = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);
const scrollProgress = ref(0);
const typedText = ref('');
const showCursor = ref(true);
const isClicking = ref(false);

const fullText = "Building intelligent systems that bridge AI with the physical world. CMU '27 Master's Researcher.";

const handleMouseMove = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const handleMouseDown = () => isClicking.value = true;
const handleMouseUp = () => isClicking.value = false;

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (scrollTop / docHeight) * 100;
};

const typeText = () => {
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
      setInterval(() => {
        showCursor.value = !showCursor.value;
      }, 530);
    }
  }, 30);
};

onMounted(() => {
  setTimeout(() => isLoaded.value = true, 100);
  setTimeout(() => typeText(), 800);
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mousedown', handleMouseDown);
  window.removeEventListener('mouseup', handleMouseUp);
  window.removeEventListener('scroll', handleScroll);
});

const copyEmail = () => {
  navigator.clipboard.writeText("rumiqlog@gmail.com").then(() => {
    alert("Email copied to clipboard!");
  });
};
</script>

<template>
  <main class="main-container" :class="{ loaded: isLoaded }">
    <!-- Scroll Progress -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    
    <!-- Custom Spray Cursor -->
    <div 
      class="custom-cursor" 
      :class="{ clicking: isClicking }"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    >
      <div class="nozzle"></div>
      <div class="spray-cloud" v-if="isClicking"></div>
    </div>
    
    <!-- Background Elements -->
    <div class="bg-texture"></div>
    <div class="paint-splatter splatter-1"></div>
    <div class="paint-splatter splatter-2"></div>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="stencil-tag hero-badge">
          <span>LIVE FROM THE LAB</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line rough-font">Yo, I'm</span>
          <span class="title-name tag-font gradient-text paint-drip">Rumi</span>
          <img :src="RumiPixel" alt="Rumi Pixel" class="pixel-avatar" />
        </h1>
        <p class="hero-subtitle typed-text mono">
          {{ typedText }}<span class="typing-cursor" :class="{ hidden: !showCursor }">_</span>
        </p>
        <div class="hero-cta">
          <a href="#projects" class="cta-spray tag-font">
            <span>SEE DA PROJECTS</span>
          </a>
          <a href="#about" class="cta-stencil stencil-font">WHO AM I?</a>
        </div>
        
        <div class="scroll-down tag-font">SCROLL TO TAG ⬇</div>
      </div>
    </section>

    <!-- Projects Section -->
    <span id="projects" class="scroll-anchor-projects"></span>
    <section class="projects-section">
      <div class="section-header">
        <h2 class="section-title stencil-font"><span class="paint-strike">PROJECTS</span></h2>
        <p class="section-desc mono">Recent experiments in robotics & AI</p>
      </div>
      
      <div class="projects-grid">
        <ProjectBlock title="LEAP Hand Control" :imageSrc="LeapHandImg" route="/projects/leap-hand" :delay="0" />
        <ProjectBlock title="TikTok Work" :imageSrc="thumbnail1" route="/projects/tiktok-work" :delay="1" />
        <ProjectBlock title="Drive-Free Hand" :imageSrc="DriveFree1" route="/projects/drive-free" :delay="2" />
        <ProjectBlock title="Research Lab" :imageSrc="thumbnail4" route="/projects/research-lab" :delay="3" />
        <ProjectBlock title="Booz Allen Project" :imageSrc="thumbnail5" route="/projects/booz-allen" :delay="4" />
        <ProjectBlock title="Adaptive Mouse" :imageSrc="thumbnail2" route="/projects/adaptive-mouse" :delay="5" />
        <ProjectBlock title="Nautical Phrases" :imageSrc="thumbnail3" route="/projects/nautical-phrases" :delay="6" />
        <ProjectBlock title="Audio Visualizer" :imageSrc="thumbnail6" route="/projects/audio" :delay="7" />
        <ProjectBlock title="Jokes a Plenty" :imageSrc="thumbnail8" route="/projects/jokes" :delay="8" />
        <ProjectBlock title="EcoMaps" :imageSrc="thumbnail9" route="/projects/eco-maps" :delay="9" />
        <ProjectBlock title="Smart Aquarium" :imageSrc="thumbnail10" route="/projects/smart-aquarium" :delay="10" />
        <ProjectBlock title="Lateral Leap VHDL" :imageSrc="thumbnail11" route="/projects/lateral-leap" :delay="11" />
        <ProjectBlock title="Humidity Sensor" :imageSrc="thumbnail12" route="/projects/humidity-sensor" :delay="12" />
      </div>
    </section>
    
    <!-- About Section -->
    <span id="about" class="scroll-anchor"></span>
    <section class="about-section">
      <div class="about-container">
        <div class="about-image-wrapper">
          <div class="image-frame paste-up">
            <img :src="RumiPic" alt="Rumi" class="about-image" />
            <div class="stencil-overlay">RUMI</div>
          </div>
          <div class="floating-badge tag-font">
            <span>CMU '27</span>
          </div>
        </div>
        <div class="about-content">
          <h2 class="about-title stencil-font">ENGINEERING <span class="gradient-text">& ART</span></h2>
          <div class="about-box">
            <p class="about-text">
              I'm a master's student in Mechanical Engineering at **Carnegie Mellon** with a obsession for bringing AI into the physical world. 
              When I'm not in the lab, you'll find me **spray painting**, **skying**, or **rock climbing**. 
              My work lives at the intersection of robotics and creative expression.
            </p>
          </div>
          
          <div class="tech-stack">
            <span class="tech-label tag-font">TOOLS OF THE TRADE:</span>
            <div class="tech-pills">
              <span class="tech-pill">Python</span>
              <span class="tech-pill">PyTorch</span>
              <span class="tech-pill">ROS</span>
              <span class="tech-pill">C++</span>
              <span class="tech-pill">3D Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-container">
        <h2 class="contact-title tag-font paint-drip">HIT ME UP</h2>
        <div class="contact-buttons">
          <a href="https://github.com/rumilog" target="_blank" class="contact-btn">GITHUB</a>
          <a href="https://www.linkedin.com/in/rumilog" target="_blank" class="contact-btn">LINKEDIN</a>
          <button class="contact-btn" @click="copyEmail">EMAIL ME</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="tag-font">TAGGED BY RUMI · 2026</p>
    </footer>
  </main>
</template>

<style scoped>
/* Main Container */
.main-container {
  background: var(--bg-primary);
  min-height: 100vh;
  cursor: none;
}

.main-container * {
  cursor: none;
}

/* Scroll Progress */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: var(--accent-gradient);
  z-index: 1000;
}

/* Custom Spray Cursor */
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
}

.custom-cursor.clicking {
  transform: translate(-50%, -50%) scale(0.8);
}

.nozzle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid var(--accent-primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}

.spray-cloud {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0.4;
  animation: spray-puff 0.2s ease-out;
}

@keyframes spray-puff {
  from { transform: translate(-50%, -50%) scale(0.5); opacity: 0.8; }
  to { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
}

/* Background Splatters */
.paint-splatter {
  position: fixed;
  width: 400px;
  height: 400px;
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;
  filter: blur(20px);
}

.splatter-1 {
  background: var(--accent-secondary);
  top: -100px;
  right: -100px;
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}

.splatter-2 {
  background: var(--accent-tertiary);
  bottom: -100px;
  left: -100px;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  background: white;
  color: black;
  padding: 5px 15px;
  font-weight: 900;
  transform: rotate(-2deg);
  margin-bottom: 2rem;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 7rem);
  line-height: 0.9;
  margin-bottom: 2rem;
}

.title-line {
  display: block;
  font-size: 0.3em;
  color: var(--accent-primary);
  text-transform: uppercase;
}

.pixel-avatar {
  width: 80px;
  vertical-align: middle;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 4rem;
  color: var(--text-secondary);
}

.hero-cta {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.cta-spray {
  background: var(--accent-primary);
  color: black;
  padding: 15px 30px;
  font-size: 1.5rem;
  text-decoration: none;
  transform: rotate(1deg);
  transition: all 0.2s;
  border: 3px solid black;
  box-shadow: 5px 5px 0px black;
}

.cta-spray:hover {
  transform: translate(-2px, -2px) rotate(-1deg);
  box-shadow: 8px 8px 0px black;
  background: white;
}

.cta-stencil {
  border: 3px solid white;
  color: white;
  padding: 15px 30px;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
}

.cta-stencil:hover {
  background: white;
  color: black;
}

.scroll-down {
  opacity: 0.5;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* Sections */
.projects-section, .about-section, .contact-section {
  padding: 100px 2rem;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.paint-strike {
  position: relative;
  display: inline-block;
}

.paint-strike::before {
  content: '';
  position: absolute;
  left: -5%;
  top: 50%;
  width: 110%;
  height: 40%;
  background: var(--accent-secondary);
  z-index: -1;
  transform: rotate(-1deg) translateY(-50%);
  opacity: 0.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 4rem auto;
}

/* About Section */
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
}

.paste-up {
  position: relative;
  background: white;
  padding: 15px;
  padding-bottom: 60px;
  transform: rotate(-3deg);
  box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
}

.about-image {
  width: 100%;
  filter: grayscale(1) contrast(1.2);
}

.stencil-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: 'Bungee', cursive;
  font-size: 3rem;
  color: rgba(0,0,0,0.1);
}

.about-box {
  background: rgba(255,255,255,0.05);
  padding: 2rem;
  border-left: 5px solid var(--accent-tertiary);
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}

.tech-pill {
  background: transparent;
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  padding: 5px 15px;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
}

/* Contact */
.contact-section {
  text-align: center;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.contact-btn {
  font-family: 'Permanent Marker', cursive;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: white;
  padding: 10px 20px;
  position: relative;
  transition: color 0.3s;
}

.contact-btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--accent-secondary);
  z-index: -1;
  transition: width 0.3s;
}

.contact-btn:hover::before {
  width: 100%;
}

/* Footer */
.footer {
  text-align: center;
  padding: 4rem;
  opacity: 0.5;
}

/* Anchor Offsets */
.scroll-anchor-projects { display: block; position: relative; top: 80px; visibility: hidden; }
.scroll-anchor { display: block; position: relative; top: 130px; visibility: hidden; }

/* Responsive */
@media (max-width: 768px) {
  .about-container { grid-template-columns: 1fr; }
  .custom-cursor { display: none; }
  .main-container, .main-container * { cursor: auto; }
}
</style>
