import express from "express";
import connectToDatabase from "../config/dbConnect.js";
//import routes from "./Routes/productsRouter.js";

const app = express();
const PORT = 3000;
const connection = await connectToDatabase();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("I'm still here! :-D");
});

connection.on("error", (error) => {
    console.error("connection error",  error);
});

connection.once("open", () => {
    console.log("database connection successful");
});

export default app;
