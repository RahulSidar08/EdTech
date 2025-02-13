import { Scholarship } from "../models/scholarshipModel.js";
import { Student } from "../models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doetnv from "dotenv";
import createTokenAndSaveCookie from "../utils/generateToken.js";
doetnv.config();
export const getAppliedScholarship = async (req,res) => {
    try {
        let userId = req.id;

        const student = await Student.findById(userId).populate("appliedScholarships");

        // If student or scholarships not found
        if (!student || student.appliedScholarships.length === 0) {
          return res.status(404).json({
            success: false,
            message: "No applied scholarships found",
          });
        }
    
        // Return the list of applied scholarships
        return res.status(200).json({
          success: true,
          message: "Applied scholarships fetched successfully",
          scholarships: student.appliedScholarships,
        });

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            error
        })
    }
}

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