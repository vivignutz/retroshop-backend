// reviewRouter.js

import express from "express";
import ReviewController from "../controllers/reviewController.js";

const routes = express.Router();

routes.get("/", ReviewController.getAllReviews);
routes.get("/:id", ReviewController.getReviewById);
routes.post("/", ReviewController.createReview);
routes.put("/:id", ReviewController.updateReview);
routes.delete("/:id", ReviewController.deleteReview);

export default routes;
