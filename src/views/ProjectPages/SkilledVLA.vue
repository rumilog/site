<script setup>
import BackButton from '../../components/BackButton.vue';
import rolloutImg from '../../assets/ProjectImages/SkilledVLA_Rollout.jpg';
import tasksImg from '../../assets/ProjectImages/SkilledVLA_Tasks.jpg';
import teaserVideo from '../../assets/ProjectVideos/SkilledVLA_Teaser.mp4';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>SkilledVLA @ FieldAI</h1>
    <div class="paper-badge">PAPER UNDER REVIEW</div>

    <div class="video-container">
      <video
        controls
        autoplay
        muted
        loop
        playsinline
        class="project-video"
        :src="teaserVideo"
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    </div>

    <p>
      <strong>SkilledVLA: Integrating Classical Skills into Vision-Language-Action Models</strong>
    </p>

    <div class="project-info">
      <p><strong>Company:</strong> FieldAI</p>
      <p><strong>Robot:</strong> Unitree G1 Humanoid with Dex1 Grippers</p>
      <p><strong>Tools:</strong> Python, PyTorch, NVIDIA GR00T, SAM, cuRobo, MuJoCo</p>
    </div>

    <h2>Overview</h2>
    <p>
      SkilledVLA was my research project at <strong>FieldAI</strong>. Vision-language-action models (VLAs) can learn a wide range of tasks and generalize to new scenes and instructions, but because they learn control end to end, they give up decades of classical robotics and the speed, precision, and reliability that comes with it. SkilledVLA combines the two: a VLA that can call classical skills (grasping, path planning, handoffs, ballistic tossing) directly from its own action space.
    </p>

    <figure class="paper-figure">
      <img :src="rolloutImg" alt="SkilledVLA rollout compared to a vanilla VLA on the pong toss task" />
      <figcaption>
        Top: SkilledVLA runs the VLA, calls the classical handoff skill, then calls the toss skill and lands the ball in the bin. Bottom: a vanilla fine-tuned VLA (GR00T) picks up and hands over the ball but fails the toss.
      </figcaption>
    </figure>

    <h2>Method</h2>
    <p>
      SkilledVLA adds two small outputs per arm to a pretrained VLA (NVIDIA GR00T):
    </p>
    <ul>
      <li>A <strong>classifier head</strong> that decides, at every inference step, whether the VLA keeps control or a classical skill takes over.</li>
      <li>A set of <strong>target heads</strong> that tell the chosen skill what to do, such as which object to pick up, where to move, or where to throw.</li>
    </ul>
    <p>
      Because skill selection is part of the VLA's own action space, switching between learned and classical control happens at the policy's native inference rate, with no separate orchestrator model adding latency. Each skill checks its preconditions before it runs and aborts safely if it gets stuck, and skills can run per arm for bimanual behavior.
    </p>

    <figure class="paper-figure">
      <img :src="tasksImg" alt="Eight evaluation tasks across simulation and the real Unitree G1" />
      <figcaption>
        The eight evaluation tasks: six DexMimicGen simulation tasks across two embodiments, and two real-world tasks on the Unitree G1.
      </figcaption>
    </figure>

    <h2>Results</h2>
    <ul>
      <li><strong>Pong toss</strong> (pick up, hand off between arms, throw into a box): success rose from <strong>5% to 60%</strong> on the real G1.</li>
      <li><strong>Toast prepare</strong> (scoop bread with a spatula, open a toaster oven, load it, close the door): success rose from <strong>20% to 50%</strong>.</li>
      <li>In simulation, SkilledVLA averaged <strong>74%</strong> success across six tasks, beating a vanilla fine-tuned VLA (53%), a hierarchical VLA (44%), and a VLM orchestrator (39%). The biggest gains came on the tasks with the tightest tolerances.</li>
    </ul>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
