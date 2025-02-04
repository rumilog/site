<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const projects = {
  "project3": {
    title: "My Mouse haha",
    imageSrc: "/images/mouse.jpg",
    description: "A project where I designed a custom mouse for my friend with ectrodactyly.",
  },
  
  // Add more projects as needed
};

const projectData = projects[route.params.id] || {
  title: "Project Not Found",
  imageSrc: "/images/default.jpg",
  description: "No information available for this project.",
};
</script>

<template>
  <div class="project-details">
    <h1>{{ projectData.title }}</h1>
    <img :src="projectData.imageSrc" alt="Project Image" class="project-image" />
    <p>{{ projectData.description }}</p>
  </div>
</template>

<style scoped>
.project-details {
  text-align: center;
  padding: 20px;
}

.project-image {
  width: 80%;
  max-width: 600px;
  margin: 20px 0;
}
</style>
