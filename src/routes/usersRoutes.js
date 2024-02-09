// routes/usersRoutes.js
import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/users", UserController.listingUsers);
routes.get("/users/:id", UserController.listingUserById);
routes.post("/users", UserController.addingUser);
routes.put("/users:id", UserController.updateUser);
routes.delete("/users:id", UserController.deleteUser);

export default routes;
