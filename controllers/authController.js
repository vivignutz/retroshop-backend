
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.service.js";

dotenv.config();

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user details by email
    const user = await loginService(email);

    // Check if user exists
    if (!user) {
      return res.status(404).send({message: "Invalid user or password"});
    }

    // Check if password matches
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    // If password does not match, return error
    if (!passwordIsValid) {
      return res.status(404).send({message: "Invalid user or password"});
    }

    const token = generateToken(user.id);

    res.send(token);
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      msg: "Internal Server Error",
    });
  }
};

export default login;
