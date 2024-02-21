// auth.middleware.js

import jwt from "jsonwebtoken";
import { User } from "../models/UserModel";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

    const verified = jwt.verify(token, "secretKey");
    if (!verified) return res.status(401).json({ msg: "Token verification failed, authorization denied" });

    const user = await User.findById(verified.id);
    if (!user) return res.status(401).json({ msg: "No user found with this token, authorization denied" });

    req.user = user.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default authMiddleware;


// // middlewares/auth.js
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// /**
//  * Middleware function to verify user's token
//  * @param {*} req - Express request object
//  * @param {*} res - Express response object
//  * @param {*} next - Express next middleware function
//  */

// const verifyToken = (req, res, next) => {
//   const token = String(req.headers.authorization)
//     .replace(/^bearer|^jwt/i, "")
//     .replace(/^\s+|\s+$/gi, "");

//   try {
//     if (!token) {
//       return res.status(403).json({
//         statusCode: 403,
//         msg: "A token is required for authentication",
//       });
//     }

//     // Verifying the token
//     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
//     req.userData = decoded;
//   } catch (err) {
//     return res.status(401).json({
//       statusCode: 401,
//       msg: "Invalid Token",
//     });
//   }
//   return next();
// };

// export default verifyToken;
