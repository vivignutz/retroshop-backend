import express from "express";

const app = express();

// Middleware for JSON
// Middleware have access at the moment of the req to do some changes
app.use(express.json());

const products = [
    {
        id: 1,
        type: "t-shirt",
        tittle: "Masculine cotton big T-Shirt",
        color: "white",
        collection: "M"
    },
    {
        id: 2,
        type: "overall",
        tittle: "Winter overall",
        color: "navy",
        collection: "F"
    },
] 

function catchProduct(id) {
    return products.findIndex(product => {
        return product.id === Number(id);
    });
};

//rota base
app.get("/", (req, res) => {
    res.status(200).send("My e-commerce");
});

// GET products
app.get("/products", (req,res) => {
    res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
    const index = catchProduct(req.params.id);
    res.status(200).json(products[index]);
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
