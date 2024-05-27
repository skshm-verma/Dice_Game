const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.listen(process.env.PORT || 3000, function () {
    console.log("Server Initiated !!");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + "/" + "script.js");
});

app.use(express.static('public'));
app.use('/images', express.static('images')); 