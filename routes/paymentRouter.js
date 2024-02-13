// paymentRouter.js

import express from "express";
import PaymentController from "../controllers/paymentController.js";

const routes = express.Router();

routes.get("/payments", PaymentController.getAllPayments);
routes.post("/payments", PaymentController.createPayment);
routes.put("/payments/:id", PaymentController.updatePayment);
routes.delete("/payments/:id", PaymentController.deletePayment);

export default routes;
