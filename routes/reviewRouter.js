// reviewRouter.js

import express from "express";
import ReviewController from "../controllers/reviewController.js";

const routes = express.Router();

routes.get("/reviews", ReviewController.getAllReviews);
routes.get("/reviews/:id", ReviewController.getReviewById);
routes.post("/reviews", ReviewController.createReview);
routes.put("/reviews/:id", ReviewController.updateReview);
routes.delete("/reviews/:id", ReviewController.deleteReview);

export default routes;
