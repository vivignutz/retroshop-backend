// app.js
import express from "express";
import connectToDatabase from "./database/dbConnect.js";
import dotenv from 'dotenv';
import routes from "./Routes/productsRouter.js";
import cors from "cors";
import path from 'path';

// Loading the environment
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware for serving static files
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    
    // Fallback route to return to index
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
};

// Connect to the database
const connection = await connectToDatabase();

// Routes
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

// Handle database connection errors
connection.on("error", (error) => {
    console.error("Database connection error:", error);
});

// Handle successful database connection
connection.once("open", () => {
    console.log("Database connection successful");
});

export default app;


// import express from "express";
// import connectToDatabase from "../config/dbConnect.js";
// //import routes from "./Routes/productsRouter.js";

// const app = express();
// const PORT = 3000;
// const connection = await connectToDatabase();

// app.use(cors());
// app.use(express.json());

// app.listen(PORT, () => {
//     console.log("I'm still here! :-D");
// });

// connection.on("error", (error) => {
//     console.error("connection error",  error);
// });

// connection.once("open", () => {
//     console.log("database connection successful");
// });

// export default app;
