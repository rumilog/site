<script setup>
import BackButton from '../../components/BackButton.vue';
import workflowImg from '../../assets/ProjectImages/Jarvis_Workflow.jpg';
import archImg from '../../assets/ProjectImages/Jarvis_Architecture.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Curie's Jarvis</h1>
    <div class="paper-badge">PREPRINT · ARXIV 2026</div>

    <p>
      <strong>Curie's Jarvis: Autonomous Robotic Chemistry Experiments from Printed Protocols</strong><br />
      <span class="paper-authors"><strong>Rumi Loghmani*</strong>, Bozhang Song*, Victor Alvarado, Aliyah Redding, Amir Barati Farimani</span><br />
      <small>* Equal contribution</small>
    </p>

    <div class="paper-links">
      <a class="external-link" href="https://arxiv.org/abs/2611.13251" target="_blank" rel="noopener">Read the Paper (arXiv)</a>
    </div>

    <div class="project-info">
      <p><strong>Role:</strong> Co-First Author</p>
      <p><strong>Lab:</strong> Mechanical and AI Laboratory, Carnegie Mellon University</p>
      <p><strong>Hardware:</strong> Franka Panda, 4× RealSense Cameras</p>
      <p><strong>Tools:</strong> Python, VLMs/LLMs, SAM 3, Point Clouds</p>
    </div>

    <h2>Overview</h2>
    <p>
      A student running a bench experiment reads a printed instruction sheet, finds the containers wherever they happen to be, tells identical cups apart by their handwritten labels, and checks again before each step. Lab automation usually works the other way around: protocols are written as scripts and containers sit at fixed, pre-measured positions. Curie's Jarvis lets a robot arm run a chemistry experiment the way a person does, on an ordinary bench set up for humans.
    </p>

    <figure class="paper-figure">
      <img :src="workflowImg" alt="Curie's Jarvis workflow: read and plan, identify the vessel, 3D point cloud reconstruction, select and execute robot skills" />
      <figcaption>
        Curie's Jarvis workflow. (A) A vision-language model reads a photo of the protocol and a language model orders the subtasks. (B) Votes across four camera views identify vessels from their paper labels. (C) A 3D point cloud of the bench locates the target vessel. (D) The language model selects robot skills and their parameters.
      </figcaption>
    </figure>

    <h2>How It Works</h2>
    <ul>
      <li><strong>Reads the protocol from a photo.</strong> A vision-language model parses a photo of the printed instruction sheet, and a planner turns it into an ordered list of subtasks that it revises when a step fails.</li>
      <li><strong>No fixed positions or markers.</strong> Containers can be anywhere on the bench. SAM 3 segments them in four camera views, and multi-view geometry estimates where each one is.</li>
      <li><strong>Tells identical containers apart.</strong> Identical cups are distinguished only by their printed or handwritten labels, which a vision-language model reads in every view before the views vote.</li>
      <li><strong>Re-checks before every step.</strong> The target container is relocated before each action, so the robot still finds it if someone moves it mid-experiment.</li>
      <li><strong>Adapts each skill.</strong> The language model selects from a fixed set of skills (pick up, pour, scoop, dump, stir, place) and sets their parameters, such as pour angle and speed, for each item.</li>
    </ul>

    <figure class="paper-figure">
      <img :src="archImg" alt="Curie's Jarvis system architecture" />
      <figcaption>
        System architecture. Once per run, the instruction parser reads the protocol photo, the scene agent names the objects on the bench, and the planner orders the subtasks. For each subtask, the skill-call agent calls a skill and the perception stack locates the target.
      </figcaption>
    </figure>

    <h2>Results</h2>
    <p>
      On a Franka Panda arm, Curie's Jarvis completed experiments from a children's chemistry kit with no human intervention:
    </p>
    <ul>
      <li><strong>5 of 5</strong> runs of the Magic Beaker protocol</li>
      <li><strong>4 of 5</strong> runs of the Jellyfish protocol</li>
      <li><strong>160 of 160</strong> label-reading locates identified the correct container</li>
    </ul>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
