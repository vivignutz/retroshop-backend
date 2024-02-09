// index.js
// entry point of all routes

import express from "express";
import products from "./productsRoutes.js";
import users from "./usersRoutes.js";

// Basic route to get all products
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("My e-commerce"));

    // Middleware for JSON
    app.use(express.json(), products, users);
};

export default routes;