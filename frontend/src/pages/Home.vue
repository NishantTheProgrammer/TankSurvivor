<template>
    <div @mousemove="mousemove">
        <h1>Tank Survivor</h1>
        <p> Comming soon...!</p>
        <p><b>X</b>: {{x}}</p>
        <p><b>Y</b>: {{y}}</p>
    </div>
</template>


<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            x: 0,
            y: 0,
            socket : io('http://192.168.1.243:3001')
        }
    },
    mounted() {
        this.socket.on('CORDS', (data) => {
            this.x = data.x;
            this.y = data.y;
        });
    },
    methods: {
        mousemove(e) {
            this.socket.emit('UPDATE_CORDS', {
                x: e.x,
                y: e.y
            });
        }
    }
    
}
</script>