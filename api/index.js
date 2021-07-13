
const express = require('express');


const app = express();

const IP = 'localhost';
const PORT = 3001;



const server = app.listen(PORT, IP, function() {
    console.log(`server running on port http://${IP}:${PORT}`);
});


const io = require('socket.io')(server);


const ROTATION_DEGREE = 3;
const SPEED = 5;
let data = {};
let bgColors = {};
let tank = {
    angle: 0,
    x: 200,
    y: 200,
}
let cannon = {
    angle: 0
}

io.on('connection', function(socket) {
    console.log(socket.id);
    bgColors[socket.id] = '#' + ((1<<24)*Math.random() | 0).toString(16);

    socket.on('ROTATE_CANNON', function(mouseCords) {
        const adjacent =  tank.x - mouseCords.x;
        const opposite = tank.y - mouseCords.y;
        const radianDegree = Math.atan2(adjacent, opposite);
        io.emit('CANNON', {
            angle: (radianDegree * (180/ Math.PI) * -1) + 180
        });
    });

    socket.on('ROTATE_TANK', function(direction) {
        if(direction === 'left') {
            tank.angle = tank.angle - ROTATION_DEGREE;
        }
        else if(direction === 'right') {
            tank.angle = tank.angle + ROTATION_DEGREE;
        }
        io.emit('TANK', tank);
    });

    socket.on('GO_FORWARD', function() {
        tank.x += -Math.sin((Math.PI / 180) * (tank.angle)) * SPEED;
        tank.y += Math.cos((Math.PI / 180) * (tank.angle)) * SPEED;
        io.emit('TANK', tank);
    })
    
    socket.on('GO_BACK', function() {
        tank.x -= -Math.sin((Math.PI / 180) * (tank.angle)) * SPEED;
        tank.y -= Math.cos((Math.PI / 180) * (tank.angle)) * SPEED;
        io.emit('TANK', tank);
    });
});