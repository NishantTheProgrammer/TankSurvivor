
const express = require('express');


const app = express();

const IP = 'localhost';
const PORT = 3001;



const server = app.listen(PORT, IP, function() {
    console.log(`server running on port http://${IP}:${PORT}`);
});


const io = require('socket.io')(server);

let data = {};
let bgColors = {};

io.on('connection', function(socket) {
    console.log(socket.id);
    bgColors[socket.id] = '#' + ((1<<24)*Math.random() | 0).toString(16);

    socket.on('UPDATE_CORDS', function(cords) {
        data[socket.id] = {...cords, backgroundColor: bgColors[socket.id]};
        
        io.emit('CORDS', data);
    });
});