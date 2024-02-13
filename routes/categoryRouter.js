// categoryRouter.js

import express from "express";
import CategoryController from "../controllers/categoryController.js";

const routes = express.Router();

routes.get("/categories", CategoryController.getAllCategories);
routes.get("/categories/:id", CategoryController.getCategoryById);
routes.post("/categories", CategoryController.createCategory);
routes.put("/categories/:id", CategoryController.updateCategory);
routes.delete("/categories/:id", CategoryController.deleteCategory);

export default routes;
