import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    if (!firstname || !lastname || !email || !password) {
      throw new Error("All fields are required");
    }
    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) {
      res.status(400).json({ success: false, message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // create user
    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    // save in DB
    user.save();

    // Set a cookie for the user who is authentificated : JWT
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).josn({ succes: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ succes: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    res.status(200).json({
      success: true,
      message: "User logged in",
      user: { ...user._dov, password: undefined },
    });
  } catch (error) {
    console.log("error in loggin function", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export const logout = async (req, res, next) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ success: true, message: "User logged out" });
};
