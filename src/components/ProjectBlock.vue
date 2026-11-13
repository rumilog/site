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

      <div class="type-stickers">
        <div
          v-for="k in kinds"
          :key="k"
          class="type-sticker"
          :class="`sticker-${k}`"
        >
          {{ labels[k] }}
          <small v-if="k === 'paper' && status">{{ status }}</small>
        </div>
      </div>

      <div
        v-if="orgLogo"
        class="org-sticker"
        :class="`org-sticker-${orgLogoBg}`"
        :title="org"
      >
        <img :src="orgLogo" :alt="`${org} logo`" class="org-logo" />
      </div>

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
    route: String,
    // Any of 'paper' | 'internship' | 'project'; each gets its own sticker
    kinds: { type: Array, default: () => ['project'] },
    // Paper status, e.g. 'Preprint'
    status: { type: String, default: '' },
    // Company the work was done with, shown as a logo sticker
    org: { type: String, default: '' },
    orgLogo: { type: String, default: '' },
    // Sticker background behind the logo: 'dark' | 'light'
    orgLogoBg: { type: String, default: 'light' },
  },
  setup(props) {
    const router = useRouter();
    const projectBlock = ref(null);
    const isHovered = ref(false);

    const goToProjectPage = () => {
      router.push(props.route);
    };

    const labels = {
      paper: 'PAPER',
      internship: 'INTERNSHIP',
      project: 'PROJECT',
    };

    return {
      goToProjectPage,
      projectBlock,
      isHovered,
      labels,
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

/* Type stickers (top right, side by side in the order given) */
.type-stickers {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}

.type-sticker {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Bangers', cursive;
  font-size: 1.3rem;
  letter-spacing: 1px;
  line-height: 1;
  padding: 6px 12px;
  border: 3px solid black;
  box-shadow: 3px 3px 0px black;
  transform: rotate(6deg);
}

.type-sticker:nth-child(even) {
  transform: rotate(-4deg);
}

.type-sticker small {
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  margin-top: 3px;
}

.sticker-paper {
  background: var(--comic-red);
  color: white;
}

.sticker-internship {
  background: var(--comic-blue);
  color: white;
}

.sticker-project {
  background: white;
  color: black;
}

/* Company logo sticker (bottom left) */
.org-sticker {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 5;
  display: flex;
  align-items: center;
  height: 44px;
  padding: 6px 10px;
  border: 3px solid black;
  box-shadow: 3px 3px 0px black;
  transform: rotate(-4deg);
}

.org-sticker-dark {
  background: black;
}

.org-sticker-light {
  background: white;
}

.org-logo {
  height: 100%;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  display: block;
}
</style>
