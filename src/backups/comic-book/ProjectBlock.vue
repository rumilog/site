<template>
  <div 
    class="comic-panel" 
    @click="goToProjectPage" 
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    ref="projectBlock"
  >
    <div class="panel-header tag-font">{{ title }}</div>
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="title" class="panel-image" />
      <div class="action-burst mini" v-if="isHovered">WHAM!</div>
    </div>
    <div class="panel-footer">
      <span class="comic-button-font">READ NOW!</span>
      <div class="ink-arrow">➜</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  props: {
    title: String,
    imageSrc: String,
    route: String
  },
  setup(props) {
    const router = useRouter();
    const projectBlock = ref(null);
    const isHovered = ref(false);

    const goToProjectPage = () => {
      router.push(props.route);
    };

    return { 
      goToProjectPage, 
      projectBlock, 
      isHovered
    };
  },
};
</script>

<style scoped>
.comic-panel {
  position: relative;
  background: white;
  padding: 10px;
  border: 4px solid black;
  box-shadow: 10px 10px 0px black;
  cursor: pointer;
  transition: all 0.1s;
  transform: rotate(var(--rot, -1deg));
}

.comic-panel:nth-child(even) {
  --rot: 1deg;
}

.comic-panel:hover {
  transform: scale(1.05) rotate(0deg);
  box-shadow: 15px 15px 0px var(--comic-blue);
  z-index: 10;
}

.panel-header {
  font-family: 'Bangers', cursive;
  font-size: 1.5rem;
  background: var(--comic-yellow);
  padding: 5px 10px;
  border-bottom: 4px solid black;
  margin: -10px -10px 10px -10px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border: 2px solid black;
  overflow: hidden;
}

.panel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.1) brightness(1.1);
}

.action-burst.mini {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
  font-size: 1.5rem;
  background: var(--comic-red);
}

.panel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

.ink-arrow {
  font-size: 1.5rem;
  font-weight: 900;
}

.comic-button-font {
  font-family: 'Luckiest Guy', cursive;
  font-size: 0.9rem;
  color: var(--comic-red);
}
</style>
