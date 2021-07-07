<template>
  <main @mousemove="mousemove" 
    :style="{clipPath: `circle(${lightRadious}vh at ${x}px ${y}px)`}"
  >
    <div
      class="light"
      :style="{
                height: (lightRadious * 2) + 'vh',
                width: (lightRadious * 2) + 'vh',
                left: x + 'px',
                top: y + 'px',
                backgroundImage: `radial-gradient(#ffffff00, black)`
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
      x: 0,
      y: 0,
      lightRadious: 15,
      socket: io("http://192.168.1.243:3001"),
    };
  },
  mounted() {
    this.socket.on("CORDS", (data) => {
      this.x = data.x;
      this.y = data.y;
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
    transform: translate(-50%, -50%);
}
</style>