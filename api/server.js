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

    socket.on('joinRoom', function (room) {
        socket.join(room)
        console.log(`User ${socket.id} connected to room ${room}!`)

    })

    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room ${room}!`);
    });

    socket.on('sendMessage', (body, room) => {
        console.log(body, room)
        socket.to(room).emit('sendMessage', body)
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected!')
    })


})


server.listen(3001, '0.0.0.0', () => {
    console.log("SERVER IS RUNNING");
});