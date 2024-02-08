import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import productModel from "./models/productModel.js";
import product from "./models/productModel.js";


const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error("connection error",  error);
});

connection.once("open", () => {
    console.log("database connection successful");
});

const app = express();

// Middleware for JSON
// Middleware have access at the moment of the req to do some changes
app.use(express.json());

// Basic route to get all products
app.get("/", async (req, res) => {
    res.status(200).send("My e-commerce!!");
});

// GET products
app.get("/products", async (req, res) => {
    const productsList = await product.find({});
    res.status(200).json(productsList);
});

app.get("/products/:id", (req, res) => {
    const index = catchProduct(req.params.id);
    res.status(200).json(product[index]);
});

// POST (create)
app.post("/products", (req,res) => {
    products.push(req.body); //body sao os dados que a gente envia para criar
    res.status(201).send("Product added successfully");
});

// PUT (change)
app.put("/products/:id", (req, res) => {
    const index = catchProduct(req.params.id);
    products[index].tittle = req.body.tittle;
    res.status(200).json(products);
});

// DELETE
app.delete('/products/:id', (req, res) => {
    const index = catchProduct(req.params.id);
    products.splice(index, 1);
    res.status(200).send('Product deleted successfully.');
});


export default app;
