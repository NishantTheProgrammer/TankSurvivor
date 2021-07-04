<template>
    <div>
        <h1>Tank Survivor</h1>
        <p>Comming soon...!</p>
    </div>
</template>


<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            socket : io('http://localhost:3001')
        }
    },
    mounted() {
        console.log(this.socket);
    },
    
}
</script>