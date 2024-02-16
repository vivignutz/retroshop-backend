// server.js 
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDatabase from './database/dbConnect.js';
import routes from './routes/routes.js';
import path from 'path';

// Loading the environment
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for static archives
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    // Fallback route to return to index
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
};

// dbConnect and starting the server
connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server starts on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    });

// Centralized routes
app.use(express.json());
app.use(cors());
app.use('/', routes);