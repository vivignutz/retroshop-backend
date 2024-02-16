// routes/usersRoutes.js
import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/users", UserController.getAllUsers);
routes.get("/user/:id", UserController.getUserById);
routes.post("/users", UserController.createUser); 
routes.put("/user/:id", UserController.updateUser);
routes.patch("/user/:id", UserController.updateUser);
routes.delete("/user/:id", UserController.deleteUser);

export default routes;
