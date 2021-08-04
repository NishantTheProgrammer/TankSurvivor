<template>
    <div class="container" :style="{
        left: `${tankData.x - (width / 2)}px`,
        top: `${tankData.y - (width / 2)}px`
    }">
        <img 
            src="../assets/images/tank.svg" 
            :style="{
                transform: `rotate(${tankData.angle}deg)`,
                width: width + 'px'
            }"
        />
        <img 
            src="../assets/images/cannon.svg" 
            :style="{
                transform: `rotate(${cannonData.angle}deg)`,
                width: width + 'px'
            }"
        />
    </div>
</template>

<script>
export default {
    props: ['tankData', 'cannonData', 'width']
}
</script>


<style scoped>
.container {
    position: absolute;
    background: yellow;
    z-index: 100;
}
.container img {
    position: absolute;
}
</style>