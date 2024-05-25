const express = require('express')
const http = require('http')
const app = express()

const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://192.168.1.3:5173"],
        methods: ["GET", "POST"],
        credentials: true,
    },
})

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected!`)

    // room

    // message

    // disconnect


})


server.listen(3000, '0.0.0.0', () => {
    console.log("SERVER IS RUNNING");
});