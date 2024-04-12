// signupRouter.js

import express from "express";
import signup from "../controllers/authController.js";

const router = express.Router();

router.post("/", signup);

export default router;
