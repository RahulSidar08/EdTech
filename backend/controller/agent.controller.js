import { Agent } from "../models/agentModel.js";
import { Student } from "../models/studentModel.js";
import { Admin } from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doetnv from "dotenv";
doetnv.config();
import createTokenAndSaveCookie from "../utils/generateToken.js";

export const getStudents = async (req, res) => {
    try {
      let agentId = req.id;
  
      // Fetch students assigned to this agent
      const students = await Student.find({ assignedAgent: agentId });
  
      // If no students are assigned
      if (students.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No students assigned to you",
        });
      }
  
      // Return the list of assigned students
      return res.status(200).json({
        success: true,
        message: "Students fetched successfully",
        students,
      });
    } catch (error) {
      console.error("Error in getting students:", error);
      return res.status(500).json({
        success: false,
        message: "Server Error",
        error,
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