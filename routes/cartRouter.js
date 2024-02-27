// cartRouter.js 

import express from "express";
import CartController from "../controllers/cartController.js";

const routes = express.Router();

routes.get("/", CartController.getAllCarts);
routes.get("/:id", CartController.getCartById);
routes.post("/", CartController.createCart);
routes.put("/:id", CartController.updateCart);
routes.delete("/:id", CartController.deleteCart);

export default routes;
