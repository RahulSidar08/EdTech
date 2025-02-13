import { Student } from "../models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doetnv from "dotenv";
import { Agent } from "../models/agentModel.js";
import { Admin } from "../models/adminModel.js";
import createTokenAndSaveCookie from "../utils/generateToken.js";
doetnv.config();

export const studentRegister = async (req, res) => {
  try {
    let { fullname, email, phoneNumber, password, role, profile } = req.body;
    let { education, profilePhoto } = profile;
    let { degree, institution, graduationYear } = education;

    if (!fullname || !email || !phoneNumber || !password || !role || !profile) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    let existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Allready Exist",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    let newUser = await Student.create({
      fullname,
      email,
      phoneNumber,
      password: hash,
      role,
      profile: {
        education: {
          degree,
          institution,
          graduationYear,
        },
        profilePhoto,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Account Created Successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      Error: error,
    });
  }
};

export const agentRegister = async (req, res) => {
  try {
    let { fullname, email, phoneNumber, password, role, agencyDetails } =
      req.body;
    let { agencyName, agencyAddress } = agencyDetails;

    if (
      !fullname ||
      !email ||
      !phoneNumber ||
      !password ||
      !role ||
      !agencyDetails
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    let existingUser = await Agent.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Allready Exist",
      });
    }
    const hash = await bcrypt.hash(password, 10);

    let newUser = await Agent.create({
      fullname,
      email,
      phoneNumber,
      password: hash,
      role,
      agencyDetails: {
        agencyName,
        agencyAddress,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Account Created Successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      Error: error,
    });
  }
};

export const adminRegister = async (req, res) => {
  try {
    let { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    let existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Allready Exist",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    let newUser = await Admin.create({
      fullname,
      email,
      phoneNumber,
      password: hash,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "Account Created Successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      Error: error,
    });
  }
};

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
