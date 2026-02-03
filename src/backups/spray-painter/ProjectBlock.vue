<template>
  <div 
    class="project-card" 
    @click="goToProjectPage" 
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="projectBlock"
    :style="{ 
      animationDelay: `${delay * 0.1}s`,
      transform: `rotate(${randomRotation}deg) scale(${isHovered ? 1.05 : 1})`
    }"
  >
    <div class="card-tag tag-font">{{ title }}</div>
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="title" class="project-image" />
      <div class="spray-overlay" v-if="isHovered"></div>
    </div>
    <div class="card-footer">
      <span class="stencil-font">VIEW CASE_STUDY</span>
      <div class="arrow">→</div>
    </div>
    <div class="rough-edge"></div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

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
    const isHovered = ref(false);
    const randomRotation = ref(0);

    onMounted(() => {
      // Randomly rotate cards slightly for that "pasted up" look
      randomRotation.value = (Math.random() * 4 - 2).toFixed(1);
    });

    const handleMouseMove = () => isHovered.value = true;
    const handleMouseLeave = () => isHovered.value = false;

    const goToProjectPage = () => {
      router.push(props.route);
    };

    return { 
      goToProjectPage, 
      projectBlock, 
      handleMouseMove, 
      handleMouseLeave,
      isHovered,
      randomRotation
    };
  },
};
</script>

<style scoped>
.project-card {
  position: relative;
  background: white;
  padding: 10px;
  padding-bottom: 40px;
  cursor: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 10px 10px 0px rgba(0,0,0,0.8);
  border: 2px solid #000;
}

.project-card:hover {
  box-shadow: 15px 15px 0px var(--accent-primary);
  z-index: 10;
}

.card-tag {
  position: absolute;
  top: -20px;
  left: 10px;
  background: var(--accent-secondary);
  color: white;
  padding: 5px 15px;
  font-size: 1.2rem;
  z-index: 5;
  transform: rotate(-2deg);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #eee;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.8) contrast(1.1);
  transition: filter 0.3s ease;
}

.project-card:hover .project-image {
  filter: grayscale(0) contrast(1);
}

.spray-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(0, 242, 255, 0.2) 100%);
  pointer-events: none;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  color: black;
}

.stencil-font {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.arrow {
  font-size: 1.5rem;
  font-weight: bold;
}

.rough-edge {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: white;
  clip-path: polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%);
  transform: translateY(100%);
}

@media (max-width: 600px) {
  .project-card {
    cursor: pointer;
  }
}
</style>
