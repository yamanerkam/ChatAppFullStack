const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    msg: String,
    room: String,
    userUID: String,
    userName: String,
    timestamp: { type: Date, default: Date.now }

})

const Message = mongoose.model('Message', messageSchema, 'messagesSocket.io',)

module.exports = Message;