// server.js 
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectToDatabase from './config/dbConnect.js';
import routes from './routes/routes.js'

// Loading the environment
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

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
    
    // "Hello World" Route for tests
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

// Centralized routes
app.use(express.json());
app.use(cors());
app.use('/', routes);