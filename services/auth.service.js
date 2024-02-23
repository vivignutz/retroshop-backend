// auth.service.js

import { User } from "../models/UserModel.js";

const loginService = (email) => User.findOne({email: email}).select("+password");

export { loginService };