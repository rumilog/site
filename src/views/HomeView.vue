<script setup>
import ProjectBlock from '../components/ProjectBlock.vue'; // Import ProjectBlock
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
import RumiPixel from '../assets/RumiPixel.png';
import RumiPic from '../assets/aboutmepic.jpg';
import githubIcon from '../assets/logo/github.png';
import linkedinIcon from '../assets/logo/linkedin.png'

const copyEmail = () => {
  navigator.clipboard.writeText("rumiqlog@gmail.com").then(() => {
    alert("Email copied to clipboard!");
  });
};

</script>

<template>
  <main class="main-container">
    <!-- Welcome Section -->
    <section class="welcome">
      <h1>Welcome to my website, I'm Rumi! <img :src="RumiPixel" alt="Rumi Pixel" class="pixel-image" /></h1>
    </section>

    <!-- Intro Section (projects section) -->
    <section class="intro">
      <p>Here are some of the projects I've worked on:</p>
    </section>

    <!-- Grid Layout for 12 boxes -->
    <div class="projects-container">
      <!-- Project Blocks -->
      <ProjectBlock
        title="TikTok Work"
        :imageSrc="thumbnail1"
        route="/projects/tiktok-work"
      />
      <ProjectBlock
        title="Adaptive Mouse"
        :imageSrc="thumbnail2" 
        route="/projects/adaptive-mouse"
      />
      <ProjectBlock
        title="Nautical Phases"
        :imageSrc="thumbnail3" 
        route="/projects/nautical-phrases"
      />
      <ProjectBlock
        title="Research Lab"
        :imageSrc="thumbnail4"
        route="/projects/research-lab"
      />
      <ProjectBlock
        title="Booz Allen Project"
        :imageSrc="thumbnail5"
        route="/projects/booz-allen"
      />
      <ProjectBlock
        title="Audio Visualizer"
        :imageSrc="thumbnail6"
        route="/projects/audio"
      />
      <ProjectBlock
        title="GymMate"
        :imageSrc="thumbnail7"
        route="/projects/gym-mate"
      />
      <ProjectBlock
        title="Jokes a Plenty"
        :imageSrc="thumbnail8"
        route="/projects/jokes"
      />
      <ProjectBlock
        title="EcoMaps"
        :imageSrc="thumbnail9"
        route="/projects/eco-maps"
      />
      <ProjectBlock
        title="Smart Aquarium"
        :imageSrc="thumbnail10"
        route="/projects/smart-aquarium"
      />
      <ProjectBlock
        title="Lateral Leap VHDL"
        :imageSrc="thumbnail11"
        route="/projects/lateral-leap"
      />
      <ProjectBlock
        title="Humidity Sensor"
        :imageSrc="thumbnail12"
        route="/projects/humidity-sensor"
      />
    </div>
    
    <!-- About Me Section (on the right side) -->
    <section class="about-me">
      <div class="about-me-text">
        <h1>About Me</h1>
        <p>
          Hi, I'm Rumi! I'm a computer engineer with a passion for creating innovative technology that improves lives. From developing wearable robotics to designing assistive devices for those with unique challenges, I love working on projects that make a meaningful impact. I also have a strong background in full-stack development and have collaborated with cross-functional teams to deliver solutions in diverse industries. In my free time, I enjoy exploring new ideas and continuously learning to stay at the forefront of technology.
        </p>
      </div>
      <img :src="RumiPic" alt="Rumi" class="rumi-pic" />
    </section>
    <!-- Buttons for GitHub, LinkedIn, and Copy Email -->
    <div class="buttons-container">
        <a href="https://github.com/rumilog" target="_blank" class="social-button">
          <img :src="githubIcon" alt="GitHub" class="button-icon"> GitHub
        </a>
        <a href="https://www.linkedin.com/in/rumilog" target="_blank" class="social-button">
          <img :src="linkedinIcon" alt="LinkedIn" class="button-icon"> LinkedIn
        </a>
        <button class="copy-button" @click="copyEmail">Email Me :)</button>
      </div>
  </main>
