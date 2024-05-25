const express = require('express')
const http = require('http')
const app = express()

const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {

})

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected!`)
})


server.listen(3000, '0.0.0.0', () => {
    console.log("SERVER IS RUNNING");
});