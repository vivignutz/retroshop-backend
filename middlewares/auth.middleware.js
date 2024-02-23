// auth.Middleware.js

import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(401)
        .json({ msg: "No auth token, access denied" });

    const verified = jwt.verify(token, "secretKey");
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied" });

    const user = await User.findById(verified.id);
    if (!user)
      return res
        .status(401)
        .json({ msg: "No user found with this token, authorization denied" });

    // since the token was made out of the document id 
    req.user = user.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default authMiddleware;
