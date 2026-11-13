<script setup>
import BackButton from '../../components/BackButton.vue';
import overviewImg from '../../assets/ProjectImages/RocketSmith_Overview.jpg';
import schematicsImg from '../../assets/ProjectImages/RocketSmith_Schematics.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>RocketSmith</h1>
    <div class="paper-badge">PREPRINT · ARXIV 2026</div>

    <p>
      <strong>RocketSmith: Agentic Additive Manufacturing of High-Powered Rockets</strong><br />
      <span class="paper-authors">Peter Pak, Jesse Barkley, <strong>Rumi Loghmani</strong>, Derek Baich, Ananya Pamal, Amir Barati Farimani</span>
    </p>

    <div class="paper-links">
      <a class="external-link" href="https://arxiv.org/abs/2606.00097" target="_blank" rel="noopener">Read the Paper (arXiv)</a>
    </div>

    <div class="project-info">
      <p><strong>Lab:</strong> Mechanical and AI Laboratory, Carnegie Mellon University</p>
      <p><strong>Tools:</strong> Claude Code, OpenRocket, CADSmith, PrusaSlicer, FDM 3D Printing</p>
    </div>

    <h2>Overview</h2>
    <p>
      RocketSmith is an agentic system that automates designing high-powered rockets for 3D printing. A large language model orchestrates the engineering tools: it builds an OpenRocket component tree from the user's constraints (motor, flight characteristics), runs flight simulations to check stability, generates parametric CAD for each airframe part with CADSmith, and uses slicer weight estimates to refine the center of gravity before anything is printed. It supports both fully automatic optimization and a human-in-the-loop workflow.
    </p>

    <figure class="paper-figure">
      <img :src="overviewImg" alt="RocketSmith overview: agentic system and validation through manufacturing, launch, and recovery" />
      <figcaption>
        RocketSmith as a Claude Code plugin. The agentic system designs the component tree, simulates flight, generates parts, and assembles the rocket; each design is then manufactured, launched, and recovered.
      </figcaption>
    </figure>

    <h2>My Rocket: High Power 2</h2>
    <p>
      Four high-power rockets were designed with RocketSmith, printed on FDM printers, and flight-tested at a launch event. I designed and built <strong>High Power 2</strong>, a Level 1 rocket built to be printed on consumer Creality Ender 5 Plus and Ender 3 printers. To fit the Ender 5 Plus print bed, its recovery bay uses a separate middle airframe section.
    </p>

    <figure class="paper-figure">
      <img :src="schematicsImg" alt="Design schematics for the four high-power rockets" />
      <figcaption>
        Design schematics for High Power 1–4, with center of pressure and center of gravity marked. High Power 2 (second from left) is my design.
      </figcaption>
    </figure>

    <h2>Results</h2>
    <ul>
      <li>All <strong>four rockets</strong> launched stably.</li>
      <li>Two were recovered in reflyable condition.</li>
      <li>Altimeter data showed the rockets reached about <strong>80% of the apogee</strong> RocketSmith predicted, showing close agreement between simulation and flight.</li>
    </ul>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
