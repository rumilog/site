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

const showResume = ref(false);
const isLoaded = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);
const scrollProgress = ref(0);
const typedText = ref('');
const showCursor = ref(true);

const fullText = "Master's student in Mechanical Engineering at Carnegie Mellon, building intelligent systems that bridge AI with the physical world.";

// Mouse tracking for spotlight effect
const handleMouseMove = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

// Scroll progress tracking
const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (scrollTop / docHeight) * 100;
};

// Typing animation
const typeText = () => {
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
      // Blink cursor after typing is done
      setInterval(() => {
        showCursor.value = !showCursor.value;
      }, 530);
    }
  }, 30);
};

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
  
  // Start typing animation after a delay
  setTimeout(() => {
    typeText();
  }, 800);
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('scroll', handleScroll);
});

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
  <main class="main-container" :class="{ loaded: isLoaded }">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    
    <!-- Custom Cursor -->
    <div 
      class="custom-cursor" 
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>
    <div 
      class="cursor-glow" 
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>
    
    <!-- Mouse Spotlight -->
    <div 
      class="mouse-spotlight"
      :style="{ 
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 212, 255, 0.06), transparent 40%)`
      }"
    ></div>
    
    <!-- Animated background elements -->
    <div class="bg-gradient"></div>
    
    <!-- Morphing Blobs -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    
    <!-- Floating Particles -->
    <div class="particles">
      <div class="particle" v-for="n in 12" :key="n" :style="{ 
        '--delay': (n * 2) + 's',
        '--x': ((n * 8) % 100) + 'vw',
        '--duration': (20 + (n % 5) * 5) + 's',
        '--size': (2 + (n % 3)) + 'px'
      }"></div>
    </div>
    
    <div class="grid-overlay"></div>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>Available for opportunities</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">Hey, I'm</span>
          <span class="title-name">
            <span class="glitch-wrapper">
              <span class="glitch-text" data-text="Rumi">Rumi</span>
            </span>
            <img :src="RumiPixel" alt="Rumi Pixel" class="pixel-avatar" />
          </span>
        </h1>
        <p class="hero-subtitle typed-text">
          <span class="highlight-word" v-for="(word, index) in typedText.split(' ')" :key="index">
            {{ word }}&nbsp;
          </span>
          <span class="typing-cursor" :class="{ hidden: !showCursor }">|</span>
        </p>
        <div class="hero-cta">
          <a href="#projects" class="cta-primary magnetic-btn">
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
          <a href="#about" class="cta-secondary magnetic-btn">Learn More</a>
        </div>
        
        <!-- Scroll indicator -->
        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <span id="projects" class="scroll-anchor-projects"></span>
    <section class="projects-section">
      <div class="section-header">
        <span class="section-label">&lt;Portfolio /&gt;</span>
        <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
        <p class="section-desc">A collection of work spanning robotics, AI, and full-stack development</p>
      </div>
      
      <div class="projects-grid">
        <ProjectBlock
          title="LEAP Hand Control"
          :imageSrc="LeapHandImg"
          route="/projects/leap-hand"
          :delay="0"
        />
        <ProjectBlock
          title="TikTok Work"
          :imageSrc="thumbnail1"
          route="/projects/tiktok-work"
          :delay="1"
        />
        <ProjectBlock
          title="Drive-Free Hand"
          :imageSrc="DriveFree1"
          route="/projects/drive-free"
          :delay="2"
        />
        <ProjectBlock
          title="Research Lab"
          :imageSrc="thumbnail4"
          route="/projects/research-lab"
          :delay="3"
        />
        <ProjectBlock
          title="Booz Allen Project"
          :imageSrc="thumbnail5"
          route="/projects/booz-allen"
          :delay="4"
        />
        <ProjectBlock
          title="Adaptive Mouse"
          :imageSrc="thumbnail2" 
          route="/projects/adaptive-mouse"
          :delay="5"
        />
        <ProjectBlock
          title="Nautical Phrases"
          :imageSrc="thumbnail3" 
          route="/projects/nautical-phrases"
          :delay="6"
        />
        <ProjectBlock
          title="Audio Visualizer"
          :imageSrc="thumbnail6"
          route="/projects/audio"
          :delay="7"
        />
        <ProjectBlock
          title="Jokes a Plenty"
          :imageSrc="thumbnail8"
          route="/projects/jokes"
          :delay="8"
        />
        <ProjectBlock
          title="EcoMaps"
          :imageSrc="thumbnail9"
          route="/projects/eco-maps"
          :delay="9"
        />
        <ProjectBlock
          title="Smart Aquarium"
          :imageSrc="thumbnail10"
          route="/projects/smart-aquarium"
          :delay="10"
        />
        <ProjectBlock
          title="Lateral Leap VHDL"
          :imageSrc="thumbnail11"
          route="/projects/lateral-leap"
          :delay="11"
        />
        <ProjectBlock
          title="Humidity Sensor"
          :imageSrc="thumbnail12"
          route="/projects/humidity-sensor"
          :delay="12"
        />
      </div>
    </section>
    
    <!-- About Section -->
    <span id="about" class="scroll-anchor"></span>
    <section class="about-section">
      <div class="about-container">
        <div class="about-image-wrapper">
          <div class="image-frame">
            <img :src="RumiPic" alt="Rumi" class="about-image" />
            <div class="image-glare"></div>
          </div>
          <div class="image-decoration"></div>
          <div class="floating-badge">
            <span>🎓</span>
            <span>CMU '27</span>
          </div>
        </div>
        <div class="about-content">
          <span class="section-label">&lt;About /&gt;</span>
          <h2 class="about-title">Passionate about bringing <span class="gradient-text">AI into the real world</span></h2>
          <p class="about-text">
            I'm a master's student in Mechanical Engineering at Carnegie Mellon University with a passion for bringing AI and machine learning into the physical world. Whether it's through robotics, autonomous vehicles, or other intelligent systems, I love working on projects that bridge cutting-edge algorithms with real-world impact.
          </p>
          <p class="about-text">
            My background spans wearable robotics, assistive devices, and full-stack development—experience that's shaped how I approach complex, cross-disciplinary challenges. In my free time, I enjoy exploring new ideas and continuously learning to stay at the forefront of technology.
          </p>
          
          <!-- Tech Stack -->
          <div class="tech-stack">
            <span class="tech-label">Tech I work with:</span>
            <div class="tech-pills">
              <span class="tech-pill">Python</span>
              <span class="tech-pill">PyTorch</span>
              <span class="tech-pill">ROS</span>
              <span class="tech-pill">C++</span>
              <span class="tech-pill">JavaScript</span>
              <span class="tech-pill">Vue.js</span>
            </div>
          </div>
          
          <div class="about-stats">
            <div class="stat">
              <span class="stat-number" data-count="13">13+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
              <span class="stat-number">CMU</span>
              <span class="stat-label">Education</span>
            </div>
            <div class="stat">
              <span class="stat-number">AI/ML</span>
              <span class="stat-label">Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-container">
        <span class="section-label">&lt;Contact /&gt;</span>
        <h2 class="contact-title">Let's <span class="gradient-text">Connect</span></h2>
        <p class="contact-subtitle">Have a project in mind? Let's talk!</p>
        <div class="contact-buttons">
          <a href="https://github.com/rumilog" target="_blank" class="contact-btn github">
            <img :src="githubIcon" alt="GitHub" class="btn-icon" />
            <span>GitHub</span>
            <div class="btn-shine"></div>
          </a>
          <a href="https://www.linkedin.com/in/rumilog" target="_blank" class="contact-btn linkedin">
            <img :src="linkedinIcon" alt="LinkedIn" class="btn-icon" />
            <span>LinkedIn</span>
            <div class="btn-shine"></div>
          </a>
          <button class="contact-btn email" @click="copyEmail">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 6L12 13L2 6"/>
            </svg>
            <span>Copy Email</span>
            <div class="btn-shine"></div>
          </button>
          <a href="https://github.com/rumilog/site" target="_blank" class="contact-btn code">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 18L22 12L16 6M8 6L2 12L8 18"/>
            </svg>
            <span>View Site Code</span>
            <div class="btn-shine"></div>
          </a>
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section class="resume-section">
      <div class="resume-container">
        <span class="section-label">&lt;Resume /&gt;</span>
        <h2 class="resume-title">My <span class="gradient-text">Background</span></h2>
        <div class="resume-frame">
          <iframe :src="resumePDF" class="resume-iframe"></iframe>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">Designed & Built with 💙 by Rumi</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
/* Scroll Progress Bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #00d4ff, #a855f7, #ff6b6b);
  z-index: 9999;
  transition: width 0.1s ease-out;
}

/* Custom Cursor */
.custom-cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  background: #00d4ff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
}

.cursor-glow {
  position: fixed;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9997;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out;
}

/* Mouse Spotlight */
.mouse-spotlight {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

/* Main Container */
.main-container {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  cursor: none;
}

.main-container * {
  cursor: none;
}

/* Background Effects */
.bg-gradient {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 212, 255, 0.12), transparent),
    radial-gradient(ellipse 60% 40% at 90% 80%, rgba(168, 85, 247, 0.08), transparent),
    radial-gradient(ellipse 50% 30% at 10% 60%, rgba(255, 107, 107, 0.06), transparent);
  pointer-events: none;
  z-index: 0;
}

/* Morphing Blobs */
.blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2));
  top: -10%;
  left: -10%;
  animation: blob-morph 15s ease-in-out infinite, blob-float 20s ease-in-out infinite;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(255, 107, 107, 0.15));
  bottom: 10%;
  right: -5%;
  animation: blob-morph 18s ease-in-out infinite reverse, blob-float 25s ease-in-out infinite reverse;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(0, 212, 255, 0.1));
  top: 50%;
  left: 30%;
  animation: blob-morph 20s ease-in-out infinite, blob-float 30s ease-in-out infinite;
}

@keyframes blob-morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%; }
  75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
}

@keyframes blob-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(20px, 30px) scale(1.02); }
}

/* Floating Particles */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  transform: translateZ(0);
  will-change: contents;
  backface-visibility: hidden;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: rgba(0, 212, 255, 0.6);
  border-radius: 50%;
  left: var(--x);
  animation: particle-rise var(--duration) linear infinite;
  animation-delay: var(--delay);
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  opacity: 0;
}

@keyframes particle-rise {
  0% {
    transform: translate3d(0, 100vh, 0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translate3d(0, -100vh, 0);
    opacity: 0;
  }
}

.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

/* Hero Section */
.hero {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-content {
  max-width: 900px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  animation: fade-in-up 0.8s ease forwards;
  animation-delay: 0.2s;
}

@keyframes fade-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 50px;
  font-size: 0.875rem;
  color: #00d4ff;
  margin-bottom: 2rem;
  animation: badge-pulse 3s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.2); }
  50% { box-shadow: 0 0 20px 5px rgba(0, 212, 255, 0.1); }
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
  50% { opacity: 0.8; box-shadow: 0 0 10px 5px rgba(34, 197, 94, 0.3); }
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.title-line {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  font-size: 0.5em;
}

.title-name {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

/* Glitch Effect */
.glitch-wrapper {
  position: relative;
}

.glitch-text {
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glitch-text::before {
  animation: glitch-1 2s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch-text::after {
  animation: glitch-2 2s infinite linear alternate-reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(-2px, 1px); }
  94% { transform: translate(2px, -1px); }
  96% { transform: translate(-1px, 2px); }
  98% { transform: translate(1px, -2px); }
}

@keyframes glitch-2 {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(2px, -1px); }
  94% { transform: translate(-2px, 1px); }
  96% { transform: translate(1px, -2px); }
  98% { transform: translate(-1px, 2px); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.pixel-avatar {
  width: 80px;
  height: 80px;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
}

.gradient-text {
  background: linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

/* Typed Text */
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  min-height: 3.4em;
}

.typed-text {
  display: inline;
}

.highlight-word {
  display: inline;
}

.typing-cursor {
  color: #00d4ff;
  font-weight: 300;
  animation: none;
}

.typing-cursor.hidden {
  opacity: 0;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #00d4ff, #a855f7);
  background-size: 200% 200%;
  color: #0a0a0f;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: gradient-shift 4s ease infinite;
  position: relative;
  overflow: hidden;
}

.cta-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.cta-primary:hover::before {
  left: 100%;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.3);
}

.cta-primary::after {
  display: none;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: transparent;
  color: #ffffff;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(168, 85, 247, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-secondary:hover::before {
  opacity: 1;
}

.cta-secondary:hover {
  border-color: #00d4ff;
  transform: translateY(-2px);
}

.cta-secondary::after {
  display: none;
}

/* Scroll Indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0.6;
  animation: fade-in-up 1s ease forwards 1.5s;
  opacity: 0;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #00d4ff;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 2s ease-in-out infinite;
}

@keyframes scroll-wheel {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  50% { transform: translateX(-50%) translateY(10px); opacity: 0.3; }
}

.scroll-indicator span {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Section Styles */
.section-label {
  display: inline-block;
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.section-desc {
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
}

/* Projects Section */
.projects-section {
  position: relative;
  z-index: 1;
  padding: 6rem 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Scroll anchor offset */
.scroll-anchor {
  display: block;
  position: relative;
  top: 130px;
  visibility: hidden;
}

.scroll-anchor-projects {
  display: block;
  position: relative;
  top: 80px;
  visibility: hidden;
}

/* About Section */
.about-section {
  position: relative;
  z-index: 1;
  padding: 8rem 2rem;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.about-image-wrapper {
  position: relative;
}

.image-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-glare {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: skewX(-20deg);
  transition: left 0.8s ease;
}

.image-frame:hover .about-image {
  transform: scale(1.05);
}

.image-frame:hover .image-glare {
  left: 150%;
}

.image-decoration {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  border: 2px solid #00d4ff;
  border-radius: 20px;
  z-index: -1;
  opacity: 0.3;
  animation: decoration-pulse 4s ease-in-out infinite;
}

@keyframes decoration-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

.floating-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(135deg, #00d4ff, #a855f7);
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #0a0a0f;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
  animation: float 3s ease-in-out infinite;
}

.about-content {
  padding: 2rem 0;
}

.about-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.about-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.25rem;
  line-height: 1.8;
}

/* Tech Stack */
.tech-stack {
  margin: 2rem 0;
}

.tech-label {
  display: block;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  padding: 6px 14px;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 20px;
  font-size: 0.875rem;
  color: #00d4ff;
  transition: all 0.3s ease;
}

.tech-pill:hover {
  background: rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
}

.about-stats {
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00d4ff;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Contact Section */
.contact-section {
  position: relative;
  z-index: 1;
  padding: 6rem 2rem;
  text-align: center;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.contact-subtitle {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: rgba(20, 20, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}

.contact-btn:hover .btn-shine {
  left: 100%;
}

.contact-btn:hover {
  transform: translateY(-3px);
  border-color: #00d4ff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.contact-btn::after {
  display: none;
}

.btn-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

.contact-btn.github:hover {
  background: #333;
}

.contact-btn.linkedin:hover {
  background: #0077b5;
}

.contact-btn.email:hover {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.contact-btn.code:hover {
  background: linear-gradient(135deg, #00d4ff, #a855f7);
  color: #0a0a0f;
}

.contact-btn.code:hover svg {
  stroke: #0a0a0f;
}

/* Resume Section */
.resume-section {
  position: relative;
  z-index: 1;
  padding: 6rem 2rem;
}

.resume-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.resume-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
}

.resume-frame {
  background: rgba(20, 20, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 0 60px rgba(0, 212, 255, 0.1);
}

.resume-iframe {
  width: 100%;
  height: 80vh;
  border: none;
  border-radius: 12px;
  background: white;
}

/* Footer */
.footer {
  position: relative;
  z-index: 1;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.footer-year {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 900px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-image-wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .image-decoration {
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
  }
  
  .floating-badge {
    bottom: -10px;
    right: -10px;
  }
}

@media (max-width: 600px) {
  /* Hide custom cursor on mobile */
  .custom-cursor,
  .cursor-glow {
    display: none;
  }
  
  .main-container,
  .main-container * {
    cursor: auto;
  }
  
  .hero {
    padding: 1rem;
    padding-top: 4rem;
  }
  
  .pixel-avatar {
    width: 50px;
    height: 50px;
  }
  
  .about-stats {
    gap: 1.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .tech-pills {
    justify-content: center;
  }
}

/* Animation states */
.main-container.loaded .hero-content {
  opacity: 1;
  transform: translateY(0);
}
</style>
