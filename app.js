// app.js

import express from "express";
import cors from "cors";
import connectToDatabase from "./database/dbConnect.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productsRouter.js";
import cartRouter from "./routes/cartRouter.js";
import routes from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/", routes);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/carts", cartRouter);


// Middleware for serving static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
    
  // Fallback route to return to index
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Async function to start the server and connect to the database
const startServer = async () => {
  try {
    // Connect to the database
    const connection = await connectToDatabase();

    // Start the server
    app.listen(PORT, () => {
      console.log("Voilà! Server is running on port " + PORT);
    });

    // Handling successful database connection
    connection.once("open", () => {
      console.log("Database connection successful");
    });

    // Handling database connection errors
    connection.on("error", (error) => {
      console.error("Database connection error:", error);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

// Call the function to start the server
startServer();

export default app;
