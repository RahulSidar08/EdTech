import { Agent } from "../models/agentModel.js";
import { Student } from "../models/studentModel.js";
import { Admin } from "../models/adminModel.js";
import { Scholarship } from "../models/scholarshipModel.js";
import { Application } from "../models/applicationModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doetnv from "dotenv";
doetnv.config();
import createTokenAndSaveCookie from "../utils/generateToken.js";

export const agentRegister = async (req, res) => {
    try {
      console.log(req.body)
      let { fullname, email, phoneNumber, password, role, agencyDetails } = req.body;
      let { agencyName } = agencyDetails;
  
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
          agencyName
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


    export const viewStudentScholarship = async (req, res) => {
      try {
        let userId = req.id;
        let studentId = req.params.id;
        console.log("Agent ID:", userId);
    
        // Fetch student by ID and populate appliedScholarships
        let student = await Student.findById(studentId).populate('appliedScholarships');
    
        // Check if student exists
        if (!student) {
          return res.status(404).json({
            success: false,
            message: "Student not found",
          });
        }
    
        // Check if student has applied for any scholarships
        if (!student.appliedScholarships || student.appliedScholarships.length === 0) {
          return res.status(200).json({
            success: true,
            message: "Student has not Applied for any scholarship yet",
            scholarships: [],
          });
        }
    
        return res.status(200).json({
          success: true,
          scholarships: student.appliedScholarships
        });
    
      } catch (error) {
        console.error("Error in getting student scholarships:", error);
        return res.status(500).json({
          success: false,
          message: "Server Error",
          error,
        });
      }
    };
    

  export const updateStatus = async (req, res) => {
    try {
      let applicationId = req.params.id;
      let { status } = req.body;
      let agentId = req.id; // Assuming the authenticated agent's ID is stored in req.user
  
      // Check if the status is valid
      const validStatuses = ["Pending", "Under Review", "Accepted", "Rejected"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid status"
        });
      }
  
      // Find the application
      let application = await Application.findById(applicationId);
      if (!application) {
        return res.status(404).json({
          success: false,
          message: "Application not found"
        });
      }
  
      // Update the status and the person who updated it
      application.status = status;
      application.updatedBy = agentId;
      await application.save(); // Await the save
  
      return res.status(200).json({
        success: true,
        message: "Status Updated Successfully"
      });
    } catch (error) {
      console.error("Error in Updating Status:", error);
      return res.status(500).json({
        success: false,
        message: "Server Error",
        error,
      });
    }
  };
  