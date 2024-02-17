// reviewController.js

import Review from "../models/ReviewModel.js";

const ReviewController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failure`});
    }
  },

  getReviewById: async (req, res) => {
    try {
      const id = req.params.id;
      const review = await Review.findById(id);
      if (!review) {
        return res.status(404).json({ message: "Review not found." });
      }
      res.status(200).json(review); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - review request failure`});
    }
  },

  createReview: async (req, res) => {
    try {
      const newReview = await Review.create(req.body);  
      res.status(201).json({ message: "Review added successfully", review: newReview });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - review creation failure` });  
    }
  },

  updateReview: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedReview) {
        return res.status(404).json({ message: "Review not found." });
      }
      res.status(200).json({ message: "Review updated successfully", review: updatedReview }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - review update failure`});
    }
  },

  deleteReview: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedReview = await Review.findByIdAndDelete(id);
      if (!deletedReview) {
        return res.status(404).json({ message: "Review not found." });
      }
      res.status(200).json({ message: "Review deleted successfully" }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - review deletion failure`});
    }
  }
};

export default ReviewController;
