// routes/productsRoutes.js
import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();

routes.get("/products", ProductController.getAllProducts);
routes.get("/products/:id", ProductController.getProductById);
routes.post("/products", ProductController.createProduct);
routes.put("/products/:id", ProductController.updateProduct);
routes.delete("/products/:id", ProductController.deleteProduct);

export default routes;
