<script setup>
import BackButton from '../../components/BackButton.vue';
import leapVideo from '../../assets/ProjectVideos/LEAP.mov';
import archImg from '../../assets/ProjectImages/BetaGrasp_Architecture.png';
import testbedImg from '../../assets/ProjectImages/BetaGrasp_Testbed.jpg';
import modesImg from '../../assets/ProjectImages/BetaGrasp_GraspModes.png';
import slipImg from '../../assets/ProjectImages/BetaGrasp_SlipForce.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>BetaGrasp</h1>
    <div class="paper-badge">PREPRINT · ARXIV 2026</div>

    <p>
      <strong>Grasp-Taxonomy Conditioning as a Mode Switch for Dexterous Grasping of Climbing Holds</strong><br />
      <span class="paper-authors"><strong>Rumi Loghmani</strong>, Abraham George, Amir Barati Farimani</span>
    </p>

    <div class="paper-links">
      <a class="external-link" href="https://arxiv.org/abs/2611.12017" target="_blank" rel="noopener">Read the Paper (arXiv)</a>
    </div>

    <div class="project-info">
      <p><strong>Role:</strong> First Author</p>
      <p><strong>Lab:</strong> Mechanical and AI Laboratory, Carnegie Mellon University</p>
      <p><strong>Hardware:</strong> Franka Panda + 16-DoF LEAP Hand</p>
      <p><strong>Tools:</strong> Python, PyTorch, 3D Diffusion Policy, VR Hand Tracking</p>
    </div>

    <h2>VR Teleoperation</h2>
    <p>
      I built a VR teleoperation system that maps my hand motion, tracked with a Meta Quest, onto the LEAP Hand and Franka arm in real time. I used it to collect every training demonstration for BetaGrasp: 200 teleoperated grasps across four kinds of climbing hold.
    </p>

    <div class="video-container">
      <video
        controls
        class="project-video"
        :src="leapVideo"
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    </div>

    <h2>Overview</h2>
    <p>
      Climbers grip a hold differently depending on its shape: you crimp a thin edge, palm a sloper, pinch a narrow fin, and wrap your fingers into a jug. A single learned policy trained on all of these grasps tends to blur them together and fall back on one grasp for everything. BetaGrasp fixes this by giving the policy a one-word grasp label (<strong>crimp, sloper, pinch, or jug</strong>) alongside its observations. The label acts as a mode switch that selects which grasp the robot performs.
    </p>

    <figure class="paper-figure">
      <img :src="archImg" alt="BetaGrasp architecture diagram" />
      <figcaption>
        BetaGrasp architecture. The point cloud, joint state, and grasp-type label are each encoded and fused into a single vector that conditions a 1D temporal U-Net diffusion denoiser.
      </figcaption>
    </figure>

    <h2>Method</h2>
    <p>
      BetaGrasp builds on 3D Diffusion Policy (DP3). A PointNet-style encoder embeds a fused point cloud from four RealSense cameras, an MLP encodes the arm and hand joint state, and a learned embedding encodes the grasp-type label. These features condition a diffusion model that outputs chunks of joint-space actions for the arm and the 16-DoF hand at 10 Hz. The baseline is the same network with the grasp-label branch removed.
    </p>

    <h2>Spring-Testbed Benchmark</h2>
    <p>
      To measure grasp strength rather than just pass/fail, I built a benchmark that pulls on the hold while the robot grips it. The hold is mounted on a sliding deck held back by two springs. When the robot pulls, a ratchet pin records how far the deck traveled before the grasp slipped, which converts directly to slip force in newtons. The four climbing holds are 3D printed.
    </p>

    <figure class="paper-figure">
      <img :src="testbedImg" alt="Spring testbed with LEAP Hand and the four 3D-printed climbing holds" />
      <figcaption>
        (a) The LEAP Hand gripping a jug hold on the testbed. (b) Top-down view of the spring and ratchet mechanism. (c) The four holds: pinch, jug, crimp, and sloper.
      </figcaption>
    </figure>

    <h2>Results</h2>
    <ul>
      <li>In simulation, BetaGrasp performed the requested grasp type <strong>94%</strong> of the time, versus <strong>25%</strong> (chance) for the unlabeled baseline.</li>
      <li>Across <strong>80 paired hardware trials</strong>, average slip force rose from <strong>9.6 N to 14.3 N</strong>.</li>
      <li>Grasps that slipped off the hold completely dropped from <strong>44% to 10%</strong>.</li>
    </ul>

    <div class="paper-figure-row">
      <figure class="paper-figure">
        <img :src="modesImg" alt="PCA plot of final hand poses by grasp type" />
        <figcaption>
          Final hand poses projected onto two principal components. BetaGrasp (orange) separates cleanly by grasp type; the baseline (gray outline) collapses onto one grasp.
        </figcaption>
      </figure>
      <figure class="paper-figure">
        <img :src="slipImg" alt="Box plot of slip force per hold for DP3 and BetaGrasp" />
        <figcaption>
          Slip force per hold on the spring testbed, 20 trials per policy per hold.
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
