// cartRouter.js 

import express from "express";
import CartController from "../controllers/cartController.js";

const routes = express.Router();

routes.get("/carts", CartController.getAllCarts);
routes.get("/carts/:id", CartController.getCartById);
routes.post("/carts", CartController.createCart);
routes.put("/carts/:id", CartController.updateCart);
routes.delete("/carts/:id", CartController.deleteCart);

export default routes;
