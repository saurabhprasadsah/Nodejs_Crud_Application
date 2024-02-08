
//db connection of mongoose

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://kumarsaurabh2910:ygN11p9rXG9wu6EP@testprodb.cf1j1nf.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('connected to Mongodb Server');
})

db.on('error', (err)=>{
    console.log('Mongodb connection error', err);
})

db.on('disconnected', ()=>{
    console.log('Mongodb disconnected');
})

// Exports the database connnection
module.exports = db

