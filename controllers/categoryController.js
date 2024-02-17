// categoryController.js

import Category from "../models/CategoryModel.js";

const CategoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }
      res.json(category);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found." });
      }
      res.json(updatedCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCategory = await Category.findByIdAndDelete(id);
      if (!deletedCategory) {
        return res.status(404).json({ message: "Category not found." });
      }
      res.json({ message: "Category deleted successfully." });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default CategoryController;

