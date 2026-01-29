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
    <div class="project-info">
      <p><strong>Role:</strong> Software Engineering Intern</p>
      <p><strong>Tools:</strong> React, JavaScript, Python, Figma, Generative AI</p>
    </div>

    <p>
      During my internship at <strong>TikTok</strong>, I had the opportunity to work closely with the <strong>branded mission team</strong>, focusing on developing <strong>AI-driven tools</strong> that enhanced the sales team's ability to develop concepts and execute branded mission campaigns more effectively.
    </p>
    
    <h2>Key Responsibilities</h2>
    <ul>
      <li>Designed and built <strong>backend APIs</strong> to automate the creation of <strong>pitch decks</strong> for TikTok's sales team using <strong>generative AI</strong>.</li>
      <li>Developed <strong>AI-driven ideation tools</strong> that allowed sales teams to generate creative proposals for brand advertisers quickly and efficiently.</li>
      <li>Collaborated with <strong>cross-functional teams</strong>, including product managers and designers, to define technical requirements and ensure the tools met the needs of the sales teams.</li>
      <li>Utilized <strong>data insights</strong> and <strong>machine learning models</strong> to continuously improve the performance and accuracy of the tools, making them more user-friendly and adaptable to new challenges.</li>
    </ul>
    
    <h2>Impact</h2>
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
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
