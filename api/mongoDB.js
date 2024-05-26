const mongoose = require('mongoose')
const uri = "mongodb+srv://erkamyaman35:42EZRJMfaBv8bOEa@chatapp.leqywva.mongodb.net/?retryWrites=true&w=majority&appName=chatApp";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})


module.exports = db;

//erkamyaman35
//kG1FEFl1RXi9idcN
//42EZRJMfaBv8bOEa