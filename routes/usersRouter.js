// routes/usersRoutes.js
import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/users", UserController.getAllUsers);
routes.get("/users/:id", UserController.getUserById);
routes.post("/users", UserController.createUser); 
routes.put("/users/:id", UserController.updateUser);
routes.patch("/users/:id", UserController.updateUser);
routes.delete("/users/:id", UserController.deleteUser);

export default routes;
