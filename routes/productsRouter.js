// routes/productsRoutes.js

import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();

routes.get("/", ProductController.getAllProducts);
routes.get("/search", ProductController.listingProductsByCategory);
routes.get("/:id", ProductController.getProductById);
routes.post("/", ProductController.createProduct);
routes.put("/:id", ProductController.updateProduct);
routes.delete("/:id", ProductController.deleteProduct);

export default routes;
