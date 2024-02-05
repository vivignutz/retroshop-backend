const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Port configuration
const port = 3000;

// Middleware para JSON
app.use(bodyParser.json());

// Middleware para CORS
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API routes (a serem implementadas)

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});



//const server = http.createServer((req, res) => {
//    res.statusCode = 200;
//    res.setHeader("Content-Type", "text/plain");
//    res.end("Vivi Gnutzmann :D \n");
//});

//server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//});
