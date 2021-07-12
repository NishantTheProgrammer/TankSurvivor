<template>
    <div class="container">
        <img 
            src="../assets/images/tank.svg" 
            :style="{
                transform: `rotate(40deg)`
            }"
        />
        <img 
            src="../assets/images/cannon.svg" 
            :style="{
                transform: `rotate(50deg)`
            }"
        />
    </div>
</template>



<style scoped>
.container {
    position: absolute;
    left: 300px;
    top: 200px;
}
.container img {
    position: absolute;
    width: 300px;
}
</style>