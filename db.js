const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://kumarsaurabh2910:ygN11p9rXG9wu6EP@testprodb.cf1j1nf.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

const db = mongoose.connection
