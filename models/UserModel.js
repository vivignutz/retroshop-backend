//UserModel.js

import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true,
    unique: false,
  },
  lastName: { 
    type: String, 
    required: true,
    unique: false,
  },
  username: {
    required: true,
    type: String,
    unique: false,
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
    minlength: [6, "Minimum password length must be 6 characters"],
    select: false,
  },
  avatar: { type: String }
}, { versionKey: false });

// Encrypting user password
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

export { User, userSchema };
