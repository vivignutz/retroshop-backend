// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/api/products', productsController.getAllProducts);
router.get('/api/products/:id', productsController.getProductById);

module.exports = router;
