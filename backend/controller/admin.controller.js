import { Agent } from "../models/agentModel.js";
import { Student } from "../models/studentModel.js";
import { Admin } from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doetnv from "dotenv";
doetnv.config();
import createTokenAndSaveCookie from "../utils/generateToken.js";
import { Scholarship } from "../models/scholarshipModel.js";

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

export const assignAgent = async (req, res) => {
  try {
    let { studentId, agentId } = req.body;

    // Check if required fields are present
    if (!studentId || !agentId) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // Check if student and agent exist
    let student = await Student.findById(studentId);
    let agent = await Agent.findById(agentId);

    if (!student || !agent) {
      return res.status(400).json({
        success: false,
        message: "Student or Agent does not exist",
      });
    }

    // Assign the agent to the student
    student.assignedAgent = agentId;
    agent.assignedStudents.push(studentId);
    await student.save();
    await agent.save();

    return res.status(200).json({
      success: true,
      message: "Agent Assigned Successfully",
    });
  } catch (error) {
    console.error("Error in assigning agent:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    let students = await Student.find();
    if (!students) {
      return res.status(400).json({
        success: false,
        message: "No Available",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Student fetch successfully",
      students,
    });
  } catch (error) {
    console.error("Error in getting student:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

export const getAllAgents = async (req, res) => {
  try {
    let agents = await Agent.find();
    if (!agents) {
      return res.status(400).json({
        success: false,
        message: "No Available",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Agent fetch successfully",
      agents,
    });
  } catch (error) {
    console.error("Error in getting agent:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

export const getAllScholarship = async (req, res) => {
  try {
    let scholarships = await Scholarship.find();
    if (!scholarships) {
      return res.status(200).json({
        success: true,
        message: "No Scholarship Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Scholarship fetched Successfully",
      scholarships,
    });
  } catch (error) {
    console.error("Error in getting scholarship:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};
