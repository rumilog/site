<template>
  <div 
    class="project-card" 
    @click="goToProjectPage" 
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="projectBlock"
    :style="{ 
      animationDelay: `${delay * 0.1}s`,
      transform: `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${isHovered ? 1.02 : 1})`
    }"
  >
    <div class="card-glow" :style="{ 
      opacity: isHovered ? 1 : 0,
      background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)`
    }"></div>
    <div class="card-content">
      <div class="image-container">
        <img :src="imageSrc" :alt="title" class="project-image" />
        <div class="image-overlay"></div>
        <div class="image-shine" :style="{ left: `${glowX - 50}%` }"></div>
      </div>
      <div class="card-info">
        <h3 class="project-title">{{ title }}</h3>
        <div class="card-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="card-border"></div>
    <div class="card-reflection"></div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  props: {
    title: String,
    imageSrc: String,
    route: String,
    delay: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const router = useRouter();
    const projectBlock = ref(null);
    const tiltX = ref(0);
    const tiltY = ref(0);
    const glowX = ref(50);
    const glowY = ref(50);
    const isHovered = ref(false);

    const handleMouseMove = (e) => {
      if (!projectBlock.value) return;
      
      const rect = projectBlock.value.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate tilt (max 8 degrees)
      tiltX.value = ((x - centerX) / centerX) * 8;
      tiltY.value = -((y - centerY) / centerY) * 8;
      
      // Calculate glow position as percentage
      glowX.value = (x / rect.width) * 100;
      glowY.value = (y / rect.height) * 100;
      
      isHovered.value = true;
    };

    const handleMouseLeave = () => {
      tiltX.value = 0;
      tiltY.value = 0;
      glowX.value = 50;
      glowY.value = 50;
      isHovered.value = false;
    };

    const goToProjectPage = () => {
      if (!projectBlock.value) return;

      // Quick scale animation
      projectBlock.value.style.transition = "transform 0.15s ease-out";
      
      setTimeout(() => {
        router.push(props.route);
      }, 150);
    };

    return { 
      goToProjectPage, 
      projectBlock, 
      handleMouseMove, 
      handleMouseLeave,
      tiltX,
      tiltY,
      glowX,
      glowY,
      isHovered
    };
  },
};
</script>

<style scoped>
.project-card {
  position: relative;
  cursor: none;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(20, 20, 30, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: box-shadow 0.4s ease, transform 0.15s ease-out;
  animation: card-appear 0.6s ease forwards;
  opacity: 0;
  transform-style: preserve-3d;
  will-change: transform;
}

@keyframes card-appear {
  to {
    opacity: 1;
    transform: perspective(1000px) rotateX(0) rotateY(0) scale(1);
  }
}

.project-card:hover {
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 60px rgba(0, 212, 255, 0.1),
    inset 0 0 60px rgba(0, 212, 255, 0.03);
}

/* Animated gradient border */
.card-border {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  transition: all 0.4s ease;
}

.project-card:hover .card-border {
  background: linear-gradient(135deg, 
    rgba(0, 212, 255, 0.5) 0%, 
    rgba(168, 85, 247, 0.5) 50%,
    rgba(255, 107, 107, 0.5) 100%);
  animation: border-rotate 3s linear infinite;
}

@keyframes border-rotate {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* Glow effect */
.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 2;
}

/* Reflection effect */
.card-reflection {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, 
    rgba(255, 255, 255, 0.03) 0%,
    transparent 30%);
  transform: scaleY(-1);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.project-card:hover .card-reflection {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
}

.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(10, 10, 15, 0.8) 100%
  );
  transition: opacity 0.4s ease;
}

.image-shine {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  transform: skewX(-20deg);
  opacity: 0;
  transition: opacity 0.3s ease, left 0.1s ease;
  pointer-events: none;
}

.project-card:hover .image-shine {
  opacity: 1;
}

.card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  gap: 1rem;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  transition: all 0.3s ease;
  text-shadow: 0 0 0 transparent;
}

.project-card:hover .project-title {
  color: #00d4ff;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.card-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.project-card:hover .card-arrow {
  background: linear-gradient(135deg, #00d4ff, #a855f7);
  border-color: transparent;
  color: #0a0a0f;
  transform: translate(3px, -3px) rotate(-5deg);
  box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
}

/* Active state */
.project-card:active {
  transform: perspective(1000px) scale(0.98) !important;
}

/* Responsive */
@media (max-width: 600px) {
  .project-card {
    border-radius: 16px;
    cursor: pointer;
  }
  
  .card-info {
    padding: 1rem 1.25rem;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .card-arrow {
    width: 32px;
    height: 32px;
  }
}
</style>
