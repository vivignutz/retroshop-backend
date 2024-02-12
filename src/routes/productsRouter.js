// routes/productsRoutes.js
import express from "express";


import ProductController from "../controllers/productController.js";

const routes = express.Router();

routes.get("/products", ProductController.listingProducts);
routes.get("/products/:id", ProductController.listingProductById);
routes.post("/products", ProductController.addingProduct);
routes.put("/products/:id", ProductController.updateProduct);
routes.delete("/products/:id", ProductController.deleteProduct);

export default routes;
