
const express = require('express');


const app = express();

const IP = '192.168.1.243';
const PORT = 3001;



const server = app.listen(PORT, IP, function() {
    console.log(`server running on port http://${IP}:${PORT}`);
});


const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)

    socket.on('UPDATE_CORDS', function(data) {
        io.emit('CORDS', data)
    });
});