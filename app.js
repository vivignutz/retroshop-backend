// app.js

import express from "express";
import cors from "cors";
import connectToDatabase from "./database/dbConnect.js";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import path from "path";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";
// import routes from "./routes/productsRouter.js";

// Loading the environment
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/user", userRouter);

// Middleware for serving static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
    
  // Fallback route to return to index
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

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
