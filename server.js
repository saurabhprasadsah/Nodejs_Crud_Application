const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('welcome to my how can i help you! ')
})
app.get('/saurabh', function (req, res) {
    var details = {
        name: "Saurabh Kumar",
        email: "saurabhkumarsingh@gmail.com",
        age: 24,
        address: "A-79 sec-33 Noida ",
        hobbies: "Reading novels,books,coding"
    }
    res.send(details)

})

app.post('/details', function (req, res) {
    res.send("details data has been saved")
})


app.listen(3000, () => {
    console.log("server is listing into the hotel");
})














