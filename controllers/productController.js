// controller/productController.js
import Product from "../models/ProductModel.js"

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const productList = await Product.find({});
            res.status(200).json(productList); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure`});
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found.' });
            }
            res.status(200).json(product); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product request failure`});
        }
    },

    createProduct: async (req, res) => {
        try {
            const newProduct = await Product.create(req.body);  
            res.status(201).json({ message: "Product added successfully", product: newProduct });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product registration failure` });  
        }
    },

    updateProduct: async (req, res) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found.' });
            }
            res.status(200).json({ message: "Product updated successfully", product: updatedProduct }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product update failure`});
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id);
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Product not found.' });
            }
            res.status(200).json({ message: "Product deleted successfully" }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product delete failure`});
        }
    }
};

export default ProductController;
