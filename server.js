const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
//const MongoConnectionError = require('./errors/MongoConnectionError');

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables
dotenv.config();

// Middleware para JSON
app.use(bodyParser.json());

// Middleware para CORS
app.use(cors());

// MongoDB connection
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Error connecting to MongoDB');
  }
};

// Rotas da API
const productsRoutes = require('./src/routes/productsRoutes.js');
app.use('/', productsRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Untreated error:', err);
  res.status(500).json({ message: 'An error has occurred' });
});

// Server starts after successful connection to MongoDB
const startServer = async () => {
  try {
    await connectToMongo();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
};

startServer();