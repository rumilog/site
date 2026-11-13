<script setup>
import BackButton from '../../components/BackButton.vue';
import pipelineImg from '../../assets/ProjectImages/CADSmith_Pipeline.png';
import partsImg from '../../assets/ProjectImages/CADSmith_Parts.png';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>CADSmith</h1>
    <div class="paper-badge">PREPRINT · ARXIV 2026</div>

    <p>
      <strong>CADSmith: Multi-Agent CAD Generation with Programmatic Geometric Validation</strong><br />
      <span class="paper-authors">Jesse Barkley, <strong>Rumi Loghmani</strong>, Amir Barati Farimani</span>
    </p>

    <div class="paper-links">
      <a class="external-link" href="https://arxiv.org/abs/2603.26512" target="_blank" rel="noopener">Read the Paper (arXiv)</a>
    </div>

    <div class="project-info">
      <p><strong>Role:</strong> Second Author</p>
      <p><strong>Lab:</strong> Mechanical and AI Laboratory, Carnegie Mellon University</p>
      <p><strong>Tools:</strong> Python, CadQuery, OpenCASCADE, LLM Agents, RAG</p>
    </div>

    <h2>Overview</h2>
    <p>
      Large language models can write CAD code, but the parts often look right and still miss the requested dimensions. CADSmith is a multi-agent system that turns a plain-English description into <strong>CadQuery</strong> code and then checks the result against exact geometry rather than trusting how it looks.
    </p>

    <h2>How It Works</h2>
    <ul>
      <li>A <strong>Planner</strong> turns the prompt into a design plan with explicit dimensions, and a <strong>Coder</strong> writes the CadQuery script using retrieval over API documentation and known error patterns, with no fine-tuning.</li>
      <li>An <strong>inner loop</strong> runs the code in a sandbox and fixes execution errors.</li>
      <li>An <strong>outer loop</strong> checks the geometry using exact OpenCASCADE measurements (volume, bounding box, validity) together with a vision-language judge that inspects three rendered views, then refines the part until it passes.</li>
    </ul>

    <div class="paper-figure-row">
      <figure class="paper-figure">
        <img :src="pipelineImg" alt="CADSmith pipeline diagram" />
        <figcaption>
          The CADSmith pipeline: five agents and two nested correction loops.
        </figcaption>
      </figure>
      <figure class="paper-figure">
        <img :src="partsImg" alt="Benchmark parts across three difficulty tiers" />
        <figcaption>
          Benchmark parts across three difficulty tiers: basic primitives, engineering parts, and complex parts.
        </figcaption>
      </figure>
    </div>

    <h2>Results</h2>
    <p>On a 100-prompt benchmark, compared with a zero-shot baseline:</p>
    <ul>
      <li>Execution rate: <strong>95% → 100%</strong></li>
      <li>Median IoU: <strong>0.81 → 0.96</strong></li>
      <li>Mean Chamfer Distance: <strong>28.37 → 0.74</strong></li>
    </ul>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
