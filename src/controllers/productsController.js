// controllers/products.js
const express = require('express');
const router = express.Router();


const getAllProducts = (req, res) => {
    // How to GET all products
    res.json({ message: 'All products' });
};

const getProductById = (req, res) => {
    // How to GET product by id
    const producID = req.params.id;
    res.json({ message: `Product details §{productID}` });
};

module.exports = {
    getAllProducts,
    getProductById,
};


router.get('/products', async (req, res) => {
    // Lógica para buscar produtos do banco de dados (por enquanto, retorne um array vazio)
    const products = [];
    res.json(products);
});

router.post('/products', async (req, res) => {
    // Lógica para criar um novo produto no banco de dados (por enquanto, retorne um objeto vazio)
    const product = {};
    res.json(product);
});
