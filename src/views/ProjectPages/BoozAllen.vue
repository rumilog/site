<script setup>
  import BackButton from '../../components/BackButton.vue';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Booz Allen Hamilton Internship Project</h1>
    <!-- <img src="/images/booz-allen.jpg" alt="Booz Allen Hamilton Project Image" class="project-image" /> -->

    <h2>Overview</h2>
    <p>
      During my internship at <strong>Booz Allen Hamilton</strong>, I contributed to designing a cloud-based, secure, 
      and interactive mapping solution aimed at battle theater data-sharing.  
      Our solution implemented an <strong>Attribute-Based Access Control (ABAC)</strong> system to ensure secure data access while 
      enabling efficient collaboration across teams.
    </p>

    <h2>My Contributions</h2>
    <ul>
      <li><strong>Interactive Mapping Solution:</strong> Developed a collaborative platform for data visualization and geospatial intelligence.</li>
      <li><strong>Cloud-Based Security Architecture:</strong> Designed access control mechanisms using Attribute-Based Permission processes.</li>
      <li><strong>Full-Stack Development:</strong> Worked on both backend and frontend features using C++, Node.js, SQL, HTML, and CSS.</li>
      <li><strong>UI/UX Design:</strong> Focused on enhancing user experience, ensuring an intuitive interface for efficient data interaction.</li>
      <li><strong>Team Collaboration:</strong> Worked closely with other interns on a data-centric platform for real-time data sharing.</li>
      <li><strong>Final Presentation:</strong> Delivered a briefing to Booz Allen Hamilton leadership, demonstrating the platform’s potential 
      for future adaptation in secure mapping solutions.</li>
    </ul>

    <h2>Technologies & Tools</h2>
    <ul>
      <li><strong>Programming Languages:</strong> C++, JavaScript (Node.js), SQL</li>
      <li><strong>Frontend Development:</strong> HTML, CSS</li>
      <li><strong>Database Management:</strong> SQL for data storage and retrieval</li>
      <li><strong>Security & Access Control:</strong> Attribute-Based Access Control (ABAC) framework</li>
    </ul>

    <h2>Impact & Future Directions</h2>
    <p>
      This project showcased how <strong>secure, cloud-based mapping platforms</strong> can enhance operational effectiveness and data security. 
      The implementation of ABAC ensures controlled access to critical geospatial data, making it adaptable for defense, intelligence, and other 
      data-sensitive fields. 
    </p>
  </div>
</template>

<style scoped>
.project-details {
  text-align: left;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.project-image {
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  object-fit: cover;
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
</style>
