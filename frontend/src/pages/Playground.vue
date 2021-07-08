<template>
  <main @mousemove="mousemove" 
    
  >
  <!-- :style="{clipPath: `circle(${lightRadious}vh at ${x}px ${y}px)`}" -->
    <div
      class="light"
      v-for="(cord, socketId) in cords" :key="socketId"
      :style="{
                height: (lightRadious * 1) + 'vh',
                width: (lightRadious * 1) + 'vh',
                left: cord.x + 'px',
                top: cord.y + 'px',
                backgroundImage: `radial-gradient(#ffffff00, ${cord.backgroundColor})`
            }"
    ></div>
    <h1 style="margin-top: 0;">Tank Survivor</h1>
    <p>Comming soon...!</p>
    <p>
      <b>X</b>
      : {{x}}
    </p>
    <p>
      <b>Y</b>
      : {{y}}
    </p>
  </main>
</template>


<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      cords: {},
      lightRadious: 15,
      socket: io("http://localhost:3001"),
    };
  },
  mounted() {
    this.socket.on("CORDS", (cords) => {
      console.log(cords);
      this.cords = cords;
    });
  },
  methods: {
    mousemove(e) {
      this.socket.emit("UPDATE_CORDS", {
        x: e.x,
        y: e.y,
      });
    },
  },
};
</script>


<style scoped>
main {
  height: 100vh;
  width: 100vw;
  background-image: url("~@/assets/images/grass.jpeg");
  
}
.light {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}
</style>
<style>
body {
  overflow: hidden;
}
</style>