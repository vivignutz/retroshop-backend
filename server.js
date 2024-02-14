// app.js 
import dotenv from 'dotenv';
//dotenv.config({ path: __dirname + '/.env' });
import express from 'express';
import mongoose from 'mongoose';
import connectToDatabase from './config/dbConnect.js';
import cors from 'cors';
// Routes
import usersRouter from './routes/usersRouter.js';
import productsRouter from './routes/productsRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import ordersRouter from './routes/orderRouter.js';
import paymentRouter from './routes/paymentRouter.js';
import cartRouter from './routes/cartRouter.js';
import reviewRouter from './routes/reviewRouter.js';
//import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';

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

global.mongoose = mongoose;

// Use middleware to call json, cors
app.use(express.json());
app.use(cors());
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/cart', cartRouter);
app.use('/api/reviews', reviewRouter);
