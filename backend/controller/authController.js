import { Student } from "../models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doetnv from "dotenv";
import { Agent } from "../models/agentModel.js";
import { Admin } from "../models/adminModel.js";
import createTokenAndSaveCookie from "../utils/generateToken.js";
doetnv.config();

export const login = async (req, res) => {
  try {
    let { email, password, role } = req.body;
    let user;
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    if (role === "student") {
      user = await Student.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Something went wrong",
        });
      }
    }
    if (role === "agent") {
      user = await Agent.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Something went wrong",
        });
      }
    }
    if (role === "admin") {
      user = await Admin.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Something went wrong",
        });
      }
    }

    let matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({
        success: false,
        message: "Wrong Password",
      });
    }
    let token = createTokenAndSaveCookie(user, res);

    return res.status(200).json({
      success: true,
      message: "User LoggedIn Successfully",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      Error: error,
    });
  }
};

export const getDetails = async (req, res) => {
  try {
    let { email } = req.body;
    let user = await Student.findOne({ email });
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      Error: error,
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie(
        "jwt",
        {
          httpOnly: true,
          sameSite: "Lax", // or "None" if using HTTPS
          secure: process.env.NODE_ENV === "production",
        },
        { maxAge: 0 }
      )
      .json({
        message: "Logged out successfully.",
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
