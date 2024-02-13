// app.js 
import express from 'express';
import connectToDatabase from '../config/dbConnect';


const expressApp = express();
const PORT = process.env.PORT || 3000;

connectToDatabase()
    .then(() => {
        expressApp.listen(PORT, () => {
            console.log(`Server starts on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    });