</template>

<style scoped>
/* Container for centering the entire page content */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 1vw;
  margin-top: 15vh; /* Adds space before the content */
  text-align: center;
}

/* Welcome Section */
.welcome {
  margin-bottom: 2rem;
}

.welcome h1 {
  font-size: 3vw;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}

.pixel-image {
  width: 4vw; /* Adjust to the size of the text */
  height: 4vw; /* Adjust to match the text size */
  margin-left: 10px; /* Space between the image and text */
}

/* About Me Section with image on the right side */
.about-me {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6vh;
  margin-left: 5vw;
  margin-bottom: 1vh;
  text-align: left;
  width: 80%; /* Control the width of About Me */
  background-color: #f7f7f7; /* Light gray background for distinction */
  padding: 2vw;
  border-radius: 10px; /* Rounded corners for styling */
}

.about-me-text {
  width: 60%; /* Ensures the text section is not too wide */
}

.about-me h1 {
  font-size: 2.5vw;
  font-weight: bold;
  color: #2c3e50; /* Darker color for the header */
  border-bottom: 2px solid #ccc; /* Adds a subtle line under the title */
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
}

.about-me p {
  font-size: 1.2vw;
  color: #555;
  line-height: 1.5;
}

/* Styling for the intro section */
.intro {
  margin-bottom: 2rem;
}

.intro p {
  font-size: 1.5vw;
  color: #555;
  font-weight: bold;
  text-transform: uppercase; /* Bold and capitalized to make it stand out */
  border-bottom: 2px solid #ccc;
  padding-bottom: 0.5rem;
}

/* Grid Layout for Projects (4x3 layout) */
.projects-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
  width: 100%;
  max-width: 100vw;
  padding: 2vw;
  box-sizing: border-box;
  margin-bottom: 3rem; /* Adds space below projects */
}

/* Make the project boxes responsive with a minimum size */
.projects-container > * {
  height: 15vw;
  max-width: 22vw;
  margin: 0 auto;
}

/* Adjust the boxes for smaller screens */
@media (max-width: 768px) {
  .welcome h1, .about-me h1, .intro p {
    font-size: 4vw;
  }

  .welcome p, .about-me p {
    font-size: 2.5vw;
  }

  /* Adjust grid for smaller screens */
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-container > * {
    height: 30vw;
    max-width: 40vw;
  }

  /* Adjust About Me for smaller screens */
  .about-me {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    width: 100%;
  }

  .about-me-text {
    width: 100%;
  }

  .rumi-pic {
    width: 70%;
    margin-top: 2vw;
  }
}

.rumi-pic {
  width: 35%; /* Set the image width */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Optional: add rounded corners */
}
.buttons-container {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10vh;
}

.social-button, .copy-button {
  background-color: #e7e7e7;
  color: rgb(46, 46, 46);
  font-size: 1.2vw;
  font-weight: 600;
  padding: 0.8vw 2vw;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.social-button:hover, .copy-button:hover {
  background-color: white;
  color: #2c3e50;
  border: 2px solid #2c3e50;
  transform: translateY(-2px);
}

.copy-button {
  background-color: #53bd45;
}

.copy-button:hover {
  background-color: white;
  color: #377a2e;
  border: 2px solid #377a2e;
}

.social-button {
  /* ... other styles */
  display: inline-flex; /* Use flexbox for icon and text alignment */
  align-items: center; /* Vertically align icon and text */
  justify-content: center; /* Horizontally align icon and text */
}

.button-icon {
  width: 1.5vw; /* Adjust icon size as needed */
  height: 1.5vw;
  margin-right: 0.5vw; /* Space between icon and text */
}

/* Responsive icon sizes */
@media (max-width: 768px) {
    .button-icon {
        width: 3vw;
        height: 3vw;
        margin-right: 1vw;
    }
}



</style>
