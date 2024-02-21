// userRouter/userRouter.js

import express from "express";
import UserController from "../controllers/userController.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { User } from "../models/UserModel.js";

const userRouter = express.Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.post("/", UserController.createUser); 
userRouter.put("/:id", UserController.updateUser);
userRouter.patch("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);


// to get the users credentials
userRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json({
      username: user.username,
      id: user._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default userRouter;

