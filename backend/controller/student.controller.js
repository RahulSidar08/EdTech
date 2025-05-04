import { Scholarship } from "../models/scholarshipModel.js";
import { Student } from "../models/studentModel.js";
import { Application } from "../models/applicationModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doetnv from "dotenv";
import createTokenAndSaveCookie from "../utils/generateToken.js";
doetnv.config();
export const getAppliedScholarship = async (req, res) => {
  try {
    let userId = req.id;

    const student = await Student.findById(userId).populate(
      "appliedScholarships"
    );

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
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

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

export const viewAllScholarship = async (req, res) => {
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

export const applyForScholarship = async (req, res) => {
  try {
    let { studentId, scholarshipId } = req.body;
    if (!scholarshipId || !studentId) {
      return res.status(400).json({
        success: false,
        message: "Field requires",
      });
    }

    let existingApplication = await Application.findOne({
      Applicant: studentId,
      scholarship: scholarshipId,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "Already Applied",
      });
    }

    const scholarship = await Scholarship.findById(scholarshipId);
    if (!scholarship) {
      return res
        .status(404)
        .json({ success: false, message: "Scholarship not found" });
    }

    if (scholarship.applicants.includes(studentId)) {
      return res
        .status(400)
        .json({ success: false, message: "Already applied" });
    }

    scholarship.applicants.push(studentId);
    await scholarship.save();

    const application = await Application.create({
      scholarship: scholarshipId,
      Applicant: studentId,
    });

    return res.status(200).json({
      success: true,
      message: "Applied Successfully",
      application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const studentId = req.params.studentId; // Assuming you set req.user via middleware
    // let checkStudent = await Student.findById({ studentId });
    // if (!studentId) {
    //   return res.status(300).json({
    //     success: false,
    //     message: "Student does not exist",
    //   });
    // }
    const applications = await Application.find({ Applicant: studentId })
      .populate({
        path: "scholarship",
        select: "title amount deadline eligibility",
      })
      .sort({ createdAt: -1 });

    res.status(200).json({ applications });
  } catch (error) {
    console.error("Error fetching student applications:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    let studentId = req.params.id;

    if (!studentId) {
      return res.status(404).json({
        success: false,
        message: "Student ID is required",
      });
    }

    let student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student does not exist",
      });
    }

    return res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { fullname, email, phoneNumber, profilePhoto, education } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      {
        $set: {
          fullname,
          email,
          phoneNumber,
          profilePhoto,
          "profile.education": education,
        },
      },
      { new: true }
    );

    res.status(200).json({ success: true, student: updatedStudent });
  } catch (error) {
    console.error("Update failed:", error);
    res.status(500).json({ success: false, message: "Update failed" });
  }
};
