// app.js 
import express from 'express';
import mongoose from 'mongoose';
import app from "./src/app.js";


const expressApp = express();
const PORT = process.env.PORT || 3000;

expressApp.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}`);
});

const DB_CONNECTION_STRING = "mongodb+srv://admin:admin2469@cluster0.kpi7bko.mongodb.net/retroshop?retryWrites=true&w=majority";
mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;
