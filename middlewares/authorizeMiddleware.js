// middleware/authorizeMiddleware.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 * Middleware function to authorize user's access to a resource
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @param {*} next - Express next middleware function
 */
const authorize = (req, res, next) => {
  try {
    // Check user's right to access
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({
        statusCode: 403,
        msg: "Unauthorized access",
      });
    }
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      msg: "Internal Server Error",
    });
  }
};

export default authorize;
