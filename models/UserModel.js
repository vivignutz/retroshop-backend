//UserModel.js
import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true,
  },
  lastName: { 
    type: String, 
    required: true 
  },
  username: {
    required: true,
    type: String,
  },
  email: { 
    type: String, 
    required: [true,"Please enter your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [6, "Minimum password length must be 6 characters"]
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true}
  },
  avatar: { type: String }
}, { versionKey: false });

const User = mongoose.model("User", userSchema);

export { User, userSchema };
