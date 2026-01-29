<script setup>
import BackButton from '../../components/BackButton.vue';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Robotic LEAP Hand Control</h1>
    <div class="project-info">
      <p><strong>Role:</strong> Graduate Researcher</p>
      <p><strong>Lab:</strong> Mechanical and AI Laboratory, Carnegie Mellon University</p>
      <p><strong>Tools:</strong> Python, VR Motion Tracking, Diffusion Policy, ROS</p>
    </div>

    <h2>Overview</h2>
    <p>
      As part of my graduate research at CMU's Mechanical and AI Laboratory, I'm working on advancing robotic dexterity through diffusion policy-based control systems. The project focuses on enabling a multi-jointed robotic hand and arm to perform complex, dexterous manipulation tasks—bringing AI/ML techniques into real-world robotic applications.
    </p>

    <h2>VR Teleoperation System</h2>
    <p>
      I developed a teleoperation system leveraging VR motion tracking to enable intuitive, real-time robot control. This system is used to collect high-quality demonstration data for training diffusion policies. By streamlining the data collection pipeline, I reduced the time required to gather training data by half, significantly accelerating the research iteration cycle.
    </p>

    <h2>Diffusion Policy Research</h2>
    <p>
      The core of this project involves researching and implementing diffusion policy techniques for robotic control. Diffusion models, originally popularized in generative AI, are being adapted here to learn complex manipulation behaviors from demonstration data. The goal is to create a robust system capable of generalizing across a variety of dexterous tasks—moving closer to human-level hand manipulation in robots.
    </p>

    <h2>Impact & Future Directions</h2>
    <p>
      This research sits at the intersection of machine learning and physical robotics, directly aligned with my goal of bringing AI into the real world. The techniques developed here have potential applications in prosthetics, manufacturing automation, and assistive robotics—anywhere precise, adaptive hand manipulation is needed.
    </p>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
