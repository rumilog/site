<script setup>
import BackButton from '../../components/BackButton.vue';
import driveFreeVideo from '../../assets/ProjectVideos/IMG_8731 (2).MOV';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Drive-Free Hand</h1>
    
    <!-- Video Player -->
    <div class="video-container">
      <video 
        controls 
        class="project-video"
        :src="driveFreeVideo"
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="project-info">
      <p><strong>Role:</strong> Lead Engineer, Myoelectric Integration</p>
      <p><strong>Tools:</strong> Arduino, Adafruit Motor Shield, MyoWare 2.0 Sensor, Fusion 360, 3D Printing</p>
    </div>
    <p>
      Myoelectric-controlled prosthetic prototype using real-time EMG signal processing. Drive-Free is a low-cost, Arduino-based prosthetic hand designed for driving. As part of a five-person engineering team at Stevens, I led the development of the control system and muscle-signal interface. The goal was to create an intuitive, low-cost assistive device that could restore hand functionality for individuals with limb differences—specifically enabling safe vehicle operation.
    </p>

    <h2>Technical Implementation</h2>
    <p>
      The system uses the MyoWare 2.0 EMG sensor to capture surface muscle signals from the forearm. I developed real-time signal processing logic on the Arduino Uno, comparing ENV signal values to a calibrated REF baseline to detect muscle activation. These signals control four individual DC motors via the Adafruit Motor Shield v2, each driving a finger through a 3D-printed pulley and fishing wire system designed to mimic tendon movement.
    </p>

    <h2>Development Process</h2>
    <p>
      Our team collaborated on the mechanical structure, enclosure design in Fusion 360, and iterative hardware testing. I focused on tuning motor response, reducing EMG signal noise, and creating a modular control scheme for testing different hand gestures. The prototype emphasizes affordability, modularity, and manufacturability—key priorities for future deployment in underserved communities.
    </p>

    <h2>Future Impact</h2>
    <p>
      This work lays the groundwork for future implementation of proportional control, multi-channel sensing, and closed-loop feedback, bringing us closer to accessible, user-driven prosthetic technology.
    </p>
  </div>
</template>

<style scoped>
/* Page-specific styles only - global styles handle the rest */
</style>
