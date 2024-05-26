const express = require('express')
const http = require('http')
const app = express()
const { Server } = require('socket.io')
const cors = require('cors')

const mongoose = require('mongoose')
const Message = require('./models/Message'); // Import the Message model

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://192.168.1.3:5173"],
        methods: ["GET", "POST"],
        credentials: true,
    },
})


const uri = "mongodb+srv://erkamyaman35:42EZRJMfaBv8bOEa@chatapp.leqywva.mongodb.net/chatapp?retryWrites=true&w=majority&appName=chatApp";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});



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

    socket.on('sendMessage', async (body, room) => {

        const msg = body.body
        const userUID = body.userUID
        const userName = body.userName
        const message = new Message({ msg, room, userUID, userName });
        await message.save(); // Save the message to MongoDB
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