<script setup>
  import BackButton from '../../components/BackButton.vue';
  
  const openLink = () => {
    window.open('https://ads.tiktok.com/business/en-US/blog/branded-mission-topview-cpm-top-feed', '_blank');
  };
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>TikTok Internship - AI-driven Tools for Brand Ad Strategies</h1>

    <p>
      During my internship at <strong>TikTok</strong>, I had the opportunity to work closely with the <strong>branded mission team</strong>, focusing on developing <strong>AI-driven tools</strong> that enhanced the sales team's ability to develop concepts and execute branded mission campaigns more effectively.
    </p>
    
    <h2>Key Responsibilities:</h2>
    <ul>
      <li>Designed and built <strong>backend APIs</strong> to automate the creation of <strong>pitch decks</strong> for TikTok's sales team using <strong>generative AI</strong>.</li>
      <li>Developed <strong>AI-driven ideation tools</strong> that allowed sales teams to generate creative proposals for brand advertisers quickly and efficiently.</li>
      <li>Collaborated with <strong>cross-functional teams</strong>, including product managers and designers, to define technical requirements and ensure the tools met the needs of the sales teams.</li>
      <li>Utilized <strong>data insights</strong> and <strong>machine learning models</strong> to continuously improve the performance and accuracy of the tools, making them more user-friendly and adaptable to new challenges.</li>
    </ul>
    
    <h2>Impact:</h2>
    <p>
      The tools I helped develop contributed to significant improvements in the <strong>efficiency of TikTok's sales team</strong>. By automating many aspects of pitch deck creation and ideation, we reduced the time it took for sales representatives to generate personalized, creative content for advertisers, allowing them to focus more on <strong>strategy and client relationships</strong>.
    </p>
    <p>
      The successful deployment of these AI-driven tools also allowed TikTok to offer <strong>more personalized ad solutions</strong>, helping the sales team better serve the needs of brand advertisers and ultimately driving <strong>increased engagement on the platform</strong>.
    </p>

    <button class="external-link" @click="openLink">
      <img src="@/assets/logo/ttlogo.png" alt="TikTok Logo" class="button-logo" />
      Learn More About Branded Mission
    </button>

    <!-- Tech Logos -->
    <div class="tech-suite">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" class="tech-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" class="tech-logo" />
    </div>
  </div>
</template>

<style scoped>
.project-details {
  text-align: left;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

h1 {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.external-link {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #191919;
  color: white;
  font-size: 1em;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px;
  text-align: center;
  justify-content: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.external-link:hover {
  background-color: #373737;
}

.button-logo {
  width: 24px;
  height: 24px;
}

/* Tech Logos Section */
.tech-suite {
  position: absolute;
  top: 60px;
  right: -150px; /* Push slightly outside the max-width */
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.tech-logo {
  width: 60px;
  height: auto;
}
</style>
