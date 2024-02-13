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
            const id = req.params.id;
            const product = await Product.findById(id);
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
            const id = req.params.id;
            const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
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
            const id = req.params.id;
            const deletedProduct = await Product.findByIdAndDelete(id);
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

/*
class ProductController {

    static async listingProducts (req, res) {
        try {
            const productsList = await product.find({});
            res.status(200).json(productsList); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure`});
        }
    };

    // GET products
    static async listingProductById (req, res) {
        try {
            const id = req.params.id;
            const productFound = await product.findById({id});
            res.status(200).json(productFound); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product request failure`});
        }
    };

    // POST (create)
    static async addingProduct (req, res) {
        try {
            const newProduct = await product.create(req.body);  
            res.status(201).json({ message: "Product added successfully", product: newProduct });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product registration failure` });  
        }
    }

    // PUT (update)
    static async updateProduct (req, res) {
        try {
            const id = req.params.id;
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Product updated successfully" }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product update failure`});
        }
    };

    // DELETE
    static async deleteProduct (req, res) {
        try {
            const id = req.params.id;
            await product.findByIdAndDelete(id);
            res.status(200).json({ message: "Product deleted successfully" }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - product delete failure`});
        }
    };

};

export default ProductController;
*/