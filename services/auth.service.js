// auth.service.js

import { User } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

const loginService = (email) => User.findOne({email: email}).select("+password");

const generateToken = (id) => jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 43200 });

export { loginService, generateToken };