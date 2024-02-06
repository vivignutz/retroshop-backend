const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/welcome', (req, res) => {
    res.send('Welcome to my website!');
});

// Middleware para JSON
app.use(bodyParser.json());

// Middleware para CORS
app.use(cors());

// MongoDB connection + error message
// in case server doesn't connetc
mongoose.connect('mongodb://localhost:27017/ecommerce');
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Finish Node.js process with an error code
    });


// API routes
const productsRoutes = require('./routes/prodctsRoutes');
app.use('/', productsRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
