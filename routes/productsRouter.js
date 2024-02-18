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


// import express from "express";
// import ProductController from "../controllers/productController.js";

// const routes = express.Router();

// routes.get("/products", ProductController.getAllProducts);
// routes.get("/products/search", ProductController.listingProductsByCategory);
// routes.get("/products/:id", ProductController.getProductById);
// routes.post("/products", ProductController.createProduct);
// routes.put("/products/:id", ProductController.updateProduct);
// routes.delete("/products/:id", ProductController.deleteProduct);

// export default routes;
