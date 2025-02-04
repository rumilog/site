<script setup>
  import BackButton from '../../components/BackButton.vue';
</script>

<template>
  <div class="project-details">
    <BackButton />
    <h1>Lateral Leap Game</h1>

    <p>
      <strong>Lateral Leap</strong> is an FPGA-based game. The game challenges players to control a ball, bouncing on three moving platforms while avoiding falling off the screen. The platforms spawn on the right side, move to the left, and respawn in a pseudo-random vertical position. Players use buttons to control the ball’s lateral movement, with the goal of surviving as long as possible. The game keeps track of the player's score, based on the time survived, displayed on the seven-segment display of the Nexys FPGA.
    </p>

    <h2>Key Features:</h2>
    <ul>
      <li><strong>Platform Movement:</strong> Platforms move horizontally and respawn with random vertical positions.</li>
      <li><strong>Ball Control:</strong> Players control the lateral movement of the ball using buttons, avoiding the ground.</li>
      <li><strong>Score Tracking:</strong> The score is based on survival time, displayed on a 7-segment display and increases as players survive longer.</li>
      <li><strong>Difficulty Scaling:</strong> The speed of the platforms increases every 10 seconds, adding challenge as players progress.</li>
    </ul>

    <h2>Technical Overview:</h2>
    <p>
      The core <strong>VHDL</strong> modules that drive the game include <strong>bat_n_ball.vhd</strong> (which handles the ball and platform movements), <strong>leddec16.vhd</strong> (managing the score display), and <strong>pong_2.vhd</strong> (the top-level module controlling game interactions). The platforms are randomly positioned each time they spawn, and the score increments every second based on the system's clock rate. Players interact with the game through the Nexys FPGA board using physical buttons for movement and difficulty adjustments.
    </p>

    <h2>Steps to Run the Game:</h2>
    <ul>
      <li>Create an RTL project in Vivado and import the required VHDL files.</li>
      <li>Run synthesis and implementation in Vivado, then generate the bitstream.</li>
      <li>Program the Nexys FPGA board and connect the display and buttons to start the game.</li>
    </ul>

    <h2>Challenges & Conclusion:</h2>
    <p>
      One of the main challenges in this project was implementing the <strong>score counter</strong>, which increments every second. We overcame this issue by creating a clock-rate-based counter and dealing with concurrency issues in the VHDL code. The final game offers a challenging and fun experience while also demonstrating our ability to work with FPGA-based design and VHDL programming.
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

p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}

strong {
  font-weight: bold;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  font-size: 1.1em;
  line-height: 1.5;
}
</style>
