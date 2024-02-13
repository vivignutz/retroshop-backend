// orderRouter.js

import express from "express";
import OrderController from "../controllers/orderController.js";

const routes = express.Router();

routes.get("/orders", OrderController.getAllOrders);
routes.get("/orders/:id", OrderController.getOrderById);
routes.post("/orders", OrderController.createOrder);
routes.put("/orders/:id", OrderController.updateOrder);
routes.delete("/orders/:id", OrderController.deleteOrder);

export default routes;
