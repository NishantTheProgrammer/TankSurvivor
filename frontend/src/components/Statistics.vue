<template>
  <div class="statistics">
    <div class="lifes">
      <font-awesome-icon icon="heart" :style="{color: statistics.lifes >= 1 ? 'red' : 'gray'}" />
      <font-awesome-icon icon="heart" :style="{color: statistics.lifes >= 2 ? 'red' : 'gray'}" />
      <font-awesome-icon icon="heart" :style="{color: statistics.lifes >= 3 ? 'red' : 'gray'}" />
      <font-awesome-icon icon="heart" :style="{color: statistics.lifes >= 4 ? 'red' : 'gray'}" />
    </div>
    <table style="width: 100%">
      <tr>
        <td width="20%">
          <font-awesome-icon icon="heartbeat" :style="{color: '#ca0000'}" />
        </td>
        <td width="80%">
          <progress :value="statistics.health" max="100" />
        </td>
      </tr>
      <tr>
        <td width="20%">
          <font-awesome-icon icon="gas-pump" :style="{color: '#ca0000'}" />
        </td>
        <td width="80%">
          <progress :value="statistics.fuel" max="100" />
        </td>
      </tr>
      <tr>
        <td>
          <font-awesome-icon icon="bomb" />
        </td>
        <td>
          <progress :value="statistics.bomb" max="8" />
        </td>
      </tr>
      <tr>
        <td>
          <font-awesome-icon icon="dot-circle" :style="{color: '#be761a'}" />
        </td>
        <td>
            <progress :value="statistics.bullet" max="50" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    props: ['statistics']
}
</script>

<style scoped>
.statistics {
  position: absolute;
  background-color: rgb(255, 255, 255);
  opacity: .8;
  top: 20px;
  left: 20px;
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  transition: opacity 1s ease;
  z-index: 999;
}
.statistics:hover {
  opacity: 0.3;
}
.lifes svg {
  padding: 5px;
  font-size: 20px;
}
</style>