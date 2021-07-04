var pjson = require('./package.json');
const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors({
  origin: '*'
}));
const port = 3000

// app.get('/', (req, res) => {
//   res.json({
//     msg: "Hello world"
//   })
// })

const server = app.listen(port, () => {
  console.log(`${pjson.name} listening at http://localhost:${port}`)
})


const io = require('socket.io')(server);


io.on('connection', function(socket) {
  console.log(socket.id)
});