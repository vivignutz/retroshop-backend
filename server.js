const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
//const MongoConnectionError = require('./errors/MongoConnectionError');

const app = express();
const port = process.env.PORT || 3000;

// Carrega variáveis de ambiente
dotenv.config();

// Middleware para JSON
app.use(bodyParser.json());

// Middleware para CORS
app.use(cors());

// MongoDB connection
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      reconnectTries: 5,
      reconnectInterval: 5000,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ message: 'Error connecting to MongoDB' });
    process.exit(1);
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
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
};
