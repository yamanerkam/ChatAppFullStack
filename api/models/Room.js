const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name: String,
    ID: String,
    timestamp: { type: Date, default: Date.now }
})

const Room = mongoose.model('Room', roomSchema, 'rooms')

module.exports = Room;