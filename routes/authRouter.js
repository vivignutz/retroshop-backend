// authRoutes.js

import express from "express";
import bcryptjs from "bcryptjs";
import { User } from "../model/UserModel.js";
import jwt from "jsonwebtoken";
import authMiddleware from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

// Signup Route
authRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmPassword, username, firstName, lastName, address } = req.body;
    if (!email || !password || !username || !confirmPassword || !firstName || !lastName || !address) {
      return res.status(400).json({ msg: "Please fill in all required fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters" });
    }
    if (confirmPassword !== password) {
      return res.status(400).json({ msg: "Meh... Passwords do not match :-( " });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "A user with the same email already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 8);
    const newUser = new User({ 
      email, 
      password: hashedPassword, 
      username, 
      firstName, 
      lastName, 
      address 
    });
    
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Route
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all required fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Checking if token is valid
authRouter.post("/tokenIsValid", authMiddleware, async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, "secretKey");
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default authRouter;
