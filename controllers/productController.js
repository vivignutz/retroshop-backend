// controller/productController.js

// import { Router }  from "express";
import Product from "../models/ProductModel.js";
import cloudinary from "../database/cloudinaryConfig.js";

const ProductController = {
  // GET ALL
  getAllProducts: async (req, res) => {
    try {
      const productList = await Product.find({});
      res.status(200).json(productList); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failure`});
    }
  },

  // GET:ID 
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json(product); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product request failure`});
    }
  },

  // POST
  createProduct: async (req, res) => {
    try {
      const { product_name, slug, description, category, material, manufacture_year, condition, origin, price } = req.body;

      // Image from Cloudinary
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "oldshop"
      });
      
      const newProduct = await Product.create({ 
        product_name, 
        slug, 
        description, 
        category, 
        material, 
        manufacture_year, 
        condition, 
        origin, 
        price,
        image: result.secure_url
      });  

      res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product registration failure` });  
    }
  },

  // PUT
  updateProduct: async (req, res) => {
    try {
      const { product_name, slug, description, category, material, manufacture_year, condition, origin, price } = req.body;

      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "oldshop"
      });

      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { 
        product_name, 
        slug, 
        description, 
        category, 
        material, 
        manufacture_year, 
        condition, 
        origin, 
        price,
        image: result.secure_url
      }, { new: true });

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }

      res.status(200).json({ message: "Product updated successfully", product: updatedProduct }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product update failure`});
    }
  },

  // DELETE
  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json({ message: "Product deleted successfully" }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product delete failure`});
    }
  },

  // Listing products by category
  listingProductsByCategory: async (req, res) => {
    const category = req.query.category;
    try {
      const productsByCategory = await category.find({ category: category });
      res.status(200).json(productsByCategory);
    }
    catch (error) {
      res.status(500).json({ message: `${error.message} - product category failure`});
    }
  }
};

export default ProductController;
