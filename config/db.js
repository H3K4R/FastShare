const mongoose = require('mongoose')
require('dotenv').config();

function connectDB() {
    //Data connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true});
    const connection = mongoose.connection;


    connection.once('open', () => {
        console.log('DB connected.')
    }).catch(err => {
        console.log('connection failed');
    })
}

module.exports = connectDB;