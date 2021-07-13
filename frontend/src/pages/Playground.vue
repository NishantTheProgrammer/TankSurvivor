<template>
  <main @mousemove="mousemove">
    <!-- :style="{clipPath: `circle(${lightRadious}vh at ${x}px ${y}px)`}" -->
    <tank :tankData="tank" :cannonData="cannon" :width="300"></tank>
    <!-- <div
      class="light"
      v-for="(cord, socketId) in cords"
      :key="socketId"
      :style="{
        height: lightRadious * 1 + 'vh',
        width: lightRadious * 1 + 'vh',
        left: cord.x + 'px',
        top: cord.y + 'px',
        backgroundImage: `radial-gradient(#ffffff00, ${cord.backgroundColor})`,
      }"
    ></div>-->
    <h1 style="margin-top: 0">Tank Survivor</h1>
    <p>Comming soon...!</p>
  </main>
</template>


<script>
import io from "socket.io-client";
import Tank from "../components/Tank.vue";

export default {
  components: { Tank },
  data() {
    return {
      cords: {},
      lightRadious: 15,
      tank: {},
      cannon: {},
      socket: io("http://localhost:3001"),
      keyPresses: {},
      interval: null,
    };
  },
  watch: {
    keyPresses: {
      handler(val) {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
          Object.entries(val).forEach(([key, isPressed]) => {
            if (isPressed) {
              switch (key) {
                case "d":
                  this.moveRight();
                  break;
                case "a":
                  this.moveLeft();
                  break;
                case "w":
                  this.moveForward();
                  break;
                case "s":
                  this.moveBackword();
                  break;
              }
            }
          });
        }, 30);
      },
      deep: true,
    },
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      this.keyPresses[e.key] = true;
    });
    window.addEventListener("keyup", (e) => {
      this.keyPresses[e.key] = false;
    });
    this.socket.on("CANNON", (cannon) => {
      this.cannon = cannon;
    });
    this.socket.on("TANK", (tank) => {
      this.tank = tank;
    });
  },
  methods: {
    mousemove(e) {
      this.socket.emit("ROTATE_CANNON", {
        x: e.x,
        y: e.y,
      });
    },
    moveLeft() {
      this.socket.emit("ROTATE_TANK", "left");
    },
    moveRight() {
      this.socket.emit("ROTATE_TANK", "right");
    },
    moveForward() {
      this.socket.emit("GO_FORWARD");
    },
    moveBackword() {
      this.socket.emit("GO_BACK");
    },
  },
};
</script>


<style scoped>
main {
  height: 100vh;
  width: 100vw;
  background-image: url("~@/assets/images/desert.jpg");
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