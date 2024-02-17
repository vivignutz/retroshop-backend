// routes/routes.js
import express from "express";
import usersRouter from "./usersRouter.js";
import productsRouter from "./productsRouter.js";
import categoryRouter from "./categoryRouter.js";
import ordersRouter from "./orderRouter.js";
import paymentRouter from "./paymentRouter.js";
import cartRouter from "./cartRouter.js";
import reviewRouter from "./reviewRouter.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/categories", categoryRouter);
router.use("/orders", ordersRouter);
router.use("/payments", paymentRouter);
router.use("/cart", cartRouter);
router.use("/reviews", reviewRouter);

export default router;
