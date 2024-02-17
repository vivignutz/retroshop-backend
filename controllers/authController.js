
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User"; 

dotenv.config();

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Search user by email in db
    const user = await User.findOne({ email });

    // If user does not exist, return an error
    if (!user) {
      return res.status(401).json({
        statusCode: 401,
        msg: "Invalid Credentials",
      });
    }

    // Check if password matches using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If not match, return an error
    if (!passwordMatch) {
      return res.status(401).json({
        statusCode: 401,
        msg: "Invalid Credentials",
      });
    }

    // Generate a JWT token
    const token = jwt.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });

    // Return the token in the response body
    return res.status(200).json({
      statusCode: 200,
      msg: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      msg: "Internal Server Error",
    });
  }
};

export default login;

// const EMAIL = process.env.EMAIL;
// const PASSWORD = process.env.PASSWORD;


// /* If the email and password are correct, then return a token. */
// const login = (req, res) => {
//   /* Destructuring the email and password from the request body. */
//   const { email, password } = req.body;

//   if (email === EMAIL && password === PASSWORD) {
//     /* Creating a token. */
//     const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
//       expiresIn: "2h",
//     });
//     return res.status(200).json({
//       statusCode: 200,
//       msg: "Login successful",
//       token,
//     });
//   }
//   return res.status(401).json({
//     statusCode: 401,
//     msg: "Invalid Credentials",
//   });
// };

// export default login;
