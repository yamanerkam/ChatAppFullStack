const express = require('express')
const http = require('http')
const app = express()
const { Server } = require('socket.io')
const cors = require('cors')

const mongoose = require('mongoose')
const Message = require('./models/Message');
const Room = require('./models/Room')

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

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});



app.get('/rooms', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get('/messages/:id', async (req, res) => {
    const id = req.params.id

    try {
        const messages = await Message.find({ room: id });
        res.json(messages)
    }
    catch (err) {
        res.status(500).json({ error: err.message });

    }
})




io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected!`)

    socket.on('joinRoom', function (room) {
        socket.join(room)
        console.log(`User ${socket.id} connected to room ${room}!`)
    })

    socket.on('createRoom', async (room) => {
        const name = room.name
        const ID = room.ID
        const roomSaved = new Room({ name, ID })
        await roomSaved.save()
    })

    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room ${room}!`);
    });

    socket.on('sendMessage', async (body, room) => {

        const msg = body.msg
        const userUID = body.userUID
        const userName = body.userName
        const message = new Message({ msg, room, userUID, userName });
        await message.save();
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