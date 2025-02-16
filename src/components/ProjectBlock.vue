<template>
  <div class="project-block" @click="goToProjectPage" ref="projectBlock">
    <div class="border-top"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
    <div class="border-right"></div>

    <img :src="imageSrc" :alt="title" class="project-image" />
    <h2 class="project-title">{{ title }}</h2>
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
  },
  setup(props) {
    const router = useRouter();
    const projectBlock = ref(null);
    const allButtons = ref([]);

    // Function to collect all buttons on the page and animate them
    const animateButtons = () => {
      allButtons.value.forEach(button => {
        button.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
        button.style.transform = "translateY(50px)";
        button.style.opacity = "0";
      });
    };

    const goToProjectPage = () => {
      if (!projectBlock.value) return;

      // Animate buttons first
      animateButtons();

      // Apply the animation to the project block
      projectBlock.value.style.transition = "transform 0.2s ease-in-out";
      projectBlock.value.style.transform = "scale(0.9)"; // Shrink inward

      setTimeout(() => {
        projectBlock.value.style.transform = "scale(1.1)"; // Expand outward
      }, 100);

      // Add a slight recoil after expanding
      setTimeout(() => {
        projectBlock.value.style.transition = "transform 0.1s ease-out";
        projectBlock.value.style.transform = "scale(1.05)"; // Slight recoil after expanding
      }, 300); // Recoil after expansion

      // Wait for the button and project block animation to finish before navigating
      setTimeout(() => {
        router.push(props.route);
      }, 500); // Wait for full animation (400ms + 400ms for buttons)
    };

    return { goToProjectPage, projectBlock, allButtons };
  },
};
</script>

<style scoped>
.project-block {
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25vw;
  height: 30vh;
  margin: 2vw;
  position: relative;
  transition: transform 0.2s ease-in-out;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-block:active {
  transform: scale(0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-block:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.project-image {
  margin-top: 5%;
  width: 80%;
  height: 60%;
  min-height: 60%;
  max-height: 70%;
  object-fit: cover;
}

.project-title {
  font-size: 2vw;
  font-weight: bold;
  padding: 1vw;
  margin: 0;
  color: rgb(58, 58, 58);
}

/* Border Elements */
.border-top, .border-bottom {
  position: absolute;
  height: 4px;
  width: 0;
  background: rgb(61, 61, 61);
  transition: width 1s ease-in-out;
}

.border-left, .border-right {
  position: absolute;
  width: 4px;
  height: 0;
  background: rgb(54, 50, 50);
  transition: height 1s ease-in-out;
}

.border-top { top: 0; left: 0; }
.border-bottom { bottom: 0; right: 0; }
.border-left { top: 0; left: 0; }
.border-right { bottom: 0; right: 0; }

/* Hover Animation */
.project-block:hover .border-top,
.project-block:hover .border-bottom {
  width: 100%;
}

.project-block:hover .border-left,
.project-block:hover .border-right {
  height: 100%;
}

/* Animation for buttons */
button {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

/* Ensure buttons move and fade */
button.faded {
  transform: translateY(50px);
  opacity: 0;
}
</style>